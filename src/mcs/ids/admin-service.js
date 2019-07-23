import axios from 'axios'
import { ADM, MIS } from '../../data/common'

var IDS_API = {};

// 用户信息
IDS_API.user = () => {
  return axios.request({
    url: ADM + '/athena-admin/ids/user/me',
    method: 'get',
    withCredentials: true
  }).then(res => res.data)
}
// 百度AI 人脸检测 
IDS_API.detect = (params) => {
  return axios.request({
    url: 'https://aip.baidubce.com/rest/2.0/face/v3/detect?access_token=24.545f2835fef5a85fc7f8c27d4c877ed5.2592000.1563002905.282335-16507677',
    method: 'POST',
    // headers: {
    //   'Content-Type': 'application/json'
    // },
    // withCredentials: false,
    data: params
  })
}
// 百度AI 人脸对比
IDS_API.match = (params) => {
  return axios.request({
    url: 'https://aip.baidubce.com/rest/2.0/face/v3/match?access_token=24.545f2835fef5a85fc7f8c27d4c877ed5.2592000.1563002905.282335-16507677',
    method: 'POST',
    // headers: {
    //   'Content-Type': 'application/json'
    // },
    // withCredentials: false,
    data: params
  })
}
// 百度AI 身份证OCR
IDS_API.scan_card = (params) => {
  return axios.request({
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    url: 'https://aip.baidubce.com/rest/2.0/ocr/v1/idcard?access_token=24.18b64d2d44b4bf95d25743ed20fd8a5a.2592000.1563075380.282335-16516705',
    method: 'POST',
    data: params
  })
}

export default IDS_API;