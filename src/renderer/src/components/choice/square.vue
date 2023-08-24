<template>
  <div class="">
    <div class="tagsContainer">
      <div class="tagsItem"
        @click="handelTags(index)"
        :class="{'tagsItemActive':index == tagsIndex}"
        v-for="(item,index) in tagsData" 
        :key="index" >{{item.text}}</div>

        <el-popover placement="bottom" :width="400" trigger="click">
          <template #reference>
            <div class="tagsItem" :class="{'tagsItemActive':moreTagsChildIndex != null}">
              <span>更多分类</span>
            </div>
          </template>
          <!-- 更多标签分类 -->
          <div class="moreTagsContainer">
            <div :class="{'moreTagsActive':moreTagsIndex == index}" 
              @click="handelMoreTagsIndex(index)"
              v-for="(item,index) in moreTages" 
              :key="index">{{item.tagsText}}</div>
          </div>
          <!-- 分类标签子类 -->
          <div class="moreTagsChildContainer">
            <div 
              @click="handelMoreTagsChild(tagesIndex)"
              :class="{'moreTagsChildActive':moreTagsChildIndex == tagesIndex}" 
              v-for="(tagsItem,tagesIndex) in moreTages[moreTagsIndex].tagsChild" 
              :key="tagesIndex">{{ tagsItem.text}}</div>
          </div>
        </el-popover>
        
    </div>

    <SquareRecommend v-if="tagsIndex == 0"></SquareRecommend>
    <ChoiceSongSheet v-if="tagsIndex != 0"></ChoiceSongSheet>

  </div>
</template>

<script lang="ts" setup>
import {reactive,ref} from "vue";
import SquareRecommend from "./squareRecommend.vue"
import ChoiceSongSheet from "./ChoiceSongSheet.vue"

const tagsIndex = ref(0);
const tagsData = reactive([
  {
    text:"推荐",
  },
  {
    text:"官方",
  },
  {
    text:"华语",
  },
  {
    text:"轻音乐",
  },
  {
    text:"摇滚",
  },
  {
    text:"民谣",
  },
  {
    text:"电子",
  }
])
const handelTags = (index)=>{
  tagsIndex.value = index;
  moreTagsChildIndex.value = null;
}

/* 更多标签 */
const moreTagsIndex = ref(0);
const moreTages = reactive([
  {
    tagsText:"语种",
    tagsChild:[
      {
        text:'欧美'
      },
      {
        text:'日韩'
      },
      {
        text:"粤语"
      }
    ]
  },
  {
    tagsText:"风格",
    tagsChild:[
      {
        text:'流行'
      },
      {
        text:'说唱'
      },
      {
        text:"古典"
      },
      {
        text:"爵士"
      }
    ]
  },


])
const handelMoreTagsIndex = (index)=>{
  moreTagsIndex.value = index;
  moreTagsChildIndex.value = null;
}
/* 子标签 */
const moreTagsChildIndex = ref(null);
const handelMoreTagsChild = (index)=>{
  moreTagsChildIndex.value = index;
  tagsIndex.value = -1;
}

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
  border: 1px solid #e2e5e9;
  background: #f7f9fc;
  color: #283248;
  cursor: pointer;
  font-size: 14px;

}
</style>