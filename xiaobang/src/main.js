import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import './plugins/echarts.js'
import router from './router'
import Videojs from 'video.js'
import axios from 'axios'

import 'video.js/dist/video-js.css'
import 'videojs-markers'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './assets/css/global.css'
import './assets/new_icons/iconfont.css'
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

Vue.use(ElementUI, VideoPlayer)

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$video = Videojs

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
