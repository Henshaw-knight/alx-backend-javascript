const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('Arithmetic operations on two numbers -> calculateNumber', () => {
  describe("type === 'SUM'", () => {
    it('checks that positive numbers are rounded and added correctly', () => {
      assert.strictEqual(calculateNumber('SUM', 5.0, 7.5), 13);
      assert.strictEqual(calculateNumber('SUM', 2.8, 3.2), 6);
      assert.strictEqual(calculateNumber('SUM', 10.7, 4.8), 16);
    });

    it('checks that negative numbers are rounded and added correctly', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -4.2, -8.6), 5);
      assert.strictEqual(calculateNumber('SUBTRACT', -1.6, -3.0), 1);
      assert.strictEqual(calculateNumber('SUBTRACT', -11.53, -2.8), -9);
    });

    it('checks that positive and negative numbers are added correctly', () => {
      assert.strictEqual(calculateNumber('SUM', 9.2, -3.8), 5);
      assert.strictEqual(calculateNumber('SUM', -5.6, 5.1), -1);
    }) 
  })

  describe("type === 'SUBTRACT'", () => {
    it('checks that subtraction on positive numbers work correctly', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 7.0, 2.5), 4);
      assert.strictEqual(calculateNumber('SUBTRACT', 2.8, 3.2), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', 10.7, 4.8), 6);
    });

    it('checks that subtraction on negative numbers work correctly', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -4.2, -8.6), 5);
      assert.strictEqual(calculateNumber('SUBTRACT', -5.6, -3.0), -3);
    });

    it('checks that positive and negative numbers are added correctly', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 9.2, -3.8), 13);
      assert.strictEqual(calculateNumber('SUBTRACT', -5.6, 5.1), -11);
    }) 
  })
  
  describe('type === "DIVIDE"', () => {
    it('checks that positive numbers are divided correctly', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8.2, 2.0), 4);
    });

    it('checks that negative numbers are divided correctly', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -5.6, -3.2), 2);
    });

    it('checks that positive and negative numbers are divided correctly', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8.2, -2.0), -4);
      assert.strictEqual(calculateNumber('DIVIDE', -5.6, 3.2), -2);
    });
});

describe('More edge cases', () => {
  it('should throw an error for invalid operations', () => {
    assert.throws(() => calculateNumber('MULTIPLY', 10, 5), /Invalid operation/);
  });

  it('should throw an error when dividing by zero', () => {
    assert.throws(() => calculateNumber('DIVIDE', 10, 0), /Cannot divide by zero/);
  });
});
});
