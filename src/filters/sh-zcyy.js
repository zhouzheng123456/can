// 致残原因 先天因病意外其他
export default(zcyy) => {
  var txt = '';
  if (zcyy == '1') {
    txt = '先天';
  } else if (zcyy == '2') {
    txt = '因病';
  } else if (zcyy == '3') {
    txt = '意外';
  } else if(zcyy == '4') {
    txt = '其他';
  }
  return txt;
}
