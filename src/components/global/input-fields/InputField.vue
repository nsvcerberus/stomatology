<template>
  <div class="input-field">
    <Label :text="label"/>
    <slot></slot>
  </div>
</template>


<script>
import Label from './Label.vue'
export default {
  props: {
    label: String
  },
  components: {
    Label
  }
}
</script>


<style>
.input-field {
  display: flex;
  flex-direction: column;
}
</style>