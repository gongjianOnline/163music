<template>
  <!-- 标题模块 -->
  <div class="headerContainer">
    <!-- 路由&搜索框 -->
    <div class="leftComponent">
      <!-- 后退按钮 -->
      <div class="backContainer" @click="handelBack">
        <svg class="icon backIcon" aria-hidden="true">
          <use xlink:href="#icon-fanhui"></use>
        </svg>
      </div>
      <!-- 搜索框 -->
      <div class="searchContainer">
        <div class="searchIconContainer"> 
          <svg class="icon backIcon" aria-hidden="true">
            <use xlink:href="#icon-sousuo"></use>
          </svg>
        </div>
        <input type="text" >
      </div>
    </div>

    <!-- 用户名操作 -->
    <div class="operateContainer">
      <!-- 用户模块 -->
      <div class="userContainer" v-if="loginStore.loginStatus">
        <div class="userImgContainer"></div>
        <div class="userNameContent" @click="handleLogin">未登录 </div>
      </div>
      <div class="userContainer" v-else>
        <div class="userImgContainer">
          <img :src=" loginStore?.userInfo?.profile?.avatarUrl" alt="">
        </div>
        <div class="userNameContent">{{ loginStore?.userInfo?.profile?.nickname }}</div>
      </div>
      <!-- 用户相关操作 -->
      <div class="userIconContainer">
        <div>
          <svg class="icon backIcon userIconItem" aria-hidden="true">
            <use xlink:href="#icon-youxiang"></use>
          </svg>
        </div>
        <div>
          <svg class="icon backIcon userIconItem" aria-hidden="true">
            <use xlink:href="#icon-shezhi"></use>
          </svg>
        </div>
      </div>
      <!-- 分割 -->
      <div class="partitionContainer">
        <div class="partitionContent"></div>
      </div>

      <!-- 窗口操作 -->
      <div class="windowOperateContainer"> 
        <div class="" @click="handelMainWindow('mini')">
          <svg class="icon backIcon userIconItem" aria-hidden="true">
            <use xlink:href="#icon-zuixiaohua"></use>
          </svg>
        </div>
        <div class="" @click="handelMainWindow('max')">
          <svg v-show="!isMaximized" class="icon backIcon userIconItem" aria-hidden="true">
            <use xlink:href="#icon-zuidahua1"></use>
          </svg>
          <svg v-show="isMaximized" class="icon backIcon userIconItem" aria-hidden="true">
            <use xlink:href="#icon-zuidahua"></use>
          </svg>
        </div>
        <div class="" @click="handelMainWindow('close')">
          <svg class="icon backIcon userIconItem" aria-hidden="true">
            <use xlink:href="#icon-guanbi"></use>
          </svg>
        </div>
        
      </div>
      

    </div>

  </div>

  <LoginComponent 
    :dialogVisible.sync="dialogVisible"
    @handle-close="handleClose"></LoginComponent>

</template>

<script lang="ts" setup>
import {ref} from "vue"
import {useRouter} from 'vue-router';
import LoginComponent from "../loginComponent/index.vue";
import {useLoginStore} from "../../store/index"

const router = useRouter();
const loginStore = useLoginStore();
/* 判断是否是最大化 */
const isMaximized = ref(false);
/* 缩小&放大&关闭,主进程通信 */
const handelMainWindow =async (btnType)=>{
  switch (btnType) {
    case "mini":
      window.mainWindow.onMinimize()
      break;
    case "max":
      window.mainWindow.onMaxWindow();
      isMaximized.value = await window.mainWindow.getWindowStatus();
      break;
    default:
      window.mainWindow.onClose()
      break;
  }
}

/* 后退路由 */
const handelBack = ()=>{
  router.back();
}

/* 登录 */
const dialogVisible = ref(false);
const handleLogin = ()=>{
  dialogVisible.value = true;
}
const handleClose = (status)=>{
  dialogVisible.value = status
}

</script>

<style lang="less" scoped>
.headerContainer{
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0px;
  left: 0px;
  z-index: 2;
  padding: 30px 20px 10px 20px;
  background: RGB(247,249,252);
}
/* 左侧 */
.leftComponent{
  display: flex;
}
/* 返回按钮 */
.backContainer{
  padding: 8px 4px;
  border: 1px solid #e2e5e9;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.25s;
  -webkit-app-region: no-drag;
}
.backContainer:hover{
  background: var(--colorHover);
}
.backIcon{
  fill: #7b8290;
}
/* 搜索 */
.searchContainer{
  -webkit-app-region: no-drag;
  margin-left: 10px;
  border: 1px solid transparent;
  border-left: 1px solid rgba(217,230,249,1);
  border-right: 1px solid rgba(247,228,242,1);
  border-radius: 10px;
  overflow: hidden;
  min-width: 250px;
  position: relative;
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  background: linear-gradient(90deg, rgba(217,230,249,1) 0%, rgba(247,228,242,1) 100%);
}
.searchContainer>input{
  -webkit-app-region: no-drag;
  width: 100%;
  height: 100%;
  outline:none;
  border: none;
  padding-left: 35px;
  background: linear-gradient(90deg, rgba(235,241,251,1) 0%, rgba(247,238,246,1) 100%);
  font-size: 14px;
  color: #9fa5b3;
}
.searchIconContainer{
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
}

/* 操作模块 */
.operateContainer{
  display: flex;
}
/* 用户模块 */
.userContainer{
  -webkit-app-region: no-drag;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 10px;
}
.userImgContainer{
  background: #e3e5eb;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
}
.userImgContainer img{
  width: 100%;
  height: 100%;
}
.userNameContent{
  font-size: 14px;
  margin-left: 4px;
  color: #515a6c;
}
/* 用户相关操作 */
.userIconContainer{
  display: flex;
  align-items: center;
}
.userIconContainer>div{
  margin-left: 10px;
  -webkit-app-region: no-drag;
}
.userIconContainer .icon{
  fill: #7b8290;
  cursor: pointer;
}
.userIconContainer .icon:hover{
  fill: #333333;
}
.userIconItem{
  font-size: 20px;
}
/* 分割 */
.partitionContainer{
  height: 100%;
  width: 10px;
  display: flex;
  align-items: center;
  margin-left: 10px;
  // margin-right: 10px;
}
.partitionContent{
  width: 1px;
  height: 20px;
  background: #e2e5e9;
}

/* 窗口操作 */
.windowOperateContainer{
  display: flex;
  align-items: center;
}
.windowOperateContainer>div{
  margin-left: 10px;
  -webkit-app-region: no-drag;
}
.windowOperateContainer .icon{
  cursor: pointer;
  font-size: 16px;
  fill: #7b8290;
}
.windowOperateContainer .icon:hover{
  fill: #333333
}



</style>