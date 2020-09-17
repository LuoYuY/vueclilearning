<template>
<ul>
  <li v-for="name in names">{{ name }}</li>
</ul>
</template>

<script>
    export default {
      data() {
        return{
          names:['Amy','John','Mike','Clara']
        }
      }
    }
</script>

<style scoped>

</style>
