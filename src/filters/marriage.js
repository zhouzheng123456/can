export default(mar) => {
  var txt = '';
  if (mar == "10") {
    txt = '未婚';
  } else if (mar == "20") {
    txt = '已婚';
  } else if (mar == "30") {
    txt = '丧偶';
  } else if (mar == "40") {
    txt = '离婚';
  } else if (mar == "90") {
    txt = '其他';
  }
  return txt;
}
