<template>
  <div class="tableContainer">
    <div class="tableHeader">
      <div class="tableTitle">#</div>
      <div class="tableTitle">标题</div>
      <div class="tableTitle">专辑</div>
      <div class="tableTitle">喜欢</div>
      <div class="tableTitle">时长</div>
    </div>
    <!-- 数据 -->
    <div class="table" v-for="(item,index) in data" :key="item.id">
      <div class="tableIndex">{{ index+1 }}</div>
      <div class="tableTitles">
        <div class="tableImageContainer">
          <div class="maskContainer">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-bofang"></use>
            </svg>
          </div>
          <img :src="item.al.picUrl" alt="">
        </div>
        <div>
          <div>{{item.name}}</div>
          <div>
            <span>超清母带</span>
            <span v-for=" (arItem,arIndex) in item.ar" :key="arIndex">{{arItem.name}}</span>
          </div>
        </div>
      </div>
      <div class="tableAlbum">{{ item.al.name}}</div>
      <div class="tableIcon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xihuan"></use>
        </svg>
      </div>
      <div class="tableDate">
        {{ dayjs(item.dt).format("mm:ss") }}
      </div>
    </div>


  </div>
</template>

<script lang="ts" setup>
import { dayjs } from "element-plus";
import {SSListSong} from "../../module/songSheetList"

withDefaults(defineProps<{
  data:SSListSong[]
}>(),{
  data:()=>{
    return [
      {
        al:{}
      }
    ] as SSListSong[];
  }
})

</script>

<style lang="less" scoped>
.tableContainer{
  width: 100%;
  // padding: 10px;
  // margin-top: 0px;
}
.tableHeader,.table{
  display: grid;
  grid-template-columns: 20px 1fr 1fr 100px 100px;
  grid-gap: 10px;
  padding: 10px 20px;
}
.table{
  cursor: pointer;
  transition: all 0.25s;
}
.table:hover{
  background: #fff;
}
.table:hover .maskContainer,
.table:hover .maskContainer .icon{
  opacity: 1;
}


.tableTitle{
  color: #7b818f;
  font-size: 14px;
}
/* 下标 */
.tableIndex{
  color: #7b818f;
  font-size: 14px;
  display: flex;
  align-items: center;
}
/* 标题 */
.tableTitles{
  display: flex;
}
.tableImageContainer{
  position: relative;
}
.maskContainer{
  transition: all 0.25s;
  opacity: 0;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.maskContainer .icon{
  fill: #fff;
  opacity: 0;
  transition: all 0.25s;
  font-size: 30px;
}
.tableTitles > div:nth-child(1){
  width: 60px;
  height: 60px;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 10px;
}
.tableTitles > div:nth-child(1) img{
  width: 100%;
  height: 100%;
}
.tableTitles > div:nth-child(2){
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.tableTitles > div:nth-child(2)>div:nth-child(1){
  margin-bottom: 10px;
  color: #283248;
  font-size: 18px;
}
.tableTitles > div:nth-child(2)>div:nth-child(2)>span:nth-child(1){
  padding: 1px 4px;
  border: 1px solid #e8d5af;
  color: #d3a03b;
  font-size: 12px;
  border-radius: 10px;
}
.tableTitles > div:nth-child(2)>div:nth-child(2)>span:nth-child(2){
  font-size: 12px;
  color: #7b818f;
  margin-left: 4px;
}

/* 专辑 */
.tableAlbum{
  color: #7b818f;
  font-size: 14px;
  display: flex;
  align-items: center;
}
.tableIcon{
  display: flex;
  align-items: center;
  fill: #7b828f;
  font-size: 20px;
}
.tableDate{
  display: flex;
  align-items: center;
  color: #7b828f;
  font-size: 14px;
}
</style>