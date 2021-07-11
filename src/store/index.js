import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    questions: {
    }
  },
  mutations: {
    setSailingArea(state, payload) {
      state.questions = payload;
    },
  },
  actions: {
  },
});

// const setQuestions = () => {
//   axios.get('/public/assets/tickets/sailing_area/vvp/vvp_1.json')
//   .then(response => {
//     console.log(response.data);
//     store.commit('setSailingArea', response.data.questions);
//   }).catch(err => {
//     console.log('error!!!!', err);
//   })
// }
//
// setQuestions();

export default store;
