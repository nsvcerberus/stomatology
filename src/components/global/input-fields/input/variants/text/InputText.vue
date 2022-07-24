<template>
  <Input :type="type"/>
</template>


<script>
import Input from "../../Input.vue"

export default {
  props: {
    type: {
      type: String,
      default: `text`
    }
  },
  components : {
    Input
  }
}
</script>