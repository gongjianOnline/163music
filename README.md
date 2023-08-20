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
  
  - mainView 右侧主视图模块组件
    - headerComponents.vue 对搜索,用户信息,窗口的操作的组件封装
  - menuComponents 左侧视图组件封装
    - index.vue 对菜单部分的组件封装
  - homeComponent 首页组件存放文件
    - bannerComponent.vue 首页bannber轮播图
    - singleRowComponent.vue 创建的单行轮播组件
  
- pages 页面部分
  - layout.vue 对整个项目页面框架搭建
  - home.vue 为我推荐页面

​	
