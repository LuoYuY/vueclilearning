<template>
  <div id="showBlogs">
    <h1>All Blogs:</h1>
    <div id="search">
      <input type="text" v-model="search" placeholder="search blogs"/>

    </div>
    <div v-for="blog in filterBlogs" class="single-blog">
      <!--    v-rainbow: a custom directive-->
      <h2 v-rainbow>{{ blog.title | uppercase }}</h2>
      <article>{{ blog.body | limit }}</article>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        blogs: [],
        search: ''
      }
    },
    methods: {},
    //use life circle function
    created() {
      this.$http.get('https://jsonplaceholder.typicode.com/posts', {}).then(function (data) {
        console.log(data);
        this.blogs = data.body.slice(0, 10);
      })
    },
    computed: {
      //'filterblogs' is an array which comes from 'blogs'
      filterBlogs: function () {
        return this.blogs.filter((blog) => {
          return blog.title.match(this.search);
        })
      }
    },
    //register the filter locally
    filters:{
      'uppercase': function (value) { //uppercase(value) {
        return value.toUpperCase();
      }
    }
  }
</script>
<style scoped>
</style>
