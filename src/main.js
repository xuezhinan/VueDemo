import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'
import './common/stylus/inex.styl'

Vue.use(VueResource)
new Vue({
  el: "#app",
  components:{App},
  template:"<App/>",
  router
})
