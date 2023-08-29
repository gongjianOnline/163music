# 163music

基于 electron 在线音乐播放器,内核技术栈 vue3 - TS 

## 项目启动

### 安装

```bash
$ pnpm install
```

### 运行

```bash
$ pnpm dev
```

### 打包

```bash
# For windows
$ pnpm build:win

# For macOS
$ pnpm build:mac

# For Linux
$ pnpm build:linux
```

## 目录文件说明

- api 接口统一管理文件夹
  - api.ts 作为接口统一的出口文件
  - homeAPi.ts 获取主要页面信息接口模块
- utils 工具类
  - axios.ts 对于axios的二次封装
  - http.ts 对于常用请求方式的二次封装
- public 用于存放前端静态资源, 代码可以直接访问 "/img/xxx.png "
- components 组件部分
  - globalComponent 用于全局组件的封装
    - swiper 封装轮播组件,魔改成新版网易效果
    - album 封装专辑模块组件
    - commit 封装评论组件
    - piece 封装块级组件（排行榜）
    - entry 增长排行榜小列表组件
  - mainView 右侧主视图模块组件
    - headerComponents.vue 对搜索,用户信息,窗口的操作的组件封装
  - menuComponents 左侧视图组件封装
    - index.vue 对菜单部分的组件封装
  - homeComponent 首页组件存放文件
    - bannerComponent.vue 首页bannber轮播图
    - singleRowComponent.vue 创建的单行轮播组件
  - SSCollect 专辑组件文件夹
    - SSCollect.vue 专辑中收藏列表组件
    - SSInfo.vue 专辑信息头部组件
  - choice 云音乐精选文件夹
    - index.vue 精选页面组件
    - square.vue 歌单广场
    - ChoiceSongSheet.vue 精选歌单中的其他标签列表组件
    - squareRecommend.vue 精选歌单中推荐标签的列表组件
    - ranking.vue 精选歌单中排行榜页面
    - singer.vue 歌手页面
  - podcastComponent 播客组件
    - newsComponent.vue 播客组件的新闻列表
  - commity 评论列表
    - commitComponent.vue 评论单项列表组件
    - commityRelease.vue 发布动态模态框
  - audioComponent 播放器组件
    - index.vue 播放器组件
    - playList.vue 播放器列表组件
  - loginComponent 登录组件
    - index.vue 登录组件
- module 数据模型文件夹
  - bannerData.ts  banner的数据模型

- pages 页面部分
  - layout.vue 对整个项目页面框架搭建
  - home.vue 为我推荐页面
  - songSheet.vue 歌单列表页面
  - choice.vue 精选推荐
  - podcast.vue 播客页面
  - community.vue 社区页面
  - localMusic.vue 本地音乐页面

​	
