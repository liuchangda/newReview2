import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //相当于data
  state: {
    count: 0,
    num:10
  },
  //相当于computed
  getters: {
    result(state){
      return state.count * state.num;
    }
  },
  //相当于methods
  mutations: {
    addFather() {
      this.state.count++;
    },
    addNumFather(state,num) {
      state.count+=num;
    },
    reduce(state){
      state.count--;
    }
  },
  //相当于methods 存的是异步的方法
  actions: {
    reduceFun(){
      setTimeout(() => {
        this.commit('reduce');
      }, 1000);
    }
  },
  modules: {
  }
})
