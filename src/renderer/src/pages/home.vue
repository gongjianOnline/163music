<template>
  <!-- 网易云标题 -->
  <div class="homeComponent">
    <HeaderComponents></HeaderComponents>
    <BannerComponent></BannerComponent>
  </div>

  


</template>

<script lang="ts" setup>
import HeaderComponents from  "../components/mainView/headerComponents.vue";
import BannerComponent from "../components/homeComponent/bannerComponent.vue";


</script>

<style lang="less" scoped>
.homeComponent{
  padding: 30px 20px;
  -webkit-app-region:drag
}


</style>