<template>
<div>
  <h1>Please fill out our form...</h1>
  <form>
    <div id="form-header">
      <h1>Form1</h1>
    </div>
    <div id="form=fields">
      <input type="text" placeholder="username"/>
    </div>
    <div id="form-controls">
      <button v-on:click="">Submit</button>
    </div>
    <div id="useful-links">
      <ul>
        <li><a href="#">Link</a> </li>
        <li><a href="#">Link</a> </li>
        <li><a href="#">Link</a> </li>
        <li><a href="#">Link</a> </li>
      </ul>
    </div>

  </form>
</div>
</template>

<script>
    export default {
        name: "formHelper"
    }
</script>

<style scoped>

</style>
