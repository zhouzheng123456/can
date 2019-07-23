# izokun-mis-vue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# 地区打包

如果是贵阳地区打包, 把 scr > data > area_token.js  里面的 area_token = 'gy' 
如果是武汉地区打包, 把 scr > data > area_token.js  里面的 area_token = 'wh'

# 地区接口
参照Login.vue 的 login()方法判断

# 地区模块
参照 Work.vue 的 我要申请 显示隐藏判断


注: 能力有限,根据区域区分暂时只想到这样的解决方案,有更好的想法随时更新代码