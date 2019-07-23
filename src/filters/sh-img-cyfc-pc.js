// 创业图片附件类型(pc端)
export default(file) => {
  var txt = '';
  if (file == 0) {
    txt = '户口薄';
  } else if(file == 1) {
    txt = '残疾证或军残证';
  }else if (file == 2) {
    txt = '身份证';
  } else if (file == 3) {
    txt = '工商营业执照';
  } else if(file == 4) {
    txt = '税务登记证';
  } else if(file == 5) {
    txt = '正常经营6个月(含)以上的营业流水';
  }
  return txt;
}