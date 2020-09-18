import Vue from 'vue'
//:'App' comes from App.vue
import App from './App.vue'
import VueResource from 'vue-resource'


//use 'vue-resource' plugin
Vue.use(VueResource);
new Vue({
  el: '#app',

  //render 提供 :render 'App' to '#app'
  //route component: 'App'
  render: h => h(App)
})
