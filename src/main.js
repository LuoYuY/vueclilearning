import Vue from 'vue'
//:'App' comes from App.vue
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'


//use 'vue-resource' plugin
Vue.use(VueResource);
Vue.use(VueRouter);

//register the route
const router = new VueRouter({
  routes: Routes, //equals : routes:[{},{},{}]
  mode:'history'
});

//Custom directives
Vue.directive('rainbow', {
  //bind : life cycle hook
  bind(el, binding, vnode) {
    //el: the element binding: =''
    el.style.color = "#" + Math.random().toString().slice(2, 8);
  }
});

//register the filter globally
Vue.filter('limit', function (value) {
  return value.slice(0, 100) + '...';
});

new Vue({
  el: '#app',

  //render 提供 :render 'App' to '#app'
  //route component: 'App'
  render: h => h(App),
  router: router
});
