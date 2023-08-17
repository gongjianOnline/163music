<template>
  <!-- 主视图 -->
  <div class="mainView">
    <!-- 左菜单模块 -->
    <div class="menuContainer"></div>
    <!-- 右主图模块 -->
    <div class="mainContainer"></div>
  </div>
  <!-- 播放器 -->
  <div class="audioContainer"> 

  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.mainView{
  width: 100%;
  height: calc(100vh - 80px);
  background: RGB(247,249,252);
}
.audioContainer{
  border-top: 1px solid RGB(230,231,233);
  width: 100%;
  height: 80px;
  background: RGB(251,251,252);
}

/* 左视图菜单 */
.menuContainer{
  max-width: 200px;
  height: 100%;
  background: RGB(240,243,246);
}


</style>