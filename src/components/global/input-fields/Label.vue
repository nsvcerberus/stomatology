<template>
  <label>{{text}}:</label>
</template>


<script>
export default {
  props: {
    text: String
  }
}
</script>


<style>
label {
  font-size: 14px;
  margin-bottom: 8px !important;
}
</style>