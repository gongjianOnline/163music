<template>
  <div class="songSheetContainer">  
    <!-- header -->
    <HeaderComponents></HeaderComponents>
    <div class="mainContainer">
      <SSInfo></SSInfo>
    </div>
    
  </div>
</template>

<script lang="ts" setup>
import HeaderComponents from "../components/mainView/headerComponents.vue";
import SSInfo from "../components/songSheet/SSInfo.vue";




</script>

<style lang="less" scoped>
.songSheetContainer{
  -webkit-app-region:drag;
}
.mainContainer{
  -webkit-app-region:no-drag;
  padding: 0px 20px;
}
</style>