<template>
  <div class="commitComponent"> 
    <textarea class="textareaContainer"  rows="3" maxlength="114" v-model="textareaValue"></textarea>
    <div class="textareaTextNum">{{ textareaValue.length }} / 114</div>
    <div class="sendBtn" @click="handelSend">发布</div>
  </div>

  <div class="commitTitle">
    <div>
      最新评论
      <span class="commitNum">123</span>
    </div>
  </div>

  <div class="commitList">
    <div class="commitItemContainer" v-for="index in 10" :key="index">
      <div class="commitItemInfo">
        <div class="commitImg"></div>
        <div class="commitDoc">
          <div>作者</div>
          <div>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
        </div>
      </div>
      <div class="commitItemDate">
        <div class="commitDate">07-15</div>
        <div class="commitIconContent">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-xihuan"></use>
            </svg>
          </div>
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-pinglun"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>

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
  position: sticky;
  top: 110px;
  margin-top: 10px;
  z-index: 5;
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
.textareaTextNum{
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

/* 标题 */
.commitTitle{
  position: relative;
  color: #283248;
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  margin-left: 2px;
}
.commitNum{
  position: absolute;
  left: 65px;
  top: 0px;
  font-size: 12px;
  color: #283248;
  font-weight: bold;
}

/* 评论列表 */
.commitList{
  margin-top: 10px;
  width: 100%;
  padding: 10px;
}
/* 评论 */
.commitItemContainer{
  border-bottom: 1px solid #eaedf1;
  padding-bottom: 6px;
  margin-top: 10px;
}
.commitItemInfo{
  display: flex;
}
.commitImg{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #787e89;
}
.commitDoc{
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.commitDoc>div:nth-child(1){
  color:#5975b2;
  font-size: 14px;
}
.commitDoc>div:nth-child(2){
  color:#3c455a;
  font-size: 14px;
}

.commitItemDate{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 50px;
  padding: 4px 0px;
}
.commitDate{
  font-size: 14px;
  color: #a4a9b4;
}
.commitIconContent{
  display: flex;
  justify-content: space-between;
  width: 50px;
  font-size: 18px;
}
.commitIconContent .icon{
  cursor: pointer;
  color:#7b8290;
}

</style>

