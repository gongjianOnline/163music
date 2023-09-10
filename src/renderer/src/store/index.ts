import {defineStore} from "pinia"
import {UserInfoData} from "../module/userInfo"
export const useLoginStore = defineStore("LOGOIN",{
  state:()=>{
    return { // 初始化状态值
      loginStatus:null,
      userInfo:{} as UserInfoData,
    }
  },
  getters:{ // 在不改变源数据的前提下可对数据进行加工, 等同于计算属性
    
  },
  actions:{ // 修改 state 中的值,同时支持同步和异步
    /* 用户登录状态 */
    setLoginStatus(data){
      this.loginStatus = data.id ?? null;
    },
    /* 用户信息 */
    setUserInfo(data){
      this.userInfo = data;
    },
    
  }

})