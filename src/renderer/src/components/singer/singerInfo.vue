<template>
  <div class="SSInfoContainer">
    <div class="imgContainer">
      <img :src="data.artist.avatar" alt="">
    </div>
    <!-- 歌单信息 -->
    <div class="SSInfoContent">
      <div>
        <div class="SSITitle">{{ data.artist.name }}</div>
        <div class="SSTDoc" :title="data.artist.briefDesc">{{ data.artist.briefDesc }}</div>
        <!-- 标签 -->
        <div class="SSTNotes">
          <!-- 作者 -->
          <!-- <div class="SSIAuthorContainer">
            <div class="authorImgContent">
              <img :src="data.artist.picUrl" alt="">
            </div>
            <div class="authorContent">{{data.artist.name}}</div>
          </div> -->
          <!-- 标签 -->
          <div class="SSITagContainer">
            <div class="SSITagTitle">标签:</div>
            <div class="SSITagValue">
              <span v-for="(tagsItem,tagsIndex) in data.secondaryExpertIdentiy" :key="tagsIndex">{{tagsItem.expertIdentiyName}}</span>
            </div>
          </div>
          <!-- 创建时间 -->
          <!-- <div class="SSIData">
            <div>{{ dayjs(data.publishTime).format('YYYY-MM-DD') }} 创建时间</div>
          </div> -->
        </div>
      </div>
      <!-- 按钮组 -->
      <div class="buttonContainer">
        <div class="playAllContent">
          <span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-bofangqi-bofang"></use>
            </svg>
          </span>
          <span>播放全部</span>
        </div>
        <!-- <div class="addFileContent">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shoucang"></use>
          </svg>
          <span>{{data.shareCount}}</span>
        </div> -->
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
// import dayjs from "dayjs";
// import {SingerInfoData} from "../../module/singerInfo"

withDefaults(defineProps<{
  data:any
}>(),{
  data:()=>{
    return {
      artist:{cover:""}
    }
  }
  
})



</script>

<style lang="less" scoped> 
.SSInfoContainer{
  width: 100%;
  height: 160px;
  display: flex;
  padding: 0px 20px;
}
/* 图片 */
.imgContainer{
  height: 160px;
  width: 160px;
  border-radius: 10px;
  overflow: hidden;
}
.imgContainer>img{
  width: 100%;
  height: 100%;
  object-fit:cover;
}

/* 标签 */
.SSInfoContent{
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
}

.SSITitle{
  font-size: 20px;
  font-weight: bold;
  color: #283248;
}
.SSTDoc{
  font-size: 12px;
  margin-top: 15px;
  line-height: 1.5;
  color: #7b7c89;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}

.SSTNotes{
  display: flex;
}
/* 作者 */
.SSIAuthorContainer{
  display: flex;
  align-items: center;
  margin-top: 20px;
}
.authorImgContent{
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #8b8b96;
  overflow: hidden;
}
.authorImgContent img{
  width: 100%;
  height: 100%;
}
.authorContent{
  font-size: 12px;
  color: #8b8b96;
  margin-left: 8px;
}
/* 标签 */
.SSITagContainer{
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;
}
.SSITagTitle{
  font-size: 12px;
  color: #8b8b96;
}
.SSITagValue{
  font-size: 12px;
  margin-left: 2px;
}
.SSITagValue span{
  display: inline-block;
  margin-left: 4px;
}
/* 创建时间 */
.SSIData{
  margin-top: 27px;
  font-size: 12px;
  color: #8b8b96;
  margin-left: 10px;
}
/* 按钮组 */
.buttonContainer{
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.playAllContent{
  width: 110px;
  padding: 10px 0px;
  background: linear-gradient(90deg, rgba(255,18,104,1) 0%, rgba(252,61,73,1) 100%);
  border-radius: 12px;
  color: #fff;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.playAllContent .icon{
  font-size: 20px;
}
.addFileContent{
  margin-left: 10px;
  width: 80px;
  padding: 12px 0px;
  border: 1px solid #dedbdd;
  background: #eae7e8;
  border-radius: 12px;
  text-align: center;
  font-size: 12px;
  cursor: pointer;
  color: #3b4458;
}
.addFileContent .icon{
  fill: #3b4458;
}
.addFileContent>span{
  display: inline-block;
  margin-left: 2px;
  font-weight: bold;
}




</style>