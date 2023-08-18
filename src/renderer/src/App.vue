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


</style>