// 是否低保
export default(db) => {
  var txt = '';
  if (db == 1) {
    txt = '是';
  } else if (db == 2) {
    txt = '否';
  }
  return txt;
}