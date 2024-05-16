export default function cleanSet(set, startString) {
  const strArr = [];
  for (const value of set) {
    if (value.startsWith(startString) && startString.length !== 0) {
      const remainingPart = value.substring(startString.length);
      strArr.push(remainingPart);
    }
  }
  return strArr.join('-');
}
