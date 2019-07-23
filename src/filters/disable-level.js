export default(dis) => {
  var txt = '';
  if (dis == "1") {
    txt = '一级';
  } else if (dis == "2") {
    txt = '二级';
  } else if (dis == "3") {
    txt = '三级';
  } else if (dis == "4"){
    txt = '四级';
  } else if (dis == "5") {
    txt = '不符合';
  }
  return txt;
}
