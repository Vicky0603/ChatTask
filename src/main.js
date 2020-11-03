import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './assets/styles.scss'
import './assets/list.scss'
import './assets/textinput.scss'
import './assets/textoutput.scss'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
