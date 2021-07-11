import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    questions: {
    },
    tickets: []
  },
  mutations: {
    setSailingArea(state, payload) {
      state.questions = payload;
    },
    setTickets(state) {
      let arr = [];
      for (let i = 0; i <= 15; i++) {
        arr.push({num: i+1, true_ans: '', sel_ans: ''});
      }
      state.tickets = arr;
    },
    setTicketsValue(state, payload) {
      state.tickets[payload.ans_num - 1].true_ans = payload.true_ans;
      state.tickets[payload.ans_num - 1].sel_ans = payload.sel_ans;
      // console.log(state.tickets);
    }
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
