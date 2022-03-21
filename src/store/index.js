import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
import user from './modules/user/index'

let store = new Vuex.Store({
   modules:{
        user
   }
});
export default store