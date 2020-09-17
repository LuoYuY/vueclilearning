<template>
  <header>
    <h1 v-on:click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
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
        //this.title = 'Clarabe'; //only update 'title' in this component object

        //use event to change title in the root component(where the data exactly comes from)
        //to use event : $emit
        //$emit('event name','data you wanna transfer')
        //listen this event in the root component
        this.$emit('changeTitle','Clarabe');

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
