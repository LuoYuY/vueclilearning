import Vue from 'vue'
//:'App' comes from App.vue
import App from './App.vue'
import LuoYuY from "./LuoYuY";

Vue.component('LuoYuY',LuoYuY)
new Vue({
  el: '#app',

  //render 提供 :render 'App' to '#app'
  //route component: 'App'
  render: h => h(App)
})
