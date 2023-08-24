<template>
  <div class="SRContainer">
    <div class="SRTitleContent">龚箭的宝藏歌单</div>
    <div class="SRListContainer">
      <div class="SRLItem">
        <Album></Album>
      </div>
      <div class="SRLItem"><Album></Album></div>
      <div class="SRLItem"><Album></Album></div>
      <div class="SRLItem"><Album></Album></div>
      <div class="SRLItem"><Album></Album></div>
      <div class="SRLItem"><Album></Album></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Album from "../globalComponent/album.vue";

</script>

<style lang="less" scoped> 
.SRContainer{
  margin-top: 20px;
}
.SRTitleContent{
  color: #283248;
  font-size: 18px;
  font-weight: bold;
}
.SRListContainer{
  display: grid;
  grid-template-columns: repeat(4 , 1fr);
  grid-gap: 10px;
  margin-top: 10px;
}
</style>