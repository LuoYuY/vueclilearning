<!--custom directives : 自定义指令 -->
<!--directives: v-model,v-for,v-on,etc.-->
<template>
  <div>
    <show-blog></show-blog>
    <list-blog></list-blog>
  </div>
</template>

<script>
  import addBlog from "./Components/addBlog";
  import showBlogs from "./Components/showBlogs";
  import listBlog from "./Components/listBlog";
  export default {
    components: {
      'add-blog':addBlog,
      'show-blog':showBlogs,
      'list-blog':listBlog
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
