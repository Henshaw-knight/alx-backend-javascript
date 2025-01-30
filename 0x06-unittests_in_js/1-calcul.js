module.exports = function calculateNumber(type, a, b) {
  if (Number.isNaN(a) || Number.isNaN(b))
    throw new TypeError('Arguments must be numbers');

  if (type === 'SUM') return Math.round(a) + Math.round(b)
  else if (type === 'SUBTRACT') return Math.round(a) - Math.round(b)
  else if (type === 'DIVIDE') {
    if (round(b) === 0) return 'Error'
    return (round(a) / round(b))
  }
}
