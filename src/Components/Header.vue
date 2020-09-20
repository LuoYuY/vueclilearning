<template>
  <header>
     <ul>
       <li><router-link to="/" exact>Blog</router-link></li>
       <li><router-link to="/add" exact>add Blog</router-link></li>
     </ul>
  </header>
</template>

<script>
  import {bus} from '../main'
  import LuoYuYindex from "./LuoYuYindex";
  export default {
    components: {LuoYuYindex},
    props:{
      title:{
        type:String
      }
    },

    data() { // = data: function() {
      return {

      }
    },
    methods: {
      changeTitle: function () {
       //emit event to the bus
        this.title = 'LuminousClara';
        bus.$emit('changeTitle','Clarabe');
      }
    }
  }
</script>

<style scoped>
  header {
    background: lightgreen;
    padding: 10px;
  }

  h1 {
    color: #222;
    text-align: center;
  }
</style>
