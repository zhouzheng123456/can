// 图片附件类型(移动端)
export default(file) => {
  var txt = '';
  if (file == 'hkPath') {
    txt = '户口薄';
  } else if (file == 'disablePath') {
    txt = '残疾证或军残证';
  } else if (file == 'cardPath') {
    txt = '身份证';
  } else if(file == 'applyPath') {
    txt = '申请单';
  } else if(file == 'otherPath') {
    txt = '外区残疾人需原办证区证明';
  } else if(file == 'dbPath') {
    txt = '低保证';
  } else if(file == 'colorPic') {
    txt = '一寸彩照';
  } else if (file == 'carPhoto') {
    txt = '机动车人、车合影彩照';
  } else if (file == 'rollChair') {
    txt = '机动轮椅车发票';
  } else if (file == 'licence') {
    txt = '工商营业执照';
  } else if (file == 'certificate') {
    txt = '税务登记证';
  } else if (file == 'busFlow') {
    txt = '正常经营6个月(含)以上的营业流水';
  }
  return txt;
}