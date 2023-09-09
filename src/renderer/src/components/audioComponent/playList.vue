<template>
  <div class="playListContainer">
    <el-drawer :modelValue="drawer"
      :with-header="false" 
      size="40%"
      modal-class="modalClass"
      :before-close="handleClose">
      <div class="playContent"> 
        <div class="playHeader">
          <div class="playTitle">
            播放全部
            <span>{{platStore.playList.length}}</span>
          </div>
          <div class="playClearContainer">
            <span>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shanchu"></use>
              </svg>
            </span>
            清空
          </div>
        </div>
        <!-- 歌单列表 -->
        <div class="playListWrapper">
          <div class="playItem" 
            v-for="(item) in platStore.playList" 
            :key="item.id"
            @dblclick="handelClick(item)">
            <div>
              <div class="playHover">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-yunhang"></use>
                </svg>
              </div>
              <img :src="item.al.picUrl" alt="">
            </div>
            <div class="playInfo">
              <div class="PITitle">{{item.name}}</div>
              <div class="PITag">
                <span>超清母带</span>
                <span v-for="(arItem) in item.ar" :key="arItem.id">{{ arItem.name }}</span>
              </div>
            </div>  
            <div class="PlayDate">{{ dayjs(item.dt).format("mm:ss") }}</div>
          </div>


        </div>
      </div>

    </el-drawer>
  </div>
  
</template>

<script lang="ts" setup>
import {usePlayStore} from "../../store/auto";
import dayjs from "dayjs";

const platStore = usePlayStore();
const emit = defineEmits<{
  (e:"handel-Close",name:boolean):void
}>();
/* 传参 */
withDefaults(defineProps<{
  drawer:boolean
}>(),{
  drawer:false
})
/* 关闭模态框 */
const handleClose = ()=>{
  emit("handel-Close",false)
}
/* 双击播放 */
const handelClick = (item)=>{
  platStore.setMusicInfo(item)
}

</script>

<style lang="less" scoped>
.playListContainer:deep(.el-drawer.rtl){
  height: 65%;
  top: 20% !important;
  bottom: 40px !important;
}
.playListContainer:deep(.el-drawer__body){
  padding: 0px;
}
.playListContainer:deep(.el-overlay){
  background-color: transparent;
}
.playContent{
  display: flex;
  flex-direction: column;
  height: 100%;
}
.playHeader{
  display: flex;
  justify-content: space-between;
  margin: 20px 20px 10px 20px;
}
.playClearContainer{
  color: #7c8290;
  font-size: 14px;
  display: flex;
  cursor: pointer;
}
.playClearContainer>span{
  display: inline-block;
  margin-right: 2px;
}
.playClearContainer span .icon{
  fill: #7c8290;
}
.playTitle{
  font-size: 18px;
  font-weight: bolder;
  color: #283248;
  position: relative;
}
.playTitle span{
  color: #7b818e;
  font-weight: 100;
  font-size: 14px;
  position: absolute;
  left: 75px;
  top: 0px;
}
.playListWrapper{
  flex: 1;
  overflow-y: auto;
}
/* 播放列表 */
.playItem{
  display: flex;
  padding: 14px;
  cursor: pointer;
  transition: all 0.25s;
  
}
.playItem:hover{
  background: #e8eaec;
}
.playItem>div:nth-child(1){
  width: 50px;
  height: 50px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}
.playItem>div:nth-child(1)>img{
  width: 100%;
  height: 100%;
}
.playHover{
  display: none;

}
.playItem:hover .playHover{
  position: absolute;
  left: 0px;
  bottom: 0px;
  top: 0px;
  right: 0px;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.playHover .icon{
  fill:#fff;
  font-size: 30px;
}
.playInfo{
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  width: 200px;
}
.PITitle{
  font-size: 16px;
  color: #283248;
  margin-bottom: 6px;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
  white-space: nowrap;
}
.PITag span:nth-child(1){
  display: inline-block;
  padding: 4px 4px;
  border: 1px solid #dfcca4;
  color: #d3a03b;
  font-weight: bolder;
  font-size: 10px;
  border-radius: 20px;
}
.PITag{
  font-size: 13px;
  color: #757b89;
}
.PlayDate{
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  font-size: 13px;
  color: #8e949f;
}

</style>