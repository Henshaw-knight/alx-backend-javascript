module.exports = function calculateNumber(type, a, b) {
  if (Number.isNaN(a) || Number.isNaN(b))
    throw new TypeError('Arguments must be numbers');
  return Math.round(a) + Math.round(b);
}
