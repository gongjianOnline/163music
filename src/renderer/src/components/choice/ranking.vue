<template>
  <div class="rankingContainer"> 
    <div class="rankingTitle">榜单推荐</div>
    <di class="rankingGrid"> 
      <div><PieceComponent></PieceComponent></div>
      <div><PieceComponent></PieceComponent></div>
      <div><PieceComponent></PieceComponent></div>
    </di>
  </div>
</template>

<script lang="ts" setup>
import PieceComponent from "../globalComponent/piece.vue";
</script>

<style lang="less" scoped> 
.rankingTitle{
  font-size: 18px;
  color: #283248;
  font-weight: bold;
}
.rankingGrid{
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 10px;
  margin-top: 10px;
}
</style>