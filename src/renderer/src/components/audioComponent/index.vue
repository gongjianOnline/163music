<template>
  <div class="audioContainer">
    <!-- 播放信息 -->
    <div class="audioInfoContainer"> 
      <div class="AIFImgContainer"></div>
      <div class="AIFTitleContainer">
        <div class="AIFTitle">
          <!-- <marquee behavior="scroll" direction="left"></marquee> -->
          鼓楼 - <span>赵雷</span>
        </div>
        <div class="AIFoperate">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-tuijian1"></use>
            </svg>
          </div>
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-pinglun"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <!-- 控制器 -->
    <div class="ACcontroller"> 
      <div>
        <span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shangyishou"></use>
          </svg>
        </span>
        <span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zanting"></use>
          </svg>
        </span>
        <span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xiayishou"></use>
          </svg>
        </span>
      </div>
      <!-- 进度条 -->
      <div class="paceContainer">
        <div class="dateContent">0:00</div>
        <div class="paceContent">
          <el-slider 
            v-model="sliderValue" 
            :show-tooltip="false"/>
        </div>
        <div class="dateContent">3:35</div>
      </div>
    </div>

    <!-- 音量及列表 -->
    <div class="volContainer">
      <div class="playListIcon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-liebiao"></use>
        </svg>
      </div>
      <div class="volContent"> 
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-yinliang"></use>
          </svg>
        </div>
        <div class="volSlider">
          <el-slider 
            v-model="volValue" 
            :show-tooltip="false"/>
        </div>
      </div>

    </div>


  </div>
</template>
<script lang="ts" setup>
import {ref} from "vue";

const sliderValue = ref(0);
const volValue = ref(0)

</script>

<style lang="less" scoped>
.audioContainer{
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
}
/* 音乐信息 */
.audioInfoContainer{
  display: flex;
}
.AIFImgContainer{
  width: 50px;
  height: 50px;
  padding: 10px;
  background: #121212;
  border-radius: 50%;
}
.AIFTitleContainer{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 10px;
}
.AIFTitle{
  color: #283248;
  font-size: 14px;
  width: 150px;
  overflow: hidden; 
  white-space: nowrap;
}
.AIFTitle>span{
  color:#7c828f;
}
.AIFoperate{
  display: flex;
  margin-top: 4px;
}
.AIFoperate>div{
  margin-right: 10px;
}
.AIFoperate .icon{
  font-size: 18px;
  cursor: pointer;
}

/* 控制器 */
.ACcontroller{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
}
.ACcontroller > div:nth-child(1){
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 140px;
}


.ACcontroller > 
div:nth-child(1)>
span:nth-child(1)>,
.ACcontroller > 
div:nth-child(1)>
span:nth-child(3)>,
.icon{
  font-size: 30px;
}
.ACcontroller > 
div:nth-child(1)>
span:nth-child(2){
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f0f1f2;
  position: relative;
}
.ACcontroller > 
div:nth-child(1)>
span:nth-child(2) .icon{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.ACcontroller .icon{
  fill: #636a7a;
  cursor: pointer;
}

/* 进度条 */
.paceContainer{
  margin-top: 5px;
  width:350px;
  height: 10px;
  display: flex;
  position: relative;
}
.dateContent{
  font-size: 12px;
  color:#a8acb6;
  margin:0px 10px;
  position: absolute;
}
.dateContent:nth-child(1){
  left: 0;
  bottom: 0px;
}
.dateContent:nth-child(3){
  right: 0;
  bottom: 0px;
}
.paceContent{
  flex: 1;
  position: absolute;
  left:50px;
  right: 45px;
  bottom:-10px;
}
.tooltipClass{
  display: none !important;
}

/* 音量及播放列表 */
.volContainer{
  width: 200px;
  display: flex;
  align-items: center;
  margin-top: 40px;
}
.volContainer .icon{
  fill: #7d8491;
  font-size: 20px;
  display: inline-block;
  margin-left: 10px;
  cursor: pointer;
}
.volContent{
  display: flex;
  align-items: center;
}
.volSlider{
  width: 120px;
  margin: 0px 15px;
}
</style>