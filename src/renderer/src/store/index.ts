import {defineStore} from "pinia"
export const useLoginStore = defineStore("LOGOIN",{
  state:()=>{
    return { // 初始化状态值
      userInfo:null
    }
  },
  getters:{ // 在不改变源数据的前提下可对数据进行加工, 等同于计算属性
    
  },
  actions:{ // 修改 state 中的值,同时支持同步和异步
    setUserInfo(data){
      this.userInfo = data;
    },
    
  }

})