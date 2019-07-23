export default(hk) => {
  var txt = '';
  if (hk == 1) {
    txt = '农业';
  } else if (hk == 2) {
    txt = '非农业';
  }
  return txt;
}