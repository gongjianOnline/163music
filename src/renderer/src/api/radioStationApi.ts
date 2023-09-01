/* 播客 */
import {post,get,FormDataPost} from "../utils/http"

/* 电台个性推荐 */
const RSRecommend = ()=>{
  return get("/dj/personalize/recommend",{});
}
/* 热门电台 */
const djHost = ()=>{
  return get("/dj/hot",{})
}

export default{
  RSRecommend,
  djHost
}

