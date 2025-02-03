const expect  = require('chai').expect;
const { describe, it, context } = require('mocha');
const calculateNumber = require('./2-calcul_chai');

describe('Arithmetic operations on two numbers -> calculateNumber', () => {
  describe("type === 'SUM'", () => {
    it('checks that positive numbers are rounded and added correctly', () => {
      expect(calculateNumber('SUM', 5.0, 7.5)).to.equal(13);
      expect(calculateNumber('SUM', 2.8, 3.2)).to.equal(6);
      expect(calculateNumber('SUM', 10.7, 4.8)).to.equal(16);
    });

    it('checks that negative numbers are rounded and added correctly', () => {
      expect(calculateNumber('SUBTRACT', -4.2, -8.6)).to.equal(5);
      expect(calculateNumber('SUBTRACT', -1.6, -3.0)).to.equal(1);
      expect(calculateNumber('SUBTRACT', -11.53, -2.8)).to.equal(-9);
    });

    it('checks that positive and negative numbers are added correctly', () => {
      expect(calculateNumber('SUM', 9.2, -3.8)).to.equal(5);
      expect(calculateNumber('SUM', -5.6, 5.1)).to.equal(-1);
    }) 
  })

  describe("type === 'SUBTRACT'", () => {
    it('checks that subtraction on positive numbers work correctly', () => {
      expect(calculateNumber('SUBTRACT', 7.0, 2.5)).to.equal(4);
      expect(calculateNumber('SUBTRACT', 2.8, 3.2)).to.equal(0);
      expect(calculateNumber('SUBTRACT', 10.7, 4.8)).to.equal(6);
    });

    it('checks that subtraction on negative numbers work correctly', () => {
      expect(calculateNumber('SUBTRACT', -4.2, -8.6)).to.equal(5);
      expect(calculateNumber('SUBTRACT', -5.6, -3.0)).to.equal(-3);
    });

    it('checks that positive and negative numbers are added correctly', () => {
      expect(calculateNumber('SUBTRACT', 9.2, -3.8)).to.equal(13);
      expect(calculateNumber('SUBTRACT', -5.6, 5.1)).to.equal(-11);
    }); 
  });
  
  describe('type === "DIVIDE"', () => {
    it('checks that positive numbers are divided correctly', () => {
      expect(calculateNumber('DIVIDE', 8.2, 2.0)).to.equal(4);
    });

    it('checks that negative numbers are divided correctly', () => {
      expect(calculateNumber('DIVIDE', -5.6, -3.2)).to.equal(2);
    });

    it('checks that positive and negative numbers are divided correctly', () => {
      expect(calculateNumber('DIVIDE', 8.2, -2.0)).to.equal(-4);
      expect(calculateNumber('DIVIDE', -5.6, 3.2)).to.equal(-2);
    });
  });

  describe('More edge cases', () => {
    it('should throw an error for invalid operations', () => {
      expect(() => calculateNumber('MULTIPLY', 10, 5)).to.throw('Invalid operation');
    });

  it('should throw an error when dividing by zero', () => {
      expect(calculateNumber('DIVIDE', 10, 0)).to.equal('Error');
    });
  });
});
