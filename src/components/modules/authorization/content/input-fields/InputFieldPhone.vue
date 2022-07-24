<template>
  <InputField :label="inputFieldsData.phone.label">
    <InputTel :class="{'error-input':errorIsActive}"/>
    <ErrorMessage :message="inputFieldsData.phone.errorMessage" :errorIsActive="errorIsActive"/>
  </InputField>
</template>


<script>
import Base from './base/Base.vue'
import InputTel from '@/components/global/input-fields/input/variants/text/variants/InputTel.vue'
import ErrorMessage from '@/components/global/input-fields/ErrorMessage.vue'

export default {
  extends: Base,
  components: {
    InputTel,
    ErrorMessage
  },
  setup() {
    return {
      ...Base.setup()
    }
  }
}
</script>