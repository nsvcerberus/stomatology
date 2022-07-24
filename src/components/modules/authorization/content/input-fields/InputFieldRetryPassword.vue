<template>
  <InputField :label="inputFieldsData.retryPassword.label">
    <InputPassword :class="{'error-input':errorIsActive}"/>
    <ErrorMessage :message="inputFieldsData.retryPassword.errorMessage" :errorIsActive="errorIsActive"/>
  </InputField>
</template>


<script>
import Base from './base/Base.vue'
import InputPassword from '@/components/global/input-fields/input/variants/text/variants/InputPassword.vue'
import ErrorMessage from '@/components/global/input-fields/ErrorMessage.vue'

export default {
  extends: Base,
  components: {
    InputPassword,
    ErrorMessage
  },
  setup() {
    return {
      ...Base.setup()
    }
  }
}
</script>