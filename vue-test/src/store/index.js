import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    curMenu:{
      name:'电影',
      bgColor: "rgb(230, 130, 130)",
    }
  },
  mutations: {
    switchMenu(state,menu){
      state.curMenu = menu;
    }
  },
  actions: {
  },
  modules: {
  }
})
