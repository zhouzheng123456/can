// 医疗保险
export default(ylbx) => {
  var txt = '';
  if (ylbx == '1') {
    txt = '享受城镇职工基本医疗';
  } else if (ylbx == '2') {
    txt = '享受农村合作医疗';
  } else if (ylbx == '3') {
    txt = '享受医疗补助';
  } else if (ylbx == '4') { 
    txt = '享受城镇居民医疗保险';
  } else if (ylbx == '5') {
    txt = '享受其他医疗保险';
  } else if (ylbx == '6') {
    txt = '无医疗保险';
  }
  return txt;
}
