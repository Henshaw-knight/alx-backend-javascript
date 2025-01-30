const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('Arithmetic operations on two numbers -> calculateNumber', () => {
  it('checks that correct operation type is passed') {
    assert.strictEqual
  }
  it('checks that a is rounded', () => {
    assert.strictEqual(calculateNumber(1.98, 2), 4);
    assert.strictEqual(calculateNumber(3.69, 7), 11);
  });

  it('checks that b is rounded', () => {
    assert.strictEqual(calculateNumber(2, 5.7564), 8);
    assert.strictEqual(calculateNumber(0, 1.3), 1);
  });

  it('checks that sum of a and b is a whole number', () => {
    assert.strictEqual(calculateNumber(3.12, 7.95), 11);
  });
});
