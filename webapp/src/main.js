// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import App from "./App"
import router from "./router"

import * as echarts from "echarts"
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import axios from "axios"

window.echarts = echarts

Vue.use(ElementUI)
Vue.config.productionTip = false


Vue.prototype.$axios = axios

Vue.prototype.$axiosJava = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_ROOT_URL_JAVA
})

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: {App},
  template: "<App/>"
})

