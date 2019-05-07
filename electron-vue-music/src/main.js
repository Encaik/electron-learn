import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
require("jquery/dist/jquery.min.js");
require("popper.js/dist/umd/popper");
require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap/dist/js/bootstrap.min.js");
require("font-awesome/css/font-awesome.min.css");

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
