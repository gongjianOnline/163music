/* 音乐精选 */
import {post,get,FormDataPost} from "../utils/http"

/* 精选歌单 */
const playlist = ()=>{
  return get("/top/playlist/highquality",{limit:12})
}
/* 网易出品MV */
const exclusive = ()=>{
  return get("/mv/exclusive/rcmd",{limit:12})
}
/* 最新专辑 */
const newAlbum = ()=>{
  return get("/album/newest",{});
}

export default {
  playlist,
  exclusive,
  newAlbum
}