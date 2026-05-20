import { readFileSync, existsSync } from 'node:fs';

const req = (ok, msg) => { if (!ok) throw new Error(msg); };

const files = {
  today: 'app/(child)/today.tsx', journeys: 'app/(child)/journeys.tsx', detail: 'app/(child)/journeys/[journeyId].tsx', values: 'app/(child)/values.tsx', treasures: 'app/(child)/treasures.tsx',
  audit: 'docs/LITTLE_DHARMA_IMPLEMENTED_ROUTE_VISUAL_AUDIT.md', task: 'docs/TASK_LOG.md'
};
Object.values(files).forEach((f) => req(existsSync(f), `Missing ${f}`));
const txt = Object.fromEntries(Object.entries(files).map(([k,v]) => [k, readFileSync(v,'utf8')]));

['Dharma Journeys','Ramayana Journey','Krishna Childhood Journey','Ganesha Wisdom Journey','Hanuman Courage Journey','Festival Journey','Values Journey','Luvlu'].forEach(t=>req(txt.journeys.includes(t),`journeys missing ${t}`));
['Kindness','Courage','Devotion','Patience','Gratitude','Truthfulness'].forEach(v=>req(txt.values.includes(v),`values missing ${v}`));
['Story Flowers','Blessing Notes','Value Petals','Diyas'].forEach(t=>req(txt.treasures.includes(t),`treasures missing ${t}`));
['Dharma Journeys','Values','My Treasures'].forEach(t=>req(txt.today.includes(t),`today missing ${t}`));
['449','452–453','457–460','462–469','487','19–21','29–31','76–85','176–185','236–245','304','348–365'].forEach(t=>req(txt.audit.includes(t),`audit missing ${t}`));
['Luvlu shown','future-only','Sprint 81 not started'].forEach(t=>req(txt.audit.includes(t),`audit missing ${t}`));
req(/Sprint 80 completed/i.test(txt.task), 'TASK_LOG missing Sprint 80 append');

const forbidden = ['microphone','voice command','recording','child speech capture','AI conversation','XP','coins','streak','leaderboard','ranking','backend','auth','cloud sync','CMS','analytics','telemetry'];
for (const term of forbidden) {
  req(!txt.journeys.includes(term) && !txt.values.includes(term) && !txt.today.includes(term), `Forbidden token in child routes: ${term}`);
}

console.log('validate-dharma-journeys-treasures-values-reconstruction-v1: PASS');
