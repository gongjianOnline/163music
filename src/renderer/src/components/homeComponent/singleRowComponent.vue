<template>
  <div class="singRowContainer">
    <div class="titleName">
      <div class="singRowTitle">推荐歌单</div>
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fanhui"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="less" scoped> 
.singRowContainer{
  margin-top: 20px;
  border: 1px solid red;
  width: 100%;
  height: 200px;
}
.titleName{
  display: flex;
}
.singRowTitle{
  color:#283248;
  font-size: 20px;
  font-weight: bold;
}
</style>