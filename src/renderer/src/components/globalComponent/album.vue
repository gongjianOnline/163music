<template>
  <div class="albumContainer" :style="{ '--urlImg': `url(${urlImg})` }">
    <!-- 图片 -->
    <div class="albumImgContainer">
      <img class="albumBGImg" :src="urlImg" alt="">
      <!-- 遮罩层 -->
      <div class="maskContainer">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-yunhang"></use>
        </svg>
      </div>
      <div class="iconContainer">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-beijingyinle"></use>
        </svg>
      </div>
      <div class="playNumContainer">
        <div class="playNumIcon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-bofangqi-bofang"></use>
          </svg>
        </div>
        <div class="playNumValue">{{playNum}}亿</div>
      </div>
    </div>

    <div class="albumTitle"> 
      {{ playTitle }}
    </div>

  </div>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
  urlImg:string,
  playNum:string,
  playTitle:string
}>(),{
  urlImg:"/img/home5.jpg",
  playNum:"123.5",
  playTitle:"2023那些超级好听流行音乐推荐(更新快)",
})

</script>

<style scoped> 
.albumContainer{
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
}
.albumContainer::before{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:var(--urlImg);
  background-size: cover;
  filter: blur(50px);
  transform: scale(3);
}


/* 图片容器 */
.albumImgContainer{
  width: 100%;
  height: 77%;
  position: relative;
}
.albumBGImg{
  width: 100%;
  height: 100%;
}
.albumContainer:hover  .maskContainer{
  opacity:1 !important
}
.maskContainer{
  opacity: 0;
  position: absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  background: rgba(255,255,255,0.4);
  display: flex;
  justify-content: end;
  align-items: end;
  transition: all 0.25s;
}
.maskContainer .icon{
  font-size: 40px;
  fill: #fff;
}
.iconContainer{
  position: absolute;
  left: 6px;
  top: 4px;
  font-size: 20px;
  
}
.iconContainer .icon{
  fill: #fff;
}
/* 播放量 */
.playNumContainer{
  display: flex;
  align-items: center;
  position: absolute;
  right: 6px;
  top: 6px;
  color: #fff;
}
.playNumIcon .icon{
  fill: #fff;
  font-size: 20px;
}
.playNumValue{
  font-size: 12px;
}

/* 标题 */
.albumTitle{
  width: 100%;
  height: 100%;
  filter: blur(0px);
  color: #fff;
  font-size: 14px;
  text-align: left;
  padding: 6px;
  line-height: 1.3;
}

</style>