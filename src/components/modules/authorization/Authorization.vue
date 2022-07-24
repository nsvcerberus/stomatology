<template>
  <div class="authorization">
    <Navigation/>
    <Content/>
  </div>
</template>


<script>
import Navigation from '@/components/modules/authorization/navigation/Navigation.vue'
import Content from '@/components/modules/authorization/content/Content.vue'

export default {
  components: {
    Navigation,
    Content
  }
}
</script>


<style scoped>
.authorization {
  display: flex;
  width: 100%;
  max-width: 500px;
  position: relative;
  margin: 100px auto 0;
  flex-direction: column;
}
</style>