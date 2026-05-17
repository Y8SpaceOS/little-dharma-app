import fs from 'node:fs';

const requiredColumns = ['qaArea', 'surface', 'expectedBehavior', 'status', 'notes'];
const allowedStatuses = new Set(['pass', 'pending_manual_qa', 'minor_issue', 'blocked']);
const requiredRoutes = [
  'app/(child)/today.tsx',
  'app/story/[slug].tsx',
  'app/(child)/treasures.tsx',
  'app/(parent)/dashboard.tsx',
  'app/(parent)/privacy.tsx',
  'app/onboarding.tsx'
];

const mustExist = ['docs/ERROR_BOUNDARIES_QA.md', 'docs/content/error-boundaries-qa.csv', 'src/components/RouteErrorBoundary.tsx'];
for (const file of mustExist) if (!fs.existsSync(file)) throw new Error(`Missing required file: ${file}`);

function parseCsv(raw) {
  const rows = []; let row = []; let cell = ''; let q = false;
  for (let i = 0; i < raw.length; i += 1) {
    const c = raw[i];
    if (c === '"') { if (q && raw[i + 1] === '"') { cell += '"'; i += 1; } else q = !q; continue; }
    if (c === ',' && !q) { row.push(cell); cell = ''; continue; }
    if ((c === '\n' || c === '\r') && !q) {
      if (c === '\r' && raw[i + 1] === '\n') i += 1;
      row.push(cell); cell = '';
      if (row.some((v) => v.length > 0)) rows.push(row);
      row = []; continue;
    }
    cell += c;
  }
  if (cell.length || row.length) { row.push(cell); if (row.some((v) => v.length > 0)) rows.push(row); }
  return rows;
}

const qaDoc = fs.readFileSync('docs/ERROR_BOUNDARIES_QA.md', 'utf8').toLowerCase();
for (const phrase of ['no telemetry', 'no backend reporting', 'manual iphone qa', 'not production-grade crash reporting']) {
  if (!qaDoc.includes(phrase)) throw new Error(`QA doc missing phrase: ${phrase}`);
}

const csvRows = parseCsv(fs.readFileSync('docs/content/error-boundaries-qa.csv', 'utf8'));
const header = csvRows[0] || [];
for (const col of requiredColumns) if (!header.includes(col)) throw new Error(`Missing CSV column: ${col}`);
const idx = Object.fromEntries(requiredColumns.map((c) => [c, header.indexOf(c)]));
const dataRows = csvRows.slice(1);
if (dataRows.length < 14) throw new Error('CSV must include at least 14 QA rows');
for (const [i, row] of dataRows.entries()) {
  for (const col of ['qaArea', 'surface', 'expectedBehavior', 'status']) {
    if (!(row[idx[col]] || '').trim()) throw new Error(`Row ${i + 2} missing ${col}`);
  }
  if (!allowedStatuses.has((row[idx.status] || '').trim())) throw new Error(`Row ${i + 2} invalid status`);
}

const boundary = fs.readFileSync('src/components/RouteErrorBoundary.tsx', 'utf8').toLowerCase();
if (!boundary.includes('componentdidcatch') && !boundary.includes('getderivedstatefromerror')) throw new Error('Boundary must use componentDidCatch or getDerivedStateFromError');
for (const term of ['stack', 'trace', 'exception']) if (boundary.includes(term)) throw new Error(`Boundary fallback cannot contain raw term: ${term}`);
for (const phrase of ['fatal error', 'data corrupted', 'something terrible happened', 'your fault', 'lost forever', 'we tracked this', 'sent report', 'server error', 'system failure']) {
  if (boundary.includes(phrase) || qaDoc.includes(phrase)) throw new Error(`Forbidden phrase present: ${phrase}`);
}
for (const route of requiredRoutes) {
  const content = fs.readFileSync(route, 'utf8');
  if (!content.includes('RouteErrorBoundary')) throw new Error(`Route missing RouteErrorBoundary reference: ${route}`);
}
console.log('validate-error-boundaries: ok');
