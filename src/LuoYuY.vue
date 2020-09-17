<template>
  <div>
    <h1>A name list:</h1>
    <ul>
      <li v-for="name in names">{{ name }}</li>

    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        names: ['Amy', 'John', 'Mike']
      }
    }
  }
</script>

<style scoped>

</style>
