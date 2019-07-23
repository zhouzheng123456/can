export default(gender) => {
  var sex = '';
  if (gender == 1) {
    sex = '男';
  } else if (gender == 2) {
    sex = '女';
  }
  return sex;
}