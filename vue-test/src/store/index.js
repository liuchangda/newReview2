import Vue from 'vue'
import Vuex from 'vuex'
//解决刷新页面后 vuex中数据不保存的问题
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    curMenu: {
      name: '电影',
      bgColor: "rgb(230, 130, 130)",
    }
  },
  mutations: {
    switchMenu(state, menu) {
      state.curMenu = menu;
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()],
})
