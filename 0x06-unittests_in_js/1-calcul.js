module.exports = function calculateNumber(type, a, b) {
  const allowedOperations = ['SUM', 'SUBTRACT', 'DIVIDE'];

  if (!allowedOperations.includes(type)) {
    throw new Error(`Invalid operation type: ${type}`);
  }
  if (Number.isNaN(a) || Number.isNaN(b))
    throw new TypeError('Arguments must be numbers');

  if (type === 'SUM') return Math.round(a) + Math.round(b)
  else if (type === 'SUBTRACT') return Math.round(a) - Math.round(b)
  else if (type === 'DIVIDE') {
    if (Math.round(b) === 0) throw new Error('Cannot divide by zero');
    return (Math.round(a) / Math.round(b))
  }
}
