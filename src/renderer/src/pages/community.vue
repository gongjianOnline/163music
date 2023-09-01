<template>
  <div class="communityContainer">
    <HeaderComponents></HeaderComponents>
    <div class="mainView">
      <div class="titleContainer">
        <div>关注</div>
        <div @click="handleOpenDialog">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-bianjisekuai"></use>
          </svg>
          发布
        </div>
      </div>
      
      <!-- 发布评论 -->
      <div class="commitContainer">
        <CommitComponent></CommitComponent>
      </div>



    </div>
  </div>

<!-- 发布模态框 -->
<CommityRelease 
    :dialogVisible.sync="commitDialogDialog"
    @handel-close="handleDialog"></CommityRelease>

</template>

<script lang="ts" setup>
import {ref} from "vue"
import HeaderComponents from "../components/mainView/headerComponents.vue";
import CommitComponent from "../components/commity/commitComponent.vue";
import CommityRelease from "../components/commity/commityRelease.vue";

/* 模态框 */
const commitDialogDialog = ref(false);
const handleDialog = (status:boolean)=>{
  commitDialogDialog.value = status;
}
const handleOpenDialog = ()=>{
  commitDialogDialog.value = true;
}


</script>

<style lang="less" scoped>
.communityContainer{
  -webkit-app-region:drag
}
.mainView{
  padding: 10px 20px;
  -webkit-app-region:no-drag
}
.titleContainer{
  display: flex;
  justify-content:space-between;
  align-items: center;
}
.titleContainer>div:nth-child(1){
  color:#3c455a;
  font-size: 20px;
  font-weight: bold;
}
.titleContainer .icon{
  fill: #fff;
  display: inline-block;
  margin-right: 10px;
}
.titleContainer>div:nth-child(2){
  padding: 10px 20px;
  display: flex;
  background: linear-gradient(90deg, rgba(255,18,104,1) 0%, rgba(252,61,73,1) 100%) !important;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
}
/* 评论 */
</style>