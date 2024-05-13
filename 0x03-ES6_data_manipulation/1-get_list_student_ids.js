export default function getListStudentsIds(list) {
  if (Array.isArray(list)) {
    const idArray = list.map((elem) => elem.id);
    return idArray;
  }
  return [];
}
