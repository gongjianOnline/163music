<template>
  <div class="loginContainer">
    <el-dialog
      :modelValue="dialogVisible"
      width="43%"
      :before-close="handleClose">
      <div class="loginDialog">
        <div class="loginHeader">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-wangyiyunyinle-"></use>
          </svg>
        </div>
        <!-- 表单 -->
        <div class="inputContainer">
          <div class="codeContent">+86</div>
          <input type="text" placeholder="请输入手机号" v-model="phoneValue">
        </div>
        <div class="passContainer" >
          <input type="password" placeholder="请输入密码" v-model="password">
          <button class="passBtnContainer" @click="getCode">{{codeItem?`获取验证码${codeDate}`:"获取验证码"}}</button>
        </div>
        <!-- 自动登录 -->
        <div class="">
          <el-checkbox 
            v-model="autoLoginStatus" 
            label="自动登录" 
            size="large" />
        </div>
        <!-- 登录 -->
        <div class="submitContainer" @click="handleLogin">登录</div>
        <!-- 同意 -->
        <div class="termContainer">
          <span>
            <el-checkbox 
              v-model="termStatus" 
              label="同意" />
          </span>
          <span class="termContent">《服务条款》</span>
          <span class="termContent">《隐私条款》</span>
          <span class="termContent">《儿童隐私条款》</span>
        </div>

      </div>

    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {useLoginStore} from "../../store/index";
import { ElMessage } from 'element-plus'
import api from "../../api/api";
import {LoginStatus,LoginStatusData} from "../../module/loginStatus"
const loginStore = useLoginStore();

withDefaults(defineProps<{
  dialogVisible:boolean
}>(),{
  dialogVisible:false
})

const emit = defineEmits<{
  (e:"handle-close",name:boolean):void
}>();

const handleClose = ()=>{
  emit("handle-close",false)
}

/* 自动登录 */
const autoLoginStatus = ref(false);

/* 同意条款 */
const termStatus = ref(false);

/* 获取验证码 */
let codeItem:any = ref(null);
const codeDate = ref(60);
const getCode = ()=>{
  if(codeItem.value){return}
  console.log("111");
  codeItem.value = setInterval(()=>{
    if(codeDate.value == 0){
      clearInterval(codeItem.value);
      codeItem.value = null;
      return;
    }
    codeDate.value = codeDate.value -1;
  },1000)

  api.login.getCode(phoneValue.value).then((response)=>{
    console.log("发送验证码",response)
  })

}

/* 登录 */
const phoneValue = ref("");
const password = ref("");
const handleLogin = ()=>{
  if(!termStatus.value){
    ElMessage('请勾选服务条款')
    return;
  }
  api.login.login(phoneValue.value,password.value).then((response:any)=>{
    console.log("用户登录",response)
    /* 登录成功后调用获取账户信息接口 */
    if(response.code == 200){
      handleAccountInfo()
    }
  })

}

/**登录状态 */
const loginStatus = ()=>{
  api.login.loginStatus().then((response)=>{
    console.log("登录状态",response)
    let res = response as LoginStatus;
    loginStore.setLoginStatus(res.data.account);
    // handleUserInfo(res.data.account?.id)
  })
}

/* 获取账户信息 */
const handleAccountInfo = ()=>{
  api.login.getAccountInfo().then((response)=>{
    console.log("获取账户信息",response)
    let res = response as LoginStatusData;
    loginStore.setLoginStatus(res.account);
    // handleUserInfo(res.account?.id)
  })
}

/* 获取用户信息 */
// const handleUserInfo = (id)=>{
//   console.log("id",id)
//   api.login.getUserInfo("8023474819").then((response)=>{
//     console.log("获取用户信息",response)
//   })
// }

/* 注销登录 */
// const handleLogout = ()=>{
//   api.login.loginout().then((response)=>{
//     console.log("注销登录",response)
//     /* 调用登录状态 */
//     loginStatus();
//   })
// }

loginStatus();
</script>

<style lang="less" scoped>
.loginContainer:deep(.el-overlay){
  background-color: transparent !important;
}
.loginHeader{
  width: 100%;
  height: 40px;
  text-align: center;
}
.loginHeader .icon{
  transform: scale(10);
}
.loginDialog{
  margin: 0px 20px;
}

.inputContainer{
  width: 100%;
  height: 40px;
  position: relative;
}
.codeContent{
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
}
.inputContainer input{
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: #f8f9f9;
  border: 1px solid #ebedee;
  padding-left: 60px;
  outline: none;
}
.passContainer{
  display: flex;
  width: 100%;
  height: 40px;
  margin-top: 16px;
}
.passContainer .passBtnContainer{
  border: none;
  background: linear-gradient(90deg, rgba(255,18,104,1) 0%, rgba(252,61,73,1) 100%);
  width: 150px;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
}
.passContainer input{
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: #f8f9f9;
  border: 1px solid #ebedee;
  padding-left: 20px;
  outline: none;
  margin-right: 10px;
}
.submitContainer{
  -webkit-app-region:no-drag;
  cursor: pointer;
  width: 100%;
  height: 40px;
  margin-top: 10px;
  border-radius: 20px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  background:linear-gradient(90deg, rgba(255,18,104,1) 0%, rgba(252,61,73,1) 100%);
}
.termContainer{
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 20px;
}
.termContainer:deep(.el-checkbox__inner){
  border-radius: 50% !important;
}
.termContainer span:nth-child(1){
  margin-right: 10px;
}
.termContainer span{
  font-size: 12px;
}
.termContent{
  margin-left: -6px;
}


</style>