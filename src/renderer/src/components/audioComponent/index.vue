<template>
  <div class="audioContainer">
    <!-- 播放信息 -->
    <div class="audioInfoContainer"> 
      <div class="AIFImgContainer">
        <img :class="{'rotateContainer':isPlay}" :src="playStore.musicInfo?.al?.picUrl ?? ''" alt="">
      </div>
      <div class="AIFTitleContainer">
        <div class="AIFTitle">
          <!-- <marquee behavior="scroll" direction="left"></marquee> -->
          {{playStore.musicInfo?.name ?? ''}} - <span>{{ playStore.musicInfo?.ar?.[0]?.name ?? '' }}</span>
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
        <span @click="handelBackMusic">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shangyishou"></use>
          </svg>
        </span>
        <span @click="handlePlay">
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="isPlay?'#icon-zanting':'#icon-bofang'"></use>
          </svg>
        </span>
        <span @click="handelNextMusic">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xiayishou"></use>
          </svg>
        </span>
      </div>
      <!-- 进度条 -->
      <div class="paceContainer">
        <div class="dateContent">{{ playDate }}</div>
        <div class="paceContent">
          <el-slider 
            v-model="playCourseTiem" 
            :show-tooltip="false"/>
        </div>
        <div class="dateContent">{{ dayjs(playStore.musicInfo?.dt).format("mm:ss") }}</div>
      </div>
    </div>

    <!-- 音量及列表 -->
    <div class="volContainer">
      <div class="qualityContainer"> 
        <el-select 
          v-model="qualityValue" 
          placeholder="Select" 
          size="small"
          @change="handleQuality">
          <el-option
            v-for="item in qualityList.data"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="playListIcon" @click="handelPlayList">
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
            @input="handleVolume"
            v-model="volume" 
            :show-tooltip="false"/>
        </div>
      </div>
    </div>

    <div class="audioElContainer"> 
      <audio ref="audioEl"></audio>
    </div>
  </div>
  <PlayList :drawer="playStatus" @handel-close="handleDialog"></PlayList>
</template>
<script lang="ts" setup>
import {reactive, ref,watch} from "vue";
import PlayList from "./playList.vue"
import {usePlayStore} from "../../store/auto"
import api from "../../api/api"
import dayjs from "dayjs";

const playStore = usePlayStore();

/* 播放列表 */
const playStatus = ref(false);
const handelPlayList = ()=>{
  playStatus.value = true
}
const handleDialog = (status)=>{
  playStatus.value = status;
}

/* 监听播放id的变化 */
watch(()=>playStore.musicInfo,(newVal:any)=>{
  api.finechoiceApi.playMusicUrl(newVal.id,playStore.qualityValue).then((response:any)=>{
    setMusicUpdate(response.data[0])
  })
})
/**监听播放列表变化 */
watch(()=>playStore.playList,(newVal:any)=>{
  console.log(newVal)
  console.log(newVal[0].id)
  playStore.setMusicInfo(newVal[0])
})

/* 更新播放器属性 */
const audioEl = ref<HTMLAudioElement>();
let time:any = null;
const volume = ref(30);
const isPlay = ref(false);
const setMusicUpdate = (newUrl)=>{
  if(audioEl.value){
    clearInterval(time);
    playDate.value = "0:00";
    audioEl.value.src = newUrl.url;
    audioEl.value.play(); // 自动播放
    audioEl.value.volume = volume.value / 100; //设置音量
    isPlay.value = true;
    time = setInterval(()=>{
      if(audioEl.value){
        formatPlayDate(audioEl.value.currentTime);
        playCourse(audioEl.value.currentTime);
      }
      if(playDate.value == dayjs(playStore.musicInfo?.dt).format("mm:ss")){
        clearInterval(time);
        playDate.value = "0:00";
        playCourseTiem.value = 0;
        isPlay.value = false;
      }
    },1000)
  }
}

/* 格式化播放时间 */
const playDate = ref("0:00");
const formatPlayDate = (currentTime:number)=>{
  const milliseconds = Math.floor(currentTime * 1000);
  playDate.value = dayjs(milliseconds).format("mm:ss");
}
/* 计算播放进度 */
const playCourseTiem = ref(0);
const playCourse = (currentTiem)=>{
  if(playStore.musicInfo.dt){
    playCourseTiem.value = (currentTiem / playStore.musicInfo?.dt) * 100000;
  }
}
/* 音量设置 */
const handleVolume = ()=>{
  if(audioEl.value){
    audioEl.value.volume = volume.value / 100; // 动态设置音量
  }
}

/* 播放&暂停 */
const handlePlay = ()=>{
  if(audioEl.value){
    if(isPlay.value){
      audioEl.value.pause();
      isPlay.value = false;
    }else{
      audioEl.value.play();
      isPlay.value = true;
    };
  }
}

/* 上一曲 */
const handelBackMusic = ()=>{
  const musicInfoId = playStore.musicInfo.id;
  const index = playStore.playList.findIndex(item=>item.id === musicInfoId);
  if(index > 0){
    playStore.setMusicInfo(playStore.playList[index-1])
  }
}
/* 下一曲 */
const handelNextMusic = ()=>{
  const musicInfoId = playStore.musicInfo.id;
  const index = playStore.playList.findIndex(item=>item.id === musicInfoId);
  if(index < playStore.playList.length-1){
    playStore.setMusicInfo(playStore.playList[index+1])
  }
}

/* 切换歌曲质量 */
const qualityValue = ref("standard");
const qualityList = reactive({data:[
  {
    value:'standard',
    label:'标准'
  },
  {
    value:'higher',
    label:'较高'
  },
  {
    value:'exhigh',
    label:'极高'
  },
  {
    value:'lossless',
    label:'无损'
  },
  {
    value:'hires',
    label:'Hi-Res'
  },
  {
    value:'jyeffect',
    label:'高清环绕声'
  },
  {
    value:'sky',
    label:'沉浸环绕声'
  },
  {
    value:'jymaster',
    label:'超清母带'
  },
]})
const handleQuality = ()=>{
  playStore.setQuality(qualityValue.value);
  api.finechoiceApi.playMusicUrl(playStore.musicInfo.id,playStore.qualityValue).then((response:any)=>{
    setMusicUpdate(response.data[0])
  })
}
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
  padding: 8px;
  background: #121212;
  border-radius: 50%;
  overflow: hidden;
}
.AIFImgContainer>img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.rotateContainer{
  animation: rotate 6s linear infinite;
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
  color: #7c828f;
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
.qualityContainer:deep(.el-select){
  width: 100px !important;
}
.volSlider{
  width: 120px;
  margin: 0px 15px;
}
.audioElContainer{
  width: 0px;
  height: 0px;
  overflow: hidden;
}
</style>