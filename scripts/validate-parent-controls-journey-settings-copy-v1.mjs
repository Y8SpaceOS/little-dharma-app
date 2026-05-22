import fs from 'fs';
import path from 'path';

const root = process.cwd();
const checks = [];
const pass = (msg) => checks.push(`PASS: ${msg}`);
const fail = (msg) => checks.push(`FAIL: ${msg}`);

const paths = {
  service: path.join(root, 'src/services/parentControlsJourneySettingsCopyService.ts'),
  docs: path.join(root, 'docs/parent/PARENT_CONTROLS_JOURNEY_SETTINGS_COPY_V1.md'),
  controls: path.join(root, 'app/(parent)/controls.tsx'),
  pkg: path.join(root, 'package.json'),
};

const read = (file) => (fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '');
const service = read(paths.service);
const docs = read(paths.docs);
const controls = read(paths.controls);
const pkg = read(paths.pkg);

fs.existsSync(paths.service) ? pass('Service exists.') : fail('Missing service file.');
fs.existsSync(paths.docs) ? pass('Docs exists.') : fail('Missing docs file.');
fs.existsSync(paths.controls) ? pass('Controls screen exists.') : fail('Missing controls screen.');

const requiredLines = [
  'Journey choices stay gentle.',
  'Your child can go one story at a time.',
  'You can pause and return later.',
  'Progress stays on this device.',
  'No streaks, rankings, or pressure.',
  'Broad age bands guide story readiness.',
  'Sacred journeys are handled with care.',
  'More parent choices can be added later.',
];

for (const line of requiredLines) {
  service.includes(line) ? pass(`Service includes: ${line}`) : fail(`Service missing: ${line}`);
  docs.includes(line) ? pass(`Docs includes: ${line}`) : fail(`Docs missing: ${line}`);
}

controls.includes('getParentControlsJourneySettingsBullets') ? pass('Controls imports journey settings copy service.') : fail('Controls missing journey settings service import/binding.');
controls.includes('Journey settings copy') ? pass('Controls includes static copy block title.') : fail('Controls missing journey settings copy title.');

const banned = ['analytics', 'telemetry', 'notifications', 'whatsapp', 'share(', 'ai personalization'];
for (const token of banned) {
  !service.toLowerCase().includes(token) ? pass(`Service avoids banned token: ${token}`) : fail(`Service contains banned token: ${token}`);
}

pkg.includes('validate:parent-controls-journey-settings-copy-v1')
  ? pass('Package script registered.')
  : fail('Missing package script registration.');

for (const line of checks) console.log(line);
const failed = checks.filter((line) => line.startsWith('FAIL')).length;
if (failed) process.exit(1);
