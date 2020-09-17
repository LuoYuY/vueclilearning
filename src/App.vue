//a vue file : a component ([component's name] and [html codes])
//a vue file is just an extension of a component


<template>
  <div>
    <h1>{{ title }}</h1>
<!--    use 'LuoYuY' -->
    <LuoYuY></LuoYuY>
<!--    <p>{{ greeting() }}</p>-->

  </div>
</template>

<script>

//  the component's name
export default {
  data () { // = data: function() {
    return {
      title:'LYY App'
    }
  },
  methods: {
  }
}
</script>


//style controls this component
<style>

</style>
