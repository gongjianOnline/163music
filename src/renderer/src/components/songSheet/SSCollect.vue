<template>
  <div class="SSCollectContainer">
    <div class="SSCItem" v-for="(item) in data" :key="item.avatarImgId">
      <div class="SSCImg">
        <img :src="item.backgroundUrl" alt="">
      </div>
      <div class="SSCAuthor">{{item.nickname}}</div>
      <div class="SSCDoc">{{item.description==""?"这个人很懒,什么也没有":item.description}}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {SongSheetCollectSubscriber} from "../../module/songSheetCollect"

withDefaults(defineProps<{
  data:SongSheetCollectSubscriber[]
}>(),{
  data:()=>[]
})

</script>

<style lang="less" scoped>
.SSCollectContainer{
  padding: 10px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
}
.SSCItem{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 10px 0px;
  border-radius: 10px;
  transition: all 0.25s;
  cursor: pointer;
}
.SSCItem:hover{
  background: #fff;
}
/* 收藏者图片 */
.SSCImg{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #ccc;
  overflow: hidden;
}
.SSCImg img{
  width: 100%;
  height: 100%;
}
.SSCAuthor{
  font-size: 14px;
  color: #3c455a;
  margin-top: 10px;
}

.SSCDoc{
  color: #7b8290;
  font-size: 12px;
  margin-top: 10px;
}
</style>