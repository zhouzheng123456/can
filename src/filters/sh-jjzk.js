// 家庭经济状况
export default(jjzk) => {
  var txt = '';
  if (jjzk == 1) {
    txt = '家庭人均收入低于当地城乡居民最低生活保障线';
  } else if (jjzk == 2) {
    txt = '农村领取社会救济金';
  } else if (jjzk == 3) {
    txt = '家庭经济困难';
  }
  return txt;
}