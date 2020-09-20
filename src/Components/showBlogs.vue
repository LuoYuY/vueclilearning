<template>
  <div id="showBlogs">
    <h1>All Blogs:</h1>
    <div id="search">
      <input type="text" v-model="search" placeholder="search blogs"/>
    </div>
    <div v-for="blog in filterBlogs" class="single-blog">
      <!--    v-rainbow: a custom directive-->
      <router-link v-bind:to="'/blog/'+blog.id"><h2 v-rainbow>{{ blog.title | uppercase }}</h2></router-link>
      <article>{{ blog.body | limit }}</article>
    </div>
  </div>
</template>

<script>
  import searchMixin from "../mixins/searchMixin";
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

    },
    //register the filter locally
    filters:{
      'uppercase': function (value) { //uppercase(value) {
        return value.toUpperCase();
      }
    },
    mixins:[searchMixin]
  }
</script>
<style scoped>
</style>
