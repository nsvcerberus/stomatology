<template>
  <button>{{text}}</button>
</template>


<script>
export default {
  props : {
    text : String
  }
}
</script>


<style lang="scss">
button {
  min-width: 280px;
  font-size: 18px;
  color: #fff;
  letter-spacing: 1px;
  background-color: $blue;
  padding: 13px 10px;
  margin-top: 40px;
  border: 0;
  border-radius: $border-radius;
  cursor: pointer;
}

button:hover {
  background-color: #3190e1;
}
</style>