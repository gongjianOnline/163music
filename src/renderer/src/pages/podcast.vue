<template>
  <div class="podcastContainer">
    <HeaderComponents></HeaderComponents>
    <div class="viewContainer">
      <!-- 标签 -->
      <div class="podcastTagsContainer" v-show="false">
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
          <Slide class="slideContent" v-for="(item) in RSRecommend.data" :key="item.id">
            <div class="carousel__item" @click="handelToSS">
              <Album :urlImg="item.picUrl" 
                :playNum=0
                :playTitle="item.rcmdText"></Album>
            </div>
          </Slide>
        </template>
      </SingleRowComponent>

      <!-- 热门电台 -->
      <NewsComponent
        titleName="热门电台"
        :data="djHostData.data">

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
import api from "../api/api"
import {PCMData,PCMItem} from "../module/podcastCommendModule"
import {PDHData,PDHItem} from "../module/podcastDjHost"

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

/* 个性推荐 */
const RSRecommend = reactive<{data:PCMItem[]}>({data:[]});
const getRSRecommend = ()=>{
  api.radioStationApi.RSRecommend().then((response)=>{
    console.log("个性推荐",response)
    let res = response as PCMData;
    RSRecommend.data = res.data;
  })
}

/* 电台热门 */
const djHostData = reactive<{data:PDHItem[][]}>({data:[]})
const getDjHost = ()=>{
  api.radioStationApi.djHost().then((response)=>{
    console.log("热门电台")
    console.log(response)
    let res = response as PDHData;
    djHostData.data[0] = res.djRadios.slice(0,6);
    djHostData.data[1] = res.djRadios.slice(6,12);
    console.log(djHostData.data)
  })
}


getRSRecommend();
getDjHost();
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