<template>
  <div class="localMusicContainer">
    <HeaderComponents></HeaderComponents>
    <div class="mainViewContainer">
      <!-- 标题部分 -->
      <div class="LMTitleContent">
        <div>
          本地音乐
          <span>共0首</span>
        </div>
        <div>
          选择目录
          <span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-fanhui"></use>
            </svg>
          </span>
        </div>
      </div>

      <!-- 播放按钮 -->
      <div class="btnContainer">
        <div class="playBtn">
          <span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-bofangqi-bofang"></use>
            </svg>
          </span>
          <span>播放全部</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
import HeaderComponents from "../components/mainView/headerComponents.vue"

</script>

<style lang="less" scoped>
.localMusicContainer{
  -webkit-app-region:drag;
}
.mainViewContainer{
  -webkit-app-region:no-drag;
  padding: 20px;
}
/* 标题部分 */
.LMTitleContent{
  display: flex;
  justify-content: space-between;
}
.LMTitleContent>div:nth-child(1){
  font-size: 20px;
  font-weight: bolder;
  color: #283248;
}
.LMTitleContent>div:nth-child(1)>span{
  font-size: 12px;
  font-weight: 300;
  color: #a4a9b4;
}
.LMTitleContent>div:nth-child(2){
  font-size: 14px;
  color:#637db7;
  cursor: pointer;
}
.LMTitleContent>div:nth-child(2) .icon{
  transform: rotate(180deg);
}
/* 按钮 */
.btnContainer{
  display: flex;
  margin-top: 20px;
}
.playBtn{
  color:#ffffff;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  background: linear-gradient(90deg, rgba(255,18,104,1) 0%, rgba(252,61,73,1) 100%);
}
.playBtn .icon{
  fill:#ffffff;
}

</style>