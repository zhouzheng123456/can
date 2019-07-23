export default(updateTitle) => {
  var title = '';
  if (updateTitle == '1') {
    title = '基础信息';
  } else if (updateTitle == '2'){
    title = '惠残信息';
  } else if (updateTitle == '3'){
    title = '就业年龄段'
  } else if (updateTitle == '4'){
    title = '文化体育'
  } else if (updateTitle == '5'){
    title = '精准扶贫'
  } else if (updateTitle == '6'){
    title = '精准康复'
  } else if (updateTitle == '7'){
    title = '教育'
  } else if (updateTitle == '8'){
    title = '学费资助'
  }
  return title;
}
