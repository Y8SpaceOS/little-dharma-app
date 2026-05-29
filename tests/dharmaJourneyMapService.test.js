const test = require('node:test');
const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');

function inspectJourneyMaps() {
  const script = `
    const { contentRegistryStories, contentRegistryJourneys } = await import('./src/data/contentRegistry.ts');
    const {
      dharmaJourneyMapCanonicalRouteIdsV1,
      dharmaJourneyMapJourneyIdAliasesV1,
      getDharmaJourneyMapByJourneyId,
      resolveDharmaJourneyMapJourneyId
    } = await import('./src/services/dharmaJourneyMapService.ts');
    const routeIds = [
      'krishna-childhood-pack-1',
      'ramayana-journey-pack-1',
      'ganesha-wisdom-pack-1',
      'ganesha-wisdom-journey',
      'krishna-childhood-journey-pack-1',
      'ganesha-wisdom-journey-pack-1'
    ];
    const result = routeIds.map((routeId) => {
      const canonicalId = resolveDharmaJourneyMapJourneyId(routeId);
      const map = getDharmaJourneyMapByJourneyId(routeId);
      return {
        routeId,
        canonicalId,
        expectedCanonicalId: dharmaJourneyMapJourneyIdAliasesV1[routeId] ?? routeId,
        registryJourneyExists: contentRegistryJourneys.some((journey) => journey.id === canonicalId),
        linkedStoryCount: contentRegistryStories.filter((story) => story.journeyId === canonicalId).length,
        supportedJourney: map?.supportedJourney ?? false,
        mapJourneyId: map?.journeyId ?? null,
        stepCount: map?.steps.length ?? 0,
        stepOrders: map?.steps.map((step) => step.order) ?? []
      };
    });
    console.log(JSON.stringify({ canonicalRouteIds: dharmaJourneyMapCanonicalRouteIdsV1, result }));
  `;

  return JSON.parse(execFileSync(process.execPath, ['--import', 'tsx', '-e', script], { encoding: 'utf8' }));
}

test('Dharma Journey Map canonical Story World routes render ordered steps', () => {
  const { canonicalRouteIds, result: rows } = inspectJourneyMaps();

  assert.deepEqual(canonicalRouteIds, [
    'krishna-childhood-pack-1',
    'ramayana-journey-pack-1',
    'ganesha-wisdom-pack-1',
    'ganesha-wisdom-journey'
  ]);

  for (const row of rows) {
    assert.equal(row.canonicalId, row.expectedCanonicalId, `${row.routeId} should resolve to its expected canonical ID`);
    assert.equal(row.registryJourneyExists, true, `${row.routeId} should resolve to a registered journey`);
    assert.equal(row.supportedJourney, true, `${row.routeId} should be supported by the journey map`);
    assert.equal(row.mapJourneyId, row.canonicalId, `${row.routeId} should return the canonical journey map`);
    assert.ok(row.linkedStoryCount > 0, `${row.routeId} should be used by registered Story World stories`);
    assert.ok(row.stepCount > 0, `${row.routeId} should render ordered story steps`);
    assert.equal(row.stepOrders[0], 1, `${row.routeId} should start with step 1`);
    assert.deepEqual(row.stepOrders, row.stepOrders.toSorted((a, b) => a - b), `${row.routeId} steps should stay ordered`);
  }
});
