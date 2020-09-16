<template>
<ul>
  <li v-for="name in names">{{ name }}</li>

  </li>
</ul>
</template>

<script>
    export default {
        // name: "LuoYuY"
      data() {
        return{
          names:['Amy','John','Mike']
        }
      }
    }
</script>

<style scoped>

</style>
