const test = require('node:test');
const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');

function inspectJourneyMaps() {
  const script = `
    const { contentRegistryStories, contentRegistryJourneys } = await import('./src/data/contentRegistry.ts');
    const { getDharmaJourneyMapByJourneyId, resolveDharmaJourneyMapJourneyId } = await import('./src/services/dharmaJourneyMapService.ts');
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
        registryJourneyExists: contentRegistryJourneys.some((journey) => journey.id === canonicalId),
        linkedStoryCount: contentRegistryStories.filter((story) => story.journeyId === canonicalId).length,
        supportedJourney: map?.supportedJourney ?? false,
        stepCount: map?.steps.length ?? 0,
        firstStepOrder: map?.steps[0]?.order ?? null
      };
    });
    console.log(JSON.stringify(result));
  `;

  return JSON.parse(execFileSync(process.execPath, ['--import', 'tsx', '-e', script], { encoding: 'utf8' }));
}

test('Dharma Journey Map canonical Story World routes render ordered steps', () => {
  const rows = inspectJourneyMaps();

  for (const row of rows) {
    assert.equal(row.registryJourneyExists, true, `${row.routeId} should resolve to a registered journey`);
    assert.equal(row.supportedJourney, true, `${row.routeId} should be supported by the journey map`);
    assert.ok(row.stepCount > 0, `${row.routeId} should render ordered story steps`);
    assert.equal(row.firstStepOrder, 1, `${row.routeId} should start with step 1`);
  }
});
