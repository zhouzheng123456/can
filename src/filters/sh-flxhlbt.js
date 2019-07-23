// 福利性护理补贴
export default(flxhlbt) => {
  var txt = '';
  if (flxhlbt == '1') {
    txt = '领取老年护理补贴(津贴)';
  } else if (flxhlbt == '2') {
    txt = '领取因公致残护理补贴(津贴)';
  } else if (flxhlbt == '3') {
    txt = '领取离休护理补贴(津贴)';
  } else if (flxhlbt == '4') {
    txt = '领取工伤保险生活护理费';
  }
  return txt;
}
