<template>
  <div class="commitContainer">
    <div class="headerContainer">
      <div class="headerInfo">
        <div><img src="/img/home9.jpg" alt=""></div>
        <div>
          <div class="commitAuthor">网易云音乐</div>
          <div class="commitDate">12:00</div>
        </div>
      </div>
    </div>
    <!-- 内容 -->
    <div class="docContainer">
      2023那些好听到单曲循环的歌 制作不易 喜欢的话点个收藏吧~s
    </div>

    <!-- 点赞 & 转发 -->
    <div class="tripletContainer">
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xihuan"></use>
        </svg>
      </div>
      <div @click="isShowCommit">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-pinglun"></use>
        </svg>
      </div>
    </div>

    <div v-if="isShowCommitStatus"
      class="otherCommit"> 
      <div class="OCTitle">
        全部评论
        <span>114</span>
      </div>
      <!-- 评论 -->
      <div class="commitInputContainer">
        <textarea 
          rows="10" 
          maxlength="114" 
          placeholder="说点什么吧"
          v-model="commitInputValue"></textarea>
          <div class="CIValueNum"> {{ commitInputValue.length }} / 114</div>
          <div class="CISendButton">发布</div>
      </div>

      <!-- 评论列表 -->
      <div class="commitList">
        <div>
          <img src="/img/home9.jpg" alt="">
        </div>
        <div class="commitInfo">
          <div>
            <div>网易云音乐</div>
            <div>2023那些好听到单曲循环的歌 制作不易 喜欢的话点个收藏吧~s</div>
          </div>
          <div class="commitDateContainer"> 
            <div>date</div>
            <div> 
              <div>svg</div>
              <div>svg</div>
            </div>
          </div>
  
        </div>
      </div>

    </div>

    


  </div>


</template>

<script lang="ts" setup>
import {ref} from "vue";

/* 是否显示评论 */
const isShowCommitStatus = ref(false)
const isShowCommit = ()=>{
  isShowCommitStatus.value = !isShowCommitStatus.value;
}
/* 评论内容 */
const commitInputValue = ref("");


</script>

<style lang="less" scoped>
.commitContainer{
  border-radius: 10px;
  background: #fff;
  padding: 10px;
  margin-top: 10px;
}

/* 头部 */
.headerContainer{
  display: flex;
  justify-content: space-between;
}
.headerInfo{
  display: flex;
  align-items: center;
}
.headerInfo>div:nth-child(1){
  width: 50px;
  height: 50px;
}
.headerInfo>div img{
  width: 100%;
  height: 100%;
}
.headerInfo>div:nth-child(2){
  margin-left: 20px;
}
.commitAuthor{
  font-size: 14px;
  color: #5975b2;
  margin-bottom: 6px;
}
.commitDate{
  font-size: 12px;
  color: #969ba5;
}
/* 内容 */
.docContainer{
  color: #535b6d;
  font-size: 14px;
  margin-top: 14px;
  margin-bottom: 14px;
}
/* 一键两联 */
.tripletContainer{
  display: flex;
  align-items: center;
}
.tripletContainer .icon{
  display: inline-block;
  margin-right: 20px;
  font-size: 18px;
  fill: #7e8491;
  cursor: pointer;
}
/* 其他评论 */
.otherCommit{
  padding: 10px 0px;
}
.OCTitle{
  position: relative;
  color: #283248;
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
}
.OCTitle span{
  position: absolute;
  left: 65px;
  top: 0px;
  font-size: 10px;
  font-weight: bolder;
}
/* 评论 */
.commitInputContainer{
  width: 100%;
  margin-top: 10px;
  position: relative;
}
.commitInputContainer textarea{
  width: 100%;
  height: 80px;
  background: #f4f4f4;
  outline:none;
  resize:none;
  border:1px solid #e4e4e1;
  border-radius: 10px;
  padding: 10px 10px 20px 18px;
  color: #3b4458;
}
.CIValueNum{
  position: absolute;
  left: 20px;
  bottom: 20px;
  color:#7b828f;
  font-size: 14px;
}
.CISendButton{
  position: absolute;
  right: 20px;
  bottom: 20px;
  color: #7b828f;
  font-size: 14px;
  cursor: pointer;
}

/* 评论列表 */
.commitList{
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid red;
  margin-top: 10px;
}
.commitList>div:nth-child(1){
  width: 40px;
  height: 40px;
}
.commitList>div:nth-child(1) img{
  width: 100%;
  height: 100%;
}
</style>