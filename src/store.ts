import Vue from 'vue';
import Vuex from 'vuex';

import Transponder from 'src/models/Transponder';
import Car from 'src/models/Car';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    transponders: Array<Transponder>(),
    cars: Array<Car>(),
  },
  mutations: {
    AddTransponder(state, transponder: Transponder): void {
      state.transponders.push(transponder);
    },
    RemoveTransponder(state, transponder: Transponder): void {
      const index = state.transponders.indexOf(transponder);
      state.transponders.splice(index, 1);
    },

    AddCar(state, car: Car): void {
      state.cars.push(car);
    },
    RemoveCar(state, car: Car): void {
      const index = state.cars.indexOf(car);
      state.cars.splice(index, 1);
    }
  },
  actions: {

  },
});
