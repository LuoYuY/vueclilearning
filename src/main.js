import Vue from 'vue'
//:'App' comes from App.vue
import App from './App.vue'


export const bus = new Vue(); //event bus
new Vue({
  el: '#app',

  //render 提供 :render 'App' to '#app'
  //route component: 'App'
  render: h => h(App)
})
