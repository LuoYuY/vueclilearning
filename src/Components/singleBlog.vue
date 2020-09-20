<template>
  <div id="single-blog">
    <h1>{{ blog.title }}</h1>
    <article>{{ blog.body }}</article>
  </div>
</template>

<script>
  export default {
    name: "singleBlog",
    data() {
      return {
        //get the data 'id' from route
        id: this.$route.params.id,
        blog: {}
      }
    },
    created() {
      this.$http.get('http://jsonplaceholder.typicode.com/posts/' + this.id).then(function (data) {
        console.log(data);
        this.blog = data.body;
      });
    }
  }
</script>

<style scoped>

</style>
