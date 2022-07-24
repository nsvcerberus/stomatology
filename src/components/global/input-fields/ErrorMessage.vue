<template>
  <div :class="[{'active':errorIsActive}, 'error']">{{message}}</div>
</template>


<script>
export default {
  props: {
    message: String,
    errorIsActive: {
      type: Boolean,
      default: false
    }
  }
}
</script>


<style scoped lang="scss">
.error {
  display: none;
  color: $color-error;
}
</style>