import {defineStore} from "pinia"
import {SSListSong} from "../module/songSheetList";

export const usePlayStore = defineStore("PlayStore",{
  state:()=>{
    return { // 初始化状态值
      musicInfo:{} as SSListSong,
    }
  },
  getters:{ // 在不改变源数据的前提下可对数据进行加工, 等同于计算属性
    
  },
  actions:{ // 修改 state 中的值,同时支持同步和异步
    /* 用户登录状态 */
    setMusicInfo(data){
      this.musicInfo = data as SSListSong;
    },
    
  }

})