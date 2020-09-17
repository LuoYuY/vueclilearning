<template>
  <header>
    <h1 v-on:click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
  import {bus} from '../main'
  export default {
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
