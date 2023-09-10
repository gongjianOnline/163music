import {post,get} from "../utils/http"

/**登录 */
const login = (phone,captcha)=>{
  return post('/login/cellphone',{phone:phone,captcha:captcha,timestamp:new Date().getTime()})
  // return post('/login/cellphone',{phone:phone,password:captcha,timestamp:new Date().getTime()})
}
/* 获取验证码 */
const getCode = (phone)=>{
  return get("/captcha/sent",{phone:phone})
}
/**验证登录状态 */
const loginStatus = ()=>{
  return get("/login/status",{});
}

/* 获取账户信息 */
const getAccountInfo = ()=>{
  return get("/user/account",{})
}

/* 获取用户信息 */
const getUserInfo = (id)=>{
  return get("/user/detail",{uid:id})
}

/* 退出登录 */
const loginout = ()=>{
  return get("/logout",{})
}

/* 二维码登录 */
// 生成二维码key
const getCodeKey = ()=>{
  return get("/login/qr/key",{})
}
/* 获取二维码 */
const getLoginCode = (key)=>{
  return get("/login/qr/create",{key:key,qrimg:true})
}
/**轮询检测二维码登录状态 */
const checkLoginCode = (key)=>{
  return get("/login/qr/check",{key:key,timestamp:new Date().getTime()})
}


export default {
  login,
  getCode,
  loginStatus,
  loginout,
  getAccountInfo,
  getUserInfo,
  getCodeKey,
  getLoginCode,
  checkLoginCode
}