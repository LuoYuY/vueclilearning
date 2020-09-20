export default {
  computed: {
    //'filterblogs' is an array which comes from 'blogs'
    filterBlogs: function () {
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search);
      })
    }
  }
}
