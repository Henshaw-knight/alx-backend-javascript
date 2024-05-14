export default function hasValuesFromArray(set, array) {
  let result = true;

  for (const elem of array) {
    result = result && set.has(elem);
  }
  return result;
}
