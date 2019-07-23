// 医疗保险
export default(jyfs) => {
  var txt = '';
  if (jyfs == '1') {
    txt = '个体工商户就业';
  } else if (jyfs == '2') {
    txt = '扶贫基地就业';
  } else if (jyfs == '3') {
    txt = '庇护中心就业';
  } else if (jyfs == '4') { 
    txt = '文创基地就业';
  } else if (jyfs == '5') {
    txt = '享受其他医疗保险';
  } else if (jyfs == '6') {
    txt = '其他灵活就业';
  }
  return txt;
}
