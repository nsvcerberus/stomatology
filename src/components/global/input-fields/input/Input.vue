<template>
  <input :type="type">
</template>


<script>
export default {
  props: {
    type: String
  }
}
</script>


<style lang="scss">
input {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  border: 1px solid #dbd6d3;
  border-radius: $border-radius;
  padding: 13px 10px;
}
</style>