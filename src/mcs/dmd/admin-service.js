import axios from 'axios'
import { ADM, MIS } from '../../data/common'

var DMD_API = {};


// 百度AI 人脸检测 
DMD_API.detect = (params) => {
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

export default DMD_API;