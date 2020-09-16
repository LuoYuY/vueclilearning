<template>
<ul>
  <li v-for="name in names">{{ name }}</li>
</ul>
</template>

<script>
    export default {
      name: "LuoYuY",
      data() {
        return{
          names:['Amy','John','Mike']
        }
      }
    }
</script>

<style>

</style>
