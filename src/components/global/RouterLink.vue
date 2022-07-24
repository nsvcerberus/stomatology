<template>
  <router-link class="navigation-tab" :to="path">{{text}}</router-link>
</template>


<script>
export default {
  props : {
    text : String,
    path: String
  }
}
</script>


<style scoped>
.navigation-tab {
  font-size: 22px;
  letter-spacing: 1px;
}
</style>