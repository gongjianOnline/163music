<template>
  <!-- 网易云标题 -->
  <div class="homeComponent">
    <HeaderComponents></HeaderComponents>
    <BannerComponent></BannerComponent>
    <SingleRowComponent></SingleRowComponent>
  </div>

  


</template>

<script lang="ts" setup>
import HeaderComponents from  "../components/mainView/headerComponents.vue";
import BannerComponent from "../components/homeComponent/bannerComponent.vue";
import SingleRowComponent from "../components/homeComponent/singleRowComponent.vue";

</script>

<style lang="less" scoped>
.homeComponent{
  padding: 30px 20px;
  -webkit-app-region:drag
}


</style>