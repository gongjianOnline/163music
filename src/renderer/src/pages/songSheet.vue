<template>
  <div class="songSheetContainer">  
    <HeaderComponents></HeaderComponents>

  </div>
</template>

<script lang="ts" setup>
import HeaderComponents from "../components/mainView/headerComponents.vue"
</script>

<style lang="less" scoped>
.songSheetContainer{
  -webkit-app-region:drag;
}
</style>