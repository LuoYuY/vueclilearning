<!-- prop: to output different data at each different time, pass down data as prop,
a component with data-->
<template>
  <div>
<!--    use v-on:EventName to listen to the event-->
<!--    use $event to get the data in the event -->
    <app-header v-bind:title="title" ></app-header>
    <!--    now 'users'has became a property-->
    <app-lyy v-bind:users="users"></app-lyy>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>

  import Header from "./Components/Header";
  import Footer from "./Components/Footer";
  import LuoYuYindex from "./Components/LuoYuYindex";

  export default {
    components: {
      'app-header': Header,
      'app-footer': Footer,
      'app-lyy': LuoYuYindex
    },
    data() { // = data: function() {
      return {
        users: [
          {name: 'Amy', age: 17, show: false},
          {name: 'John', age: 12, show: false},
          {name: 'Mike', age: 13, show: false},
          {name: 'Clara', age: 15, show: false},
          {name: 'Lucy', age: 16, show: false}

        ],
        title:'洛小侠'
      }
    },
    methods: {
      updateTitle:function (newTitle) {
        this.title = newTitle;

      }
    }
  }
</script>

<style scoped>

</style>
