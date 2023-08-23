<template>
  <div class="SSCollectContainer">
    <div class="SSCItem" v-for="index in 10" :key="index">
      <div class="SSCImg"></div>
      <div class="SSCAuthor">太南山南山</div>
      <div class="SSCDoc">这个人很懒,什么也没有</div>
    </div>
  </div>
</template>

<script lang="ts" setup>

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
  background: #fff;
  border-radius: 10px;
}
/* 收藏者图片 */
.SSCImg{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #ccc;
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