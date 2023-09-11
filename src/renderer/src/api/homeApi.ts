import {get} from "../utils/http"

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
  getBanner,
  personalized,
  personalizedNewsong,
}