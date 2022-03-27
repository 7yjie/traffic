import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {request} from "./assets/js/util/request";
import config from './assets/js/conf/index';
import store from './store/index'
import Axios from 'axios'

Vue.config.productionTip = false;
Vue.prototype.$request = request;
Vue.prototype.$config = config;
Vue.prototype.$axios = Axios.create({
   baseURL:config.baseApi
});

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
