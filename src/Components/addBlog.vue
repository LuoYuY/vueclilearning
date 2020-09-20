<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form>
      <label>Blog Title:</label>
      <input type="text" v-model.lazy="blog.title" required/>
      <label>Blog Content:</label>
      <textarea v-model.lazy="blog.content"></textarea>
      <div id="checkboxes">
        <input type="checkbox" value="Java" v-model="blog.categories"/>
        <label>Java</label>
        <input type="checkbox" value="C#" v-model="blog.categories"/>
        <label>C#</label>
        <input type="checkbox" value="JavaScript" v-model="blog.categories"/>
        <label>JavaScript</label>
        <input type="checkbox" value="C++" v-model="blog.categories"/>
        <label>C++</label>
        <input type="checkbox" value="python" v-model="blog.categories"/>
        <label>python</label>
      </div>

      <div id="selectBox">
        <label>Author:</label>
        <select v-model="blog.author">
          <option v-for="author in authors">{{ author }}</option>
        </select>
      </div>
      <!--    To avoid the default behavior,add 'prevent' -->
      <button v-on:click.prevent="post">Post</button>
    </form>
    <div id="preview">
      <h3>Blog Preview</h3>
      <p>title: {{ blog.title }}</p>
      <p>content:{{ blog.content }}</p>
      <p>category: </p>
      <ul>
        <li v-for="category in blog.categories">{{ category }}</li>
      </ul>
      <p>author:{{ blog.author }}</p>

    </div>
  </div>
</template>

<script>

  export default {
    components: {},
    data() { // = data: function() {
      return {
        blog: {
          title: "",
          content: "",
          categories: [],
          author: ""
        },
        authors: [
          'Amy',
          'John',
          'Mike'
        ]
      }
    },
    methods: {
      post: function () {

        //get an error
        //Being blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
        this.$http.post('http://115.29.208.141:8080/user/getUser',{})
        .then(function (data) {
          console.log(data)

        });

      }
    }
  }
</script>

<style scoped>
  h2 {
    text-align: center;
  }

  #add-blog label {
    display: block;
  }

  #add-blog button {
    display: block;
  }

  #checkboxes input {
    display: inline-block;
    margin-right: 10px;
  }

  #checkboxes label {
    display: inline-block;
  }


</style>
