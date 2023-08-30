/* 音乐精选 */
import {post,get,FormDataPost} from "../utils/http"

/* 精选歌单 */
const playlist = ()=>{
  return get("/top/playlist/highquality",{limit:12})
}

export default {
  playlist
}