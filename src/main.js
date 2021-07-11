import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import { router } from '../src/routes/router';
import store from '../src/store/index';
import { BootstrapVue } from 'bootstrap-vue';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(BootstrapVue)
Vue.use(Vuex);
Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
