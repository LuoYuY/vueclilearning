<template>
<div>
  <h1>Please fill out our form...</h1>
  <form>
    <div id="form-header">
      <slot name="form-header"></slot>
    </div>
    <div id="form=fields">
      <slot name="form-fields"></slot>
    </div>
    <div id="form-controls">
      <slot name="form-controls"></slot>
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
