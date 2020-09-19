<template>
  <div>

    <show-blog></show-blog>
  </div>
</template>

<script>
  import addBlog from "./Components/addBlog";
  import showBlogs from "./Components/showBlogs"
  export default {
    components: {
      'add-blog':addBlog,
      'show-blog':showBlogs
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
