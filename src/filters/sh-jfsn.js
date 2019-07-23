// 缴费是否满十年
export default(jsfn) => {
  var txt = '';
  if (jsfn == 1) {
    txt = '是';
  } else if (jsfn == 2) {
    txt = '否';
  }
  return txt;
}