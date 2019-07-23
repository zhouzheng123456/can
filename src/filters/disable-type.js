export default(dis) => {
  var txt = '';
  if (dis == "1") {
    txt = '视力';
  } else if (dis == "2") {
    txt = '听力';
  } else if (dis == "3") {
    txt = '言语';
  } else if (dis == "4"){
    txt = '肢体';
  } else if (dis == "5") {
    txt = '智力';
  } else if (dis == "6") {
    txt = '精神';
  } else if (dis == "7"){
    txt = '多重';
  }
  return txt;
}
