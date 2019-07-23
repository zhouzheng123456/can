export default(rel) => {
  rel = rel ? rel.slice(0,1) : 8;
  var txt = '';
  if (rel == "1") {
    txt = '配偶';
  } else if (rel == "2") {
    txt = '子';
  } else if (rel == "3") {
    txt = '女';
  } else if (rel == "4"){
    txt = '(外)孙(子/女)';
  } else if (rel == "5") {
    txt = '父母';
  } else if (rel == "6") {
    txt = '(外)祖父母';
  } else if (rel == "7"){
    txt = '兄/弟/姐/妹';
  }  else if (rel == "8") {
    txt = '其他';
  }
  return txt;
}

