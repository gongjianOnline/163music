<template>
  <div>
    <div class="tagsContainer">
      <div class="tagsItem"
          @click="handelTags(index,item)"
          :class="{'tagsItemActive':index == tagsIndex}"
          v-for="(item,index) in tagsData.data" 
          :key="index" >{{item.name}}</div>

          <el-popover placement="bottom" :width="400" trigger="click">
            <template #reference>
              <div class="tagsItem" :class="{'tagsItemActive':moreTagsIndex != -1}">
                <span>更多分类</span>
              </div>
            </template>
            <!-- 分类标签子类 -->
            <div class="moreTagsChildContainer">
              <div 
                @click="handelMoreTagsChild(tagesIndex,tagsItem)"
                :class="{'moreTagsChildActive':moreTagsIndex == tagesIndex}" 
                v-for="(tagsItem,tagesIndex) in moreTagsData.data" 
                :key="tagesIndex">{{ tagsItem.name}}</div>
            </div>
          </el-popover>
          
      </div>

      <!-- <SquareRecommend v-if="tagsIndex == 0"></SquareRecommend> -->
      <ChoiceSongSheet :data="SSLData.data"></ChoiceSongSheet>

    </div>
</template>

<script lang="ts" setup>
import {reactive,ref} from "vue";
// import SquareRecommend from "./squareRecommend.vue"
import ChoiceSongSheet from "./ChoiceSongSheet.vue"
import api from "../../api/api";
import {TagItem,TagData} from "../../module/finechoiceTag"
import {FSSLItem,FSSLData} from "../../module/finechoiceSSListModule";

const tagsIndex = ref(0);
const moreTagsIndex = ref(-1);
const tagsData = reactive<{data:TagItem[]}>({data:[]});
const moreTagsData = reactive<{data:TagItem[]}>({data:[]});
const handelTags = (index,item)=>{
  tagsIndex.value = index;
  moreTagsIndex.value = -1;
  getSongSheetList(item.name,50)
}
const handelMoreTagsChild = (index,item)=>{
  moreTagsIndex.value = index;
  tagsIndex.value = -1;
  getSongSheetList(item.name,50)
}

/* 标签列表 */
const getSongSheetTags = ()=>{
  api.finechoiceApi.songSheetTags().then((response)=>{
    console.log("标签列表")
    console.log(response)
    let res = response as TagData;
    tagsData.data = res.tags.splice(0,6);
    moreTagsData.data = res.tags;
  })
}

/* 歌单列表 */
const SSLData = reactive<{data:FSSLItem[]}>({data:[]})
const getSongSheetList = (cat,limit)=>{
  SSLData.data = [];
  api.finechoiceApi.songSheetList(cat,limit).then((response)=>{
    console.log("歌单列表");
    console.log(response);
    let res = response as FSSLData;
    SSLData.data = res.playlists;
  })
}



getSongSheetTags();
getSongSheetList("华语",50);

</script>

<style lang="less" scoped>
/* 标签组件 */
.tagsContainer{
  display: flex;
}
.tagsItem{
  border-radius: 10px;
  padding: 4px 15px;
  margin-right: 10px;
  border: 1px solid #e2e5e9;
  background: #f7f9fc;
  color: #283248;
  cursor: pointer;
  font-size: 14px;
}
.tagsItemActive,
.moreTagsChildActive{
  border: 1px solid #f8d8db !important;
  background: #f8eaed !important;
  color: #ff3a3a !important;
}

/* 更多标签下拉框 */
.moreTagsContainer{
  display: flex;
  margin-bottom: 10px;
}
.moreTagsContainer div{
  color:#7b8290;
  font-size: 16px;
  margin-right: 10px;
  padding: 5px 0px;
  cursor: pointer;
}
.moreTagsActive{
  color: #283248 !important;
  font-weight: bold;
  position: relative;
}
.moreTagsActive::before{
  content:"";
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%);
  width: 20px;
  height: 4px;
  border-radius: 20px;
  background: linear-gradient(90deg, rgba(255,18,104,1) 0%, rgba(252,61,73,1) 100%) !important;
}
.moreTagsChildContainer div{
  display: inline-block;
  border-radius: 10px;
  padding: 4px 15px;
  margin-right: 10px;
  margin-bottom: 10px;
  border: 1px solid #e2e5e9;
  background: #f7f9fc;
  color: #283248;
  cursor: pointer;
  font-size: 14px;

}
</style>