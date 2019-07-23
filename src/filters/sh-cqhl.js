// 是否需要长期护理
export default(cqhl) => {
  var txt = '';
  if (cqhl == "Y") {
    txt = '是';
  } else {
    txt = '否';
  }
  return txt;
}
