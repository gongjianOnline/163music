<template>
  <div class="podcastContainer">
    <HeaderComponents></HeaderComponents>
    <div class="viewContainer">
      <!-- 标签 -->
      <div class="podcastTagsContainer">
        <div
          class="podcastTagsContent"
          @click="handelTags(index)"
          v-for="(item,index) in tagsData" 
          :key="index">{{item.name}}</div>
      </div>

      <!-- 推荐 -->
      <SingleRowComponent class="marginTop10">
        <template #titleName>
          <div class="singleTitleContent">猜你喜欢</div>
        </template>
        <template #slideComponent>
          <Slide class="slideContent" v-for="index in 10" :key="index">
            <div class="carousel__item" @click="handelToSS">
              <Album urlImg="/img/home5.jpg" 
                playNum="123.4" 
                playTitle="2023那些超级好听流行音乐推荐(更新快)"></Album>
            </div>
          </Slide>
        </template>
      </SingleRowComponent>

      <!-- 新闻资讯 -->
      <NewsComponent
        titleName="新闻推荐">

      </NewsComponent>


    </div>
  </div>
</template>

<script lang="ts" setup>
import HeaderComponents from "../components/mainView/headerComponents.vue";
import SingleRowComponent from "../components/homeComponent/singleRowComponent.vue";
import Album from "../components/globalComponent/album.vue";
import NewsComponent from "../components/podcastComponent/newsComponent.vue";
import { Slide } from 'vue3-carousel';
import {ref,reactive} from  "vue";

/* 标签页 */
const tagsIndex = ref(0);
const tagsData = reactive([
  {name:'排行榜'},
  {name:'新闻资讯'},
  {name:'情感'},
  {name:'亲子'},
  {name:'创作翻唱'},
  {name:'人文历史'},
])
const handelTags = (index)=>{
  tagsIndex.value = index;
  
}

/* 推荐内容事件 */
const handelToSS = ()=>{
  console.log("推荐内容")
}


</script>

<style lang="less" scoped>
.podcastContainer{
  -webkit-app-region:drag;
}
.viewContainer{
  -webkit-app-region:no-drag;
  margin-top: 10px;
  padding: 10px 20px;
}

/* 标签 */
.podcastTagsContainer{
  display: flex;
}
.podcastTagsContainer div{
  padding: 10px 20px;
  background: #fff;
  border-radius: 20px;
  margin-right: 10px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.25s;
}
.podcastTagsContent:hover{
  background: #e2e5e9;
}
/* 推荐 */
.marginTop10{
  margin-top: 10px;
}
.singleTitleContent{
  font-size: 20px;
  color: #283248;
  font-weight: bold;
}
.carousel__item{
  height: 100%;
  width: 155px;
  margin-left: 5px;
  margin-right: 5px;
}
.carousel__item>img{
  width: 100%;
  height: 100%;
}


</style>