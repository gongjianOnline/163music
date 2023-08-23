<template>
  <div class="commitComponent"> 
    <textarea class="textareaContainer"  rows="3" maxlength="114" v-model="textareaValue"></textarea>
    <div class="commitNum">{{ textareaValue.length }} / 114</div>
    <div class="sendBtn" @click="handelSend">发布</div>
  </div>



</template>

<script lang="ts" setup>
import {ref} from "vue";
const textareaValue = ref("");
const handelSend = ()=>{
  console.log(textareaValue.value)
}

</script>

<style lang="less" scoped> 
.commitComponent{
  position: relative;
  margin-top: 10px;
}
.textareaContainer{
  width: 100%;
  background: #f4f4f4;
  outline:none;
  resize:none;
  border:1px solid #e4e4e1;
  border-radius: 10px;
  padding: 10px 10px 20px 10px;
  color: #3b4458;
}
.commitNum{
  position: absolute;
  right: 60px;
  bottom: 14px;
  font-size: 14px;
  color:#787e89 ;
}
.sendBtn{
  position: absolute;
  right: 20px;
  bottom: 14px;
  cursor: pointer;
  color: #787e89;
  font-size: 14px;
}
.sendBtn:hover{
  color: #3b4458;
}

</style>

