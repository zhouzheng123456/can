// 是否困难社保补贴
export default(sbbt) => {
  var txt = '';
  if (sbbt == 1) {
    txt = '是';
  } else if (sbbt == 2) {
    txt = '否';
  }
  return txt;
}