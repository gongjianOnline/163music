import {defineStore} from "pinia"
import {SSListSong} from "../module/songSheetList";

export const usePlayStore = defineStore("PlayStore",{
  state:()=>{
    return { // 初始化状态值
      musicInfo:{} as SSListSong, /* 当前播放音乐信息 */
      playList:[] as SSListSong[], /**播放列表 */
      qualityValue:"standard" /**播放质量 */
    }
  },
  getters:{ // 在不改变源数据的前提下可对数据进行加工, 等同于计算属性
    
  },
  actions:{ // 修改 state 中的值,同时支持同步和异步
    /* 当前播放音乐信息 */
    setMusicInfo(data){
      this.musicInfo = data as SSListSong;
    },
    /* 播放列表 */
    setPlayList(data){
      this.playList = data as SSListSong[];
    },
    /**单曲添加到播放列表 */
    setAddPlay(data){
      const foundItem = this.playList.findIndex(item => item.id === data.id);
      if(!(foundItem != -1)){
        this.playList.unshift(data)
      }
    },
    /* 设置播放质量 */
    setQuality(value){
      this.qualityValue = value;
    }
  }

})