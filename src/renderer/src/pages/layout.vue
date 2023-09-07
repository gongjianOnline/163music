<template>
  <!-- 主视图 -->
  <div class="mainView">
    <!-- 左菜单模块 -->
    <div class="menuContainer">
      <MenuComponents></MenuComponents>
    </div>
    
    <!-- 右主图模块 -->
    <div class="mainContainer">
      <router-view></router-view>
    </div>


  </div>
  <!-- 播放器 -->
  <div class="audioContainer"> 
    <AudioComponent></AudioComponent>
  </div>
</template>

<script lang="ts" setup>
import MenuComponents from "../components/menuComponents/index.vue";
import AudioComponent from "../components/audioComponent/index.vue";

</script>

<style scoped>
.mainView{
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
}
.audioContainer{
  border-top: 1px solid RGB(230,231,233);
  width: 100%;
  height: 80px;
  background: RGB(251,251,252);
  overflow: hidden;
}

/* 左视图菜单 */
.menuContainer{
  width: 200px;
  height: 100%;
  background: RGB(240,243,246);
}
/* 左视图 */
.mainContainer{
  flex: 1;
  background: RGB(247,249,252);
  overflow-y: auto;
  overflow-x: hidden;
}


</style>