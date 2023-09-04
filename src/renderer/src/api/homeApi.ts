import {post,get,FormDataPost} from "../utils/http"

/**登录 */
const login = (phone,captcha)=>{
  return get('/captcha/verify',{phone:phone,captcha:captcha})
}
/* 获取验证码 */
const getCode = (phone)=>{
  return get("/captcha/sent",{phone:phone})
}
/**验证登录状态 */
const loginStatus = ()=>{
  return get("/login/status",{});
}

/* 获取用户信息 */
const getUserInfo = ()=>{
  return get("/user/detail",{})
}

/* 获取banner */
const getBanner = ()=>{
  return get("/banner",{type:0})
}
/**热门推荐歌单 */
const personalized = ()=>{
  return get("/personalized",{limit:8})
}
/* 热门推荐歌曲 */
const personalizedNewsong = ()=>{
  return get("/personalized/newsong",{limit:12})
}

export default {
  login,
  getCode,
  loginStatus,
  getUserInfo,
  getBanner,
  personalized,
  personalizedNewsong,
}