import axios from 'axios'

const WcBaseUrl = 'http://zc.wuchang.gov.cn'
// const WcBaseUrl = 'http://192.168.2.115:8060'; http://10.102.85.26/disable-mis/fpbk/hlbt-evt/his?codex%5B%22areaCode%22%5D=420106&limit=20&pageno=1
const Url = {
  login: WcBaseUrl + '/athena-admin/specter_security_login_on',
  user: WcBaseUrl + '/athena-admin/ids/user/me',
  output: WcBaseUrl + '/athena-admin/specter_security_login_out',
  dadList: WcBaseUrl + '/disable-mis/dad/dad-card/list',
  lawList: WcBaseUrl + '/disable-law/query/match!list_all_json',
  lawMatch: WcBaseUrl + '/disable-law/query/match!list_json',
  todoList: WcBaseUrl + '/athena-admin/msg/todos/list',
  todoView: WcBaseUrl + '/athena-admin/msg/todos/view',
  noticeList: WcBaseUrl + '/athena-admin/cms/notice/list',
  userChangeInfo: WcBaseUrl + '/athena-admin/ids/user-detail/save',
  setPwd: WcBaseUrl + '/athena-admin/ids/account-reg/modify-psw',
  oldPwd: WcBaseUrl + '/athena-admin/ids/account-reg/check-pswd',
  genderChartUrl: WcBaseUrl + '/disable-mis/dad/total/stat-gender',
  getCard: WcBaseUrl  + '/disable-mis/dad/dad-card/get',
  hlbtObjList: WcBaseUrl + '/disable-mis/fpbk/hlbt-obj/list',
  hlbtTaskList: WcBaseUrl + '/disable-mis/fpbk/hlbt-evt/his',
  hlbtView: WcBaseUrl + '/disable-mis/fpbk/hlbt-evt/view',
  hlbtSave: WcBaseUrl + '/disable-mis/fpbk/hlbt-evt/save',
  hlbtIssueList: WcBaseUrl + '/disable-mis/fpbk/hlbt-rcd/list-rcd',
  knbtObjList: WcBaseUrl + '/disable-mis/fpbk/shknbt-obj/list',
  knbtObjView: WcBaseUrl + '/disable-mis/fpbk/shknbt-evt/view',
  KnbtObjIssueList: WcBaseUrl + '/disable-mis/fpbk/shknbt-rcd/list-rcd',
  knbtSave: WcBaseUrl + '/disable-mis/fpbk/shknbt-evt/save',
  knbtTaskList: WcBaseUrl + '/disable-mis/fpbk/shknbt-evt/his',
  sjbtSave: WcBaseUrl + '/disable-mis/wqrz/lysjbz-evt/save',
  rybtSave: WcBaseUrl + '/disable-mis/wqrz/rybt-evt/save',
  fybtSave: WcBaseUrl + '/disable-mis/kfxt/fybt-evt/save',
  zybtSave: WcBaseUrl + '/disable-mis/kfxt/zybz-evt/save',
  cyfcSave: WcBaseUrl + '/disable-mis/fwzx/cyfc-evt/save',
  sbbtSave: WcBaseUrl + '/disable-mis/fwzx/jysbbt-evt/save',
  sjbtObjList: WcBaseUrl + '/disable-mis/wqrz/lysjbz-obj/list',
  sjbtView: WcBaseUrl + '/disable-mis/wqrz/lysjbz-evt/view',
  sjbtIssueList: WcBaseUrl + '/disable-mis/wqrz/lysjbz-rcd/list-rcd',
  sjbtTaskList: WcBaseUrl + '/disable-mis/wqrz/lysjbz-evt/his',
  rybtObjList: WcBaseUrl + '/disable-mis/wqrz/rybt-obj/list',
  rybtView: WcBaseUrl + '/disable-mis/wqrz/rybt-evt/view',
  rybtIssueList: WcBaseUrl + '/disable-mis/wqrz/rybt-rcd/list-rcd',
  rybtTaskList: WcBaseUrl + '/disable-mis/wqrz/rybt-evt/his',
  fybtObjList: WcBaseUrl + '/disable-mis/kfxt/fybt-obj/list',
  fybtTaskList: WcBaseUrl + '/disable-mis/kfxt/fybt-evt/his',
  fybtIssueList: WcBaseUrl + '/disable-mis/kfxt/fybt-rcd/list-rcd',
  fybtView: WcBaseUrl + '/disable-mis/kfxt/fybt-evt/view',
  zybtObjList: WcBaseUrl + '/disable-mis/kfxt/zybz-obj/list',
  zybtTaskList: WcBaseUrl + '/disable-mis/kfxt/zybz-evt/his',
  zybtIssueList: WcBaseUrl + '/disable-mis/kfxt/zybz-rcd/list-rcd',
  zybtView: WcBaseUrl + '/disable-mis/kfxt/zybz-evt/view',
  cyfcObjList: WcBaseUrl + '/disable-mis/fwzx/cyfc-obj/list',
  cyfcTaskList: WcBaseUrl + '/disable-mis/fwzx/cyfc-evt/his',
  cyfcIssueList: WcBaseUrl + '/disable-mis/fwzx/cyfc-rcd/list-rcd',
  cyfcView: WcBaseUrl + '/disable-mis/fwzx/cyfc-evt/view',
  sbbtObjList: WcBaseUrl + '/disable-mis/fwzx/jysbbt-obj/list',
  sbbtTaskList: WcBaseUrl + '/disable-mis/fwzx/jysbbt-evt/his',
  sbbtView: WcBaseUrl + '/disable-mis/fwzx/jysbbt-evt/view',
  sbbtIssueList: WcBaseUrl + '/disable-mis/fwzx/jysbbt-rcd/list-rcd',
  fileUpload: WcBaseUrl + '/disable-mis/card/card-evt-apply-pre-files/upload',
  userCountUrl: WcBaseUrl + '/athena-admin/ids/user-detail/count-user ',
  baseCountUrl: WcBaseUrl + '/disable-data/dad/dad-card/count',
  statLevel: WcBaseUrl + '/disable-mis/dad/total/stat-type-level',
  statCultre: WcBaseUrl + '/disable-mis/dad/total/stat-cultre',
}

// 登陆接口
export const login = params => {
  var newurl = Url.login + '?specter_security_params_loginid=' + params.specter_security_params_loginid+'&specter_security_params_password=' + params.specter_security_params_password;
  return axios.request({
    url: newurl,
    method: 'post',
    withCredentials: true
  }).then(res => res.data)
}
// 用户信息
export const user = params => {
  return axios.request({
    url: Url.user,
    method: 'get',
    withCredentials: true
  }).then(res => res.data)
}
// 保存用户详情信息修改
export const storeUserInfo = params => {
  return axios.request({
    url: Url.userChangeInfo,
    method: 'post',
    data: params,
    withCredentials: true
  }).then(res => res.data)
}
// 退出系统
export const output = params => {
  return axios.get(Url.output).then(res => res.data)
}
// 残疾人列表
export const dadList = params => {
  return axios.request({
    url: Url.dadList,
    method: 'get',
    params: params,
  }).then(res => res.data)
}
// 政策法规列表
export const lawList = params => {
  return axios.request({
    url: Url.lawList,
    method: 'get',
    params: params,
    withCredentials: true
  }).then(res => res.data)
}
// 版本号(暂时是Tomcat上)
export const Version = params => {
  return axios.request({
    url: 'http://p.zokun.cn/Download/version.json',
    method: 'get',
    withCredentials: true
  }).then(res => res.data)
}
// 待办事项列表
export const todoList = params => {
  return axios.request({
    url: Url.todoList,
    method: 'get',
    params: params,
    withCredentials: true
  }).then(res => res.data)
}
// 通知公告列表
export const noticeList = params => {
  return axios.request({
    url: Url.noticeList,
    method: 'get',
    params: params,
    withCredentials: true
  }).then(res => res.data)
}
// 待办事项详情
export const todoView = params => {
  return axios.request({
    url: Url.todoView,
    method: 'get',
    params: params,
    withCredentials: true
  }).then(res => res.data)
}
// 获取政策匹配
export const lawMatch = params => {
  return axios.request({
    // url: 'http://115.233.209.169:8088/disable-law/query/match!list_json',
    url: Url.lawMatch,
    method: 'get',
    params: params,
  }).then(res => res.data)
}
// 修改密码
export const setPwd = params => {
  return axios.request({
    url: Url.setPwd,
    method: 'get',
    params: params,
  }).then(res => res.data)
}
// 验证旧密码
export const oldPwd = params => {
  return axios.request({
    url: Url.oldPwd,
    method: 'get',
    params: params,
  }).then(res => res.data)
}

// 重度护理补贴保存申请信息
export const hlbtSave = params => {
  return axios.request({
    url: Url.hlbtSave,
    method: 'post',
    data: params,
    withCredentials: true
  }).then(res => res.data)
}
// 残疾类别性别人数
export const genderEcharts = params => {
  return axios.request({
    url: Url.genderChartUrl,
    method: 'get',
    withCredentials: true
  }).then(res => res.data)
}

// 重度护理补贴办理进度
export const getCard = params => {
  return axios.request({
    url: Url.getCard,
    method: 'get',
    params: params
  }).then(res => res.data)
}
// 重度护理补贴办理进度
export const hlbtTaskList = params => {
  return axios.request({
    url: Url.hlbtTaskList,
    method: 'get',
    params: params
  }).then(res => res.data)
}
// 重度护理补贴办理对象
export const hlbtObjList = params => {
  return axios.request({
    url: Url.hlbtObjList,
    method: 'get',
    params: params
  }).then(res => res.data)
}
// 重度护理补贴办理对象发放记录
export const hlbtIssueList = params => {
  return axios.request({
    url: Url.hlbtIssueList,
    method: 'get',
    params: params
  }).then(res => res.data)
}
// 重度护理补贴 详情
export const hlbtView = params => {
  return axios.request({
    url: Url.hlbtView,
    method: 'get',
    params: params
  }).then(res => res.data)
}
// 困难生活补贴列表
export const knbtObjList = params => {
  return axios.request({
    url: Url.knbtObjList,
    method: 'get',
    params: params
  }).then(res => res.data)
}
// 困难生活补贴详情
export const knbtObjView = params => {
  return axios.request({
    url: Url.knbtObjView,
    method: 'get',
    params: params
  }).then(res => res.data)
}
// 困难生活补贴办理对象发放记录
export const KnbtObjIssueList = params => {
  return axios.request({
    url: Url.KnbtObjIssueList,
    method: 'get',
    params: params
  }).then(res => res.data)
}

// 困难补贴保存申请信息 
export const knbtSave = params => {
  return axios.request({
    url: Url.knbtSave,
    method: 'post',
    data: params,
    withCredentials: true
  }).then(res => res.data)
}

// 困难生活补贴办理进度列表
export const knbtTaskList = params => {
  return axios.request({
    url: Url.knbtTaskList,
    method: 'get',
    params: params
  }).then(res => res.data)
}

// 手机补贴保存申请信息 
export const sjbtSave = params => {
  return axios.request({
    url: Url.sjbtSave,
    method: 'post',
    data: params,
    withCredentials: true
  }).then(res => res.data)
}

// 燃油补贴保存申请信息 
export const rybtSave = params => {
  return axios.request({
    url: Url.rybtSave,
    method: 'post',
    data: params,
    withCredentials: true
  }).then(res => res.data)
}

// 精神服药补贴保存申请信息 
export const fybtSave = params => {
  return axios.request({
    url: Url.fybtSave,
    method: 'post',
    data: params,
    withCredentials: true
  }).then(res => res.data)
}
// 精神住院补贴保存申请信息 
export const zybtSave = params => {
  return axios.request({
    url: Url.zybtSave,
    method: 'post',
    data: params,
    withCredentials: true
  }).then(res => res.data)
}
// 创业扶持保存申请信息 
export const cyfcSave = params => {
  return axios.request({
    url: Url.cyfcSave,
    method: 'post',
    data: params,
    withCredentials: true
  }).then(res => res.data)
}
// 社会保障保存申请信息 
export const sbbtSave = params => {
  return axios.request({
    url: Url.sbbtSave,
    method: 'post',
    data: params,
    withCredentials: true
  }).then(res => res.data)
}

// 手机信息补贴列表
export const sjbtObjList = params => {
  return axios.request({
    url: Url.sjbtObjList,
    method: 'get',
    params: params,
  }).then(res => res.data)
}
// 手机信息补贴详情
export const sjbtView = params => {
  return axios.request({
    url: Url.sjbtView,
    method: 'get',
    params: params,
  }).then(res => res.data)
}
// 手机信息补贴记录
export const sjbtIssueList = params => {
  return axios.request({
    url: Url.sjbtIssueList,
    method: 'get',
    params: params,
  }).then(res => res.data)
}
// 手机信息补贴进度
export const sjbtTaskList = params => {
  return axios.request({
    url: Url.sjbtTaskList,
    method: 'get',
    params: params,
  }).then(res => res.data)
}
// 燃油补贴补贴办理对象
export const rybtObjList = params => {
  return axios.request({
    url: Url.rybtObjList,
    method: 'get',
    params: params,
  }).then(res => res.data)
}
// 燃油补贴补贴办理进度
export const rybtTaskList = params => {
  return axios.request({
    url: Url.rybtTaskList,
    method: 'get',
    params: params,
  }).then(res => res.data)
}
// 燃油补贴补贴详情
export const rybtView = params => {
  return axios.request({
    url: Url.rybtView,
    method: 'get',
    params: params,
  }).then(res => res.data)
}
// 燃油补贴补贴发放记录
export const rybtIssueList = params => {
  return axios.request({
    url: Url.rybtIssueList,
    method: 'get',
    params: params,
  }).then(res => res.data)
}
// 精神残疾 服药补贴 办理对象列表
export const fybtObjList = params => {
  return axios.request({
    url: Url.fybtObjList,
    method: 'get',
    params: params,
  }).then(res => res.data)
}
// 精神残疾 服药补贴 办理进度列表
export const fybtTaskList = params => {
  return axios.request({
    url: Url.fybtTaskList,
    method: 'get',
    params: params,
  }).then(res => res.data)
}
// 精神残疾 服药补贴 办理记录列表
export const fybtIssueList = params => {
  return axios.request({
    url: Url.fybtIssueList,
    method: 'get',
    params: params,
  }).then(res => res.data)
}
// 精神残疾 服药补贴 详情
export const fybtView = params => {
  return axios.request({
    url: Url.fybtView,
    method: 'get',
    params: params,
  }).then(res => res.data)
}
// 精神残疾 住院补贴 办理对象列表
export const zybtObjList = params => {
  return axios.request({
    url: Url.zybtObjList,
    method: 'get',
    params: params,
  }).then(res => res.data)
}
// 精神残疾 住院补贴 发放记录列表
export const zybtIssueList = params => {
  return axios.request({
    url: Url.zybtIssueList,
    method: 'get',
    params: params,
  }).then(res => res.data)
}
// 精神残疾 住院补贴 办理进度列表
export const zybtTaskList = params => {
  return axios.request({
    url: Url.zybtTaskList,
    method: 'get',
    params: params,
  }).then(res => res.data)
}
// 精神残疾 住院补贴 详情
export const zybtView = params => {
  return axios.request({
    url: Url.zybtView,
    method: 'get',
    params: params,
  }).then(res => res.data)
}
// 阳光助残 创业扶持 办理对象列表
export const cyfcObjList = params => {
  return axios.request({
    url: Url.cyfcObjList,
    method: 'get',
    params: params,
  }).then(res => res.data)
}
// 阳光助残 创业扶持 办理进度列表
export const cyfcTaskList = params => {
  return axios.request({
    url: Url.cyfcTaskList,
    method: 'get',
    params: params,
  }).then(res => res.data)
}
// 阳光助残 创业扶持 发放记录列表
export const cyfcIssueList = params => {
  return axios.request({
    url: Url.cyfcIssueList,
    method: 'get',
    params: params,
  }).then(res => res.data)
}
// 阳光助残 创业扶持 详情
export const cyfcView = params => {
  return axios.request({
    url: Url.cyfcView,
    method: 'get',
    params: params,
  }).then(res => res.data)
}
// 灵活就业 社保补贴 办理对象列表
export const sbbtObjList = params => {
  return axios.request({
    url: Url.sbbtObjList,
    method: 'get',
    params: params,
  }).then(res => res.data)
}
// 灵活就业 社保补贴 办理进度列表
export const sbbtTaskList = params => {
  return axios.request({
    url: Url.sbbtTaskList,
    method: 'get',
    params: params,
  }).then(res => res.data)
}
// 灵活就业 社保补贴 发放记录列表
export const sbbtIssueList = params => {
  return axios.request({
    url: Url.sbbtIssueList,
    method: 'get',
    params: params,
  }).then(res => res.data)
}
// 灵活就业 社保补贴 详情
export const sbbtView = params => {
  return axios.request({
    url: Url.sbbtView,
    method: 'get',
    params: params,
  }).then(res => res.data)
}

// 附件上传
export const fileUpload = params => {
  return axios.request({
    url: Url.fileUpload,
    method: 'post',
    data: params,
    withCredentials: true
  }).then(res => res.data)
}
// 用户数量
export const userCount = params => {
  return axios.request({
    url: Url.userCountUrl,
    method: 'get',
    withCredentials: true
  }).then(res => res.data)
}
// 基础数量
export const baseCount = params => {
  return axios.request({
    url: Url.baseCountUrl,
    method: 'get',
    withCredentials: true
  }).then(res => res.data)
}

// 统计残疾等级
export const statLevel = params => {
  return axios.request({
    url: Url.statLevel,
    method: 'get',
    params: params,
  }).then(res => res.data)
}
// 统计文化程度
export const statCultre = params => {
  return axios.request({
    url: Url.statCultre,
    method: 'get',
    params: params,
  }).then(res => res.data)
}

