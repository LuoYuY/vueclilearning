//a vue file : a component ([component's name] and [html codes])
//a vue file is just an extension of a component
<template>
  <div>
    <h1>{{ title }}</h1>

<!--    <p>{{ greeting() }}</p>-->

  </div>
</template>

<script>
import LuoYuY from "./LuoYuY";
//  the component's name
export default {
  components:{
    'LuoYuY':LuoYuY
  },
  data () { // = data: function() {
    return {
      title:'LuoYuY APP'
    }
  },
  methods: {
    // greeting:function () {
    //   return 'HELLO :)';
    //
    // }
  }
}
</script>


//style controls this component
<style>

</style>
