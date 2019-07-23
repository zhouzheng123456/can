
export default (type, val) => {
  if (type == 'phone') {
    return phone
  } else if (type == 'card') {
    return card(val)
  }
}

function phone(val) {
  return {
    valid: (/^1[3|4|5|7|8][0-9]{9}$/).test(val),
    msg: '请输入正确的手机号!'
  }
}
function card(val) {
  return {
    valid: (/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/).test(val),
    msg: '请输入正确的身份证!'
  }
}