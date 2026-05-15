const test = require('node:test');
const assert = require('node:assert/strict');

test('foundation smoke test', () => {
  assert.equal('little'.toUpperCase(), 'LITTLE');
});
