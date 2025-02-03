class Utils {
  static calculateNumber(type, a, b) {
    const allowedOperations = ['SUM', 'SUBTRACT', 'DIVIDE'];

    if (!allowedOperations.includes(type)) {
      throw new Error(`Invalid operation type: ${type}`);
    }
    if (Number.isNaN(a) || Number.isNaN(b))
      throw new TypeError('Arguments must be numbers');

    if (type === 'SUM') return Math.round(a) + Math.round(b)
    else if (type === 'SUBTRACT') return Math.round(a) - Math.round(b)
    else if (type === 'DIVIDE') {
      if (Math.round(b) === 0) return 'Error';
      return (Math.round(a) / Math.round(b))
    }
  }
}

module.exports = Utils;
