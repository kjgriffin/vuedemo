import Vue from 'vue';
import Vuex from 'vuex';

import Transponder from 'src/models/Transponder';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    transponders: Array<Transponder>(),
  },
  mutations: {
    AddTransponder(state, transponder: Transponder): void {
       state.transponders.push(transponder); 
    },
  },
  actions: {

  },
});
