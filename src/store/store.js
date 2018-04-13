import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  // for more complex calculation, using getter
  getters: {
    doubleCounter: state => {
      return state.counter * 2;
    }
  }
});
