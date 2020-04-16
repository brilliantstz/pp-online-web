import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// 1 安装插件
Vue.use(Vuex)

// 2 创建并挂载store对象
export default new Vuex.Store({
   state: state,
   mutations: mutations,
   actions: actions,
   getters: getters
 })
