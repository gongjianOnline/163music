<template>
  <div class="pieceContainer">
    <img :src="imgUrl" alt="">
    <div class="pieceIconContainer">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-yunhang"></use>
      </svg>
    </div>
    <!-- <div class="pieceTitle">说唱榜</div> -->
    <div class="pieceHr"></div>
    <div class="pieceDate">{{update}}</div>
  </div>
</template>
<script lang="ts" setup>

withDefaults(defineProps<{
  imgUrl:string,
  update:string
}>(),{
  imgUrl:"",
  update:""
})


</script>
<style lang="less" scoped>
.pieceContainer{
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #7c7c73;
  border-radius: 10px;
  position: relative;
  transition: all 0.25s;
  cursor: pointer;
  overflow: hidden;
}
.pieceContainer img{
  width: 100%;
  height: 100%;
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
  position: absolute;
  bottom: 25%;
  margin: 10px 0px;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%);;
  border-radius: 50%;
}
.pieceDate{
  position: absolute;
  bottom: 18%;
  opacity: 0.5;
  color: #fff;
  font-size: 10px;
}

</style>