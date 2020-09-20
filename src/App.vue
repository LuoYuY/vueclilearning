<!--custom directives : 自定义指令 -->
<!--directives: v-model,v-for,v-on,etc.-->
<template>
  <div>
    <app-header></app-header>
    <router-view/>
  </div>
</template>

<script>
  import addBlog from "./Components/addBlog";
  import showBlogs from "./Components/showBlogs";
  import listBlog from "./Components/listBlog";
  import appHeader from "./Components/Header"
  export default {
    components: {
      'add-blog':addBlog,
      'show-blog':showBlogs,
      'list-blog':listBlog,
      'app-header':appHeader
    },
    data() { // = data: function() {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>
