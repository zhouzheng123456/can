// 护理补贴图片附件类型(pc端)
export default(file) => {
  var txt = '';
  if (file == 0) {
    txt = '户口薄';
  } else if (file == 1) {
    txt = '残疾证或军残证';
  } else if (file == 2) {
    txt = '身份证';
  } else if(file == 3) {
    txt = '外区残疾人需原办证区证明';
  } else if(file == 4) {
    txt = '申请单';
  }
  return txt;
}