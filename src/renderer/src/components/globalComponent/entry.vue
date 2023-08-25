<template>
  <div class="entryContainer">
    <div class="entryTitleComponent">
      <div class="entryTitleContent">推荐榜</div>
      <div class="entryUpdateContent">刚刚更新</div>
    </div>

    <div class="entryModule">
      <div class="entryImg">
        <div class="entryImgIcon"><svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-yunhang"></use>
        </svg></div>
        <img src="/img/home7.jpg" alt="">
      </div>
      <div class="entryModuleList">
        <div class="entryModuleItem" v-for="index in 3" :key="index">
          <div>{{ index }}</div>
          <div>NEW DANCE <span> - GX</span></div>
          <div>-</div>
        </div>
      </div>
    </div>


  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="less" scoped>
.entryContainer{
  padding: 20px;
  background: #fff;
  border-radius: 10px;
}
.entryTitleComponent{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.entryTitleContent{
  font-size: 18px;
  color: #3d465a;
  font-weight: bold;
}
.entryUpdateContent{
  font-size: 12px;
  color: #a9adb6;  
}

/* 内容模块 */
.entryModule{
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  cursor: pointer;
}
.entryImg{
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.25s;
}
.entryModule:hover .entryImg::before{
  content: "";
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background: rgba(0,0,0,0.5);
  border-radius: 20px;
}
.entryModule:hover .entryImgIcon{
  opacity: 1;
}
.entryImgIcon{
  opacity: 0;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.25s;
}
.entryImgIcon .icon{
  fill: #fff;
  font-size: 70px;
}
.entryImg img{
  width: 100px;
}

/* 列表 */
.entryModuleList{
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.entryModuleItem{
  display: flex;
}
.entryModuleItem > div:nth-child(1){
  color: #3d465a;
  font-size: 14px;
  margin: 0px 10px;
}
.entryModuleItem > div:nth-child(2){
  color: #3d465a;
  font-size: 14px;
  flex: 1;
}
.entryModuleItem span{
  color: #bcbfc6;
}
.entryModuleItem > div:nth-child(3){
  color: #bcbfc6;
  font-size: 14px;
}
</style>