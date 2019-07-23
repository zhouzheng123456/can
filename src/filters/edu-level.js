export default(edu) => {
  var txt = '';
  if (edu == "81") {
    txt = '小学';
  } else if (edu == "71") {
    txt = '初中';
  } else if (edu == "61"){
    txt = '高中';
  } else if (edu == "47") {
    txt = '技校';
  } else if (edu == "44") {
    txt = '职高';
  } else if (edu == "41") {
    txt = '中专';
  } else if (edu == "31") {
    txt = '大专';
  } else if (edu == "21"){
    txt = '本科';
  }  else if (edu == "14") {
    txt = '硕士';
  } else if (edu == "11") {
    txt = '博士';
  } else if (edu == "90"){
    txt = '其他';
  } else {
    txt = '';
  }
  return txt;
}
