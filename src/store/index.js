import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import axios from 'axios';

export default new Vuex.Store({
  state: {
    chatMessages: null,
  },
  mutations: {
    setChatMessages(state,payload){
      state.chatMessages = payload;
    },
  },
  actions: {
    getMessages({commit},chatId){
      axios.get(`https://api.mailchat.net/test/message.get?id=${chatId}`).then(response => {
        commit('setChatMessages',response.data.response.messages);
      });
    }
  },
  modules: {

  }
})
