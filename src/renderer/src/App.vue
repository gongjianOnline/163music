<template>
  <router-view></router-view>
</template>

<script lang="ts" setup>

</script>

<style lang="less" >
  @import "./assets/css/normalize.css";
  body{
    --colorHover:#e4e8ec;
  }

  *{
    box-sizing: border-box;
  }
  html{
    user-select:none;
  }
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  /* 滚动条美化 */
  *::-webkit-scrollbar {
    width: 0px;
    // height: 10px; // 高度写不写，都不影响，因为会根据内容的长度自动计算
  }

  *::-webkit-scrollbar-thumb {
    background: #ccc; // 滑块颜色
    border-radius: 5px; // 滑块圆角
  }

</style>