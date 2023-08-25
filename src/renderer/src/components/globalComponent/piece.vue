<template>
  <div class="pieceContainer">
    <div class="pieceIconContainer">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-yunhang"></use>
      </svg>
    </div>
    <div class="pieceTitle">说唱榜</div>
    <div class="pieceHr"></div>
    <div class="pieceDate">每周五更新</div>
  </div>
</template>
<script lang="ts" setup>


</script>
<style lang="less" scoped>
.pieceContainer{
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #7c7c73;
  border-radius: 10px;
  position: relative;
  transition: all 0.25s;
  cursor: pointer;
}
.pieceContainer:hover .pieceIconContainer{
  opacity: 1;
}
.pieceIconContainer{
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: all 0.25s;
  background: rgba(0,0,0,0.5);
  border-radius: 10px;
}
.pieceIconContainer .icon{
  fill:#fff;
  font-size: 80px;
}
.pieceTitle{
  color: #fcfffd;
  font-size: 22px;
  font-weight: bold;
  letter-spacing:1.5px
}
.pieceHr{
  margin: 10px 0px;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%);;
  border-radius: 50%;
}
.pieceDate{
  opacity: 0.5;
  color: #fff;
  font-size: 12px;
}

</style>