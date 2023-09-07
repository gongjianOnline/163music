<template>
  <div class="biserialContainer">
    <div class="titleName">{{titleName}}</div>
    <div class="swiperContainer">
      <Carousel>
        <Slide key="1">
          <div class="pageContainer" >
            <div class="pageContainerItem" 
              v-for="(item) in pageA" 
              :key="item.id"
              @click="handleClick(item)">
              <!-- 图片 -->
              <div class="pageContainerItemContainer"> 
                <div class="pageContainerItemMake">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-bofang"></use>
                  </svg>
                </div> 
                <img :src="item.picUrl" alt="">
              </div>
              <div class="PCIInfoContainer">
                <div class="PCITitle">{{item.name}}</div>
                <div>
                  <span class="PCITag">{{item.song.album.subType}}</span>
                  <span class="PCIAuthor">{{ item.song.artists[0].name}}</span>
                </div>
              </div>
            </div>
          </div>
        </Slide>
        <Slide key="2">
          <div class="pageContainer" >
            <div class="pageContainerItem" 
              v-for="(item) in pageB" 
              :key="item.id"
              @click="handleClick(item)">
              <!-- 图片 -->
              <div class="pageContainerItemContainer">
                <div class="pageContainerItemMake">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-bofang"></use>
                  </svg>
                </div> 
                <img :src="item.picUrl" alt="">
              </div>
              <div class="PCIInfoContainer">
                <div class="PCITitle">{{item.name}}</div>
                <div>
                  <span class="PCITag">{{item.song.album.subType}}</span>
                  <span class="PCIAuthor">{{item.song.artists[0].name}}</span>
                </div>
              </div>
            </div>
          </div>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import {useRouter} from "vue-router"

const router = useRouter();

withDefaults(defineProps<{
  titleName:string,
  pageA:any[],
  pageB:any[]
}>(),{
  titleName:"",
  pageA:()=>new Array(),
  pageB:()=>new Array()
})

/* 路由跳转 */
const handleClick = (item)=>{
  router.push({
    path:"/songSheet",
    query:{
      id:item.id
    }
  });
}
</script>

<style lang="less" scoped> 
.biserialContainer{
  margin-top: 20px;
}
.titleName{
  font-size: 20px;
  font-weight: bold;
  color: #283248;
}
.swiperContainer{
  margin-top: 10px;
  width: 100%;
  height: 300px;
}
.swiperContainer:deep(.carousel),
.swiperContainer:deep(.carousel__viewport),
.swiperContainer:deep(ol){
  width: 100%;
  height: 100%;
  margin: 0 !important;
}
.swiperContainer:deep(.carousel__next){
  right: -37px;
}
.swiperContainer:deep(.carousel__prev){
  left: -37px;
}


/* 首屏布局 */
.pageContainer{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.pageContainerItem{
  width: 50%;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0px 14px;
  border-radius: 10px;
  transition: all 0.25s;
  cursor: pointer;
}
.pageContainerItem:hover{
  background: #fff;
}
.pageContainerItem:hover .pageContainerItemMake,
.pageContainerItem:hover .pageContainerItemMake .icon{
  opacity: 1;
}

.pageContainerItemContainer{
  width: 80px;
  height: 80px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}
.pageContainerItemMake{
  opacity: 0;
  transition: all 0.25s;
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
.pageContainerItemMake .icon{
  opacity: 0;
  fill: #fff;
  font-size: 30px;
  transition: all 0.25s;
}
.pageContainerItemContainer img{
  width: 100%;
  height: 100%;
}
.PCIInfoContainer{
  text-align: left;
  margin-left: 10px;
  flex: 1;
}
.PCITitle{
  color: #283248;
  font-size: 16px;
  margin-bottom: 6px;
}
.PCITag{
  background: #f8e7e9;
  border: 1px solid #f8dcde;
  border-radius: 10px;
  width: 150px;
  font-size: 10px;
  color: #ff3a3a;
  padding: 2px 2px;
  font-weight: bold;
}
.PCIAuthor{
  font-size: 12px;
  margin-left: 6px;
}
</style>