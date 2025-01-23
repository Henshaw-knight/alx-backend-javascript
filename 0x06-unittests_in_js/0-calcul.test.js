const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('Sum of two numbers -> calculateNumber', () => {
  it('checks that a is rounded', () => {
    assert.strictEqual(calculateNumber(1.98, 2), 4);
  });

  it('checks that b is rounded', () => {
    assert.strictEqual(calculateNumber(2, 5.7564), 8);
  });

  it('checks that sum of a and b is a whole number', () => {
    assert.strictEqual(calculateNumber(3.12, 7.95), 11);
  });
});
