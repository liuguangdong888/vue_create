import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import pubComponent from '@/components/index.js'
import axios from 'axios'

Vue.prototype.$axios = axios
Vue.use(pubComponent)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
