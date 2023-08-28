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
          <input type="text" placeholder="请输入手机号">
        </div>
        <div class="passContainer" >
          <input type="password" placeholder="请输入密码">
        </div>
        <!-- 自动登录 -->
        <div class="">
          <el-checkbox 
            v-model="autoLoginStatus" 
            label="自动登录" 
            size="large" />
        </div>
        <!-- 登录 -->
        <div class="submitContainer">登录</div>
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
  width: 100%;
  height: 40px;
  margin-top: 16px;
}
.passContainer input{
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: #f8f9f9;
  border: 1px solid #ebedee;
  padding-left: 20px;
  outline: none;
}
.submitContainer{
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