<template>
<ul>
  <li v-for="name in names">{{ name }}</li>

</ul>
</template>

<script>
    export default {
      data() {
        return{
          names:['Amy','John','Mike']
        }
      }
    }
</script>

<style scoped>

</style>
