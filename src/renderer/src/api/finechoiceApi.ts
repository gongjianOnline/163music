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
/* 歌单标签列表 */
const songSheetTags = ()=>{
  return get("/playlist/highquality/tags",{});
}
/* 歌单列表 */
const songSheetList = (cat,limit)=>{
  return get("/top/playlist/highquality",{cat:cat,limit:limit})
}
/* 所有榜单 */
const toplist = ()=>{
  return get("/toplist",{});
}

export default {
  playlist,
  exclusive,
  newAlbum,
  songSheetTags,
  songSheetList,
  toplist
}