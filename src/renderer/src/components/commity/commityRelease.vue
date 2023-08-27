<template>
  <el-dialog
    :modelValue="dialogVisible"
    width="50%"
    :modal="false"
    :before-close="handelClose">
    <div class="commitTitle">发动态</div>
    <div class="commitContainer">
      <textarea 
        v-model="textareaValue"
        placeholder="一起聊聊音乐吧~"
        rows="4" 
        maxlength="114"></textarea>
        <div class="textareaNotes">{{ textareaValue.length }} / 114</div>
    </div>

    <div class="sendContainer"> 
      <div class="sendContent">发布</div>
    </div>
    

  </el-dialog>
</template>

<script lang="ts" setup>
import {ref} from "vue";

withDefaults(defineProps<{
  dialogVisible:boolean
}>(),{
  dialogVisible:false
})

// 通知父组件更改模态框状态
const emit = defineEmits<{
  (e:"handel-Close",name:boolean):void
}>();
const handelClose = ()=>{
  emit("handel-Close",false)
}

/* 模态框内容 */
const textareaValue = ref("");

</script>

<style lang="less" scoped>
.commitTitle{
  color: #283248;
  font-size: 18px;
  font-weight: bolder;
  text-align: center;
}
.commitContainer{
  background: #f8f9f9;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.commitContainer textarea{
  border: none;
  background: transparent;
  outline: none;
  resize:none;
  color: #a5a9b2;
  width: 100%;
  height: 100%;
  line-height: 1.5;
}
.textareaNotes{
  color: #a5a9b2;
  font-size: 12px;
  text-align: right;
}
.sendContainer{
  display: flex;
  justify-content: center;
}
.sendContent{
  width: 100px;
  padding: 10px;
  border-radius: 20px;
  color:#fff;
  text-align: center;
  font-weight: bolder;
  cursor: pointer;
  background: linear-gradient(90deg, rgba(255,18,104,1) 0%, rgba(252,61,73,1) 100%);
}

</style>