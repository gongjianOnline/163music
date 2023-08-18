<template>
  <!-- 标题模块 -->
  <div class="headerContainer">
    <!-- 路由&搜索框 -->
    <div class="leftComponent">
      <!-- 后退按钮 -->
      <div class="backContainer">
        <svg class="icon backIcon" aria-hidden="true">
          <use xlink:href="#icon-fanhui"></use>
        </svg>
      </div>
      <!-- 搜索框 -->
      <div class="searchContainer">
        <div class="searchIconContainer"> 
          <svg class="icon backIcon" aria-hidden="true">
            <use xlink:href="#icon-sousuo"></use>
          </svg>
        </div>
        <input type="text" >
      </div>
    </div>

    <!-- 用户名操作 -->
    <div class="operateContainer">
      <!-- 用户模块 -->
      <div class="userContainer">
        <div class="userImgContainer"></div>
        <div class="userNameContent">未登录</div>
      </div>
      <!-- 用户相关操作 -->
      <div class="userIconContainer">
        <div>
          <svg class="icon backIcon userIconItem" aria-hidden="true">
            <use xlink:href="#icon-youxiang"></use>
          </svg>
        </div>
        <div>
          <svg class="icon backIcon userIconItem" aria-hidden="true">
            <use xlink:href="#icon-shezhi"></use>
          </svg>
        </div>
      </div>
      <!-- 分割 -->
      <div class="partitionContainer">
        <div class="partitionContent"></div>
      </div>

      <!-- 窗口操作 -->
      <div class="windowOperateContainer"> 
        <div class="">
          <svg class="icon backIcon userIconItem" aria-hidden="true">
            <use xlink:href="#icon-zuixiaohua"></use>
          </svg>
        </div>
        <div class="">
          <svg class="icon backIcon userIconItem" aria-hidden="true">
            <use xlink:href="#icon-zuidahua1"></use>
          </svg>
        </div>
        <div class="">
          <svg class="icon backIcon userIconItem" aria-hidden="true">
            <use xlink:href="#icon-guanbi"></use>
          </svg>
        </div>
        
      </div>
      

    </div>

  </div>


</template>

<script lang="ts" setup>

</script>

<style lang="less" scoped>
.headerContainer{
  display: flex;
  justify-content: space-between;
}
/* 左侧 */
.leftComponent{
  display: flex;
}
/* 返回按钮 */
.backContainer{
  padding: 8px 4px;
  border: 1px solid #e2e5e9;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.25s;
}
.backContainer:hover{
  background: var(--colorHover);
}
.backIcon{
  fill: #7b8290;
}
/* 搜索 */
.searchContainer{
  margin-left: 10px;
  border: 1px solid transparent;
  border-left: 1px solid rgba(217,230,249,1);
  border-right: 1px solid rgba(247,228,242,1);
  border-radius: 10px;
  overflow: hidden;
  min-width: 250px;
  position: relative;
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  background: linear-gradient(90deg, rgba(217,230,249,1) 0%, rgba(247,228,242,1) 100%);
}
.searchContainer>input{
  width: 100%;
  height: 100%;
  outline:none;
  border: none;
  padding-left: 35px;
  background: linear-gradient(90deg, rgba(235,241,251,1) 0%, rgba(247,238,246,1) 100%);
  font-size: 14px;
  color: #9fa5b3;
}
.searchIconContainer{
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
}

/* 操作模块 */
.operateContainer{
  display: flex;
}
/* 用户模块 */
.userContainer{
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 10px;
}
.userImgContainer{
  background: #e3e5eb;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.userNameContent{
  font-size: 14px;
  margin-left: 4px;
  color: #515a6c;
}
/* 用户相关操作 */
.userIconContainer{
  display: flex;
  align-items: center;
}
.userIconContainer>div{
  margin-left: 10px;
}
.userIconContainer .icon{
  fill: #7b8290;
  cursor: pointer;
}
.userIconContainer .icon:hover{
  fill: #333333;
}
.userIconItem{
  font-size: 20px;
}
/* 分割 */
.partitionContainer{
  height: 100%;
  width: 10px;
  display: flex;
  align-items: center;
  margin-left: 10px;
  // margin-right: 10px;
}
.partitionContent{
  width: 1px;
  height: 20px;
  background: #e2e5e9;
}

/* 窗口操作 */
.windowOperateContainer{
  display: flex;
  align-items: center;
}
.windowOperateContainer>div{
  margin-left: 10px;
}
.windowOperateContainer .icon{
  cursor: pointer;
  font-size: 16px;
  fill: #7b8290;
}
.windowOperateContainer .icon:hover{
  fill: #333333
}



</style>