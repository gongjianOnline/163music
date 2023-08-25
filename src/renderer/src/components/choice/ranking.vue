<template>
  <div class="rankingContainer"> 
    <div class="rankingTitle">榜单推荐</div>
    <di class="rankingGrid"> 
      <div><PieceComponent></PieceComponent></div>
      <div><PieceComponent></PieceComponent></div>
      <div><PieceComponent></PieceComponent></div>
    </di>
  </div>

  <div class="officialRanking" data-color="">
    <div class="rankingTitle">官方推荐</div>
    <div class="officialGrid">
      <EntryComponent></EntryComponent>
      <EntryComponent></EntryComponent>
      <EntryComponent></EntryComponent>
      <EntryComponent></EntryComponent>
    </div>


  </div>

  
</template>

<script lang="ts" setup>
import PieceComponent from "../globalComponent/piece.vue";
import EntryComponent from "../globalComponent/entry.vue";
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
.officialRanking{
  margin-top: 10px;
}
/* 官方推荐 */
.officialGrid{
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2,1fr);
  margin-top: 10px;
}
</style>