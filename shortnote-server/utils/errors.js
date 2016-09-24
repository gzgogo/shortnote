
var ERRORS = {
  SUCCESS: {errCode: 0, errMsg: ""},
  EMAIL_USED: {errCode: 1, errMsg: '该邮箱已注册，请更换邮箱'},
  EMAIL_UNREGISTERED: {errCode: 2, errMsg: '邮箱未注册'},
  PASSWORD_WRONG: {errCode: 3, errMsg: '密码错误'},
  NOTES_DELETE_FAILED: {errCode: 4, errMsg: "删除笔记失败"},
  NOTES_UPDATE_FAILED: {errCode: 5, errMsg: "更新笔记失败"},
  NOTES_FETCH_FAILED: {errCode: 6, errMsg: "获取笔记失败"}
};

module.exports = ERRORS;