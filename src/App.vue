<!--life cycle hooks-->
<!--hook: 钩子函数，类似拦截处理-->
<!--life cycle hook: 在Vue对象被创建之前执行的函数-->
<template>
  <div>
    <!--    'component' means I will put a component here-->
    <!--    tell the 'component' which component I'd like to put-->
    <!--    use the 'keep-alive' tag to keep the data inputted(avoid the component being destroyed  -->
    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>
    <button v-on:click="showOne">Show form one</button>
    <button v-on:click="showTwo">Show form Two</button>

  </div>
</template>

<script>
  import formHelper from "./Components/formHelper";
  import formTwo from "./Components/formtwo";

  export default {
    components: {
      'form-one': formHelper,
      'form-two': formTwo
    },
    data() { // = data: function() {
      return {
        component: 'form-two'
      }
    },
    methods: {
      showOne: function () {
        this.component = 'form-one';
      },
      showTwo: function () {
        this.component = 'form-two';
      }
    }
  }
</script>

<style scoped>

</style>
