<!--life cycle hooks-->
<!--hook: 钩子函数，类似拦截处理-->
<!--life cycle hook: 在Vue对象被创建之前执行的函数-->
<template>
  <div>
<!--    use v-on:EventName to listen to the event-->
<!--    use $event to get the data in the event -->
<!--    <app-header v-bind:title="title" ></app-header>-->
    <!--    now 'users'has became a property-->
<!--    <app-lyy v-bind:users="users"></app-lyy>-->
<!--    <app-footer v-bind:title="title"></app-footer>-->
    <form-helper>
      <div slot="form-header">
        <h3>This is the title:</h3>
        <p>information of the form</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required/>
        <input type="text" placeholder="password" required/>
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">Submit</button>
      </div>

    </form-helper>
  </div>
</template>

<script>

  import Header from "./Components/Header";
  import Footer from "./Components/Footer";
  import LuoYuYindex from "./Components/LuoYuYindex";
  import formHelper from "./Components/formHelper";

  export default {
    components: {
      'app-header': Header,
      'app-footer': Footer,
      'app-lyy': LuoYuYindex,
      'form-helper':formHelper
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

      },

    }
  }
</script>

<style scoped>

</style>
