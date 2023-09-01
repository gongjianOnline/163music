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
/* 获取歌单详情 */
const playlistDetail = (id)=>{
  return get("/playlist/track/all",{id:id,limit:3})
}
/*歌手列表 */
const artistList = (type,area,initial)=>{
  return get("/artist/list",{type:type,area:area,initial:initial})
}

export default {
  playlist,
  exclusive,
  newAlbum,
  songSheetTags,
  songSheetList,
  toplist,
  playlistDetail,
  artistList
}