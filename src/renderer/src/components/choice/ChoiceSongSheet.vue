<template>
  <div class="CSSContainer"> 
    <Album></Album>
    <Album></Album>
    <Album></Album>
    <Album></Album>
    <Album></Album>
    <Album></Album>
    <Album></Album>
    <Album></Album>
    <Album></Album>
    <Album></Album>
  </div>
</template>

<script lang="ts" setup>
import Album from "../globalComponent/album.vue";
</script>

<style lang="less" scoped> 
.CSSContainer{
  margin-top:20px;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 10px;
}
</style>