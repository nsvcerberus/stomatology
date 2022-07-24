<template>
  <InputField :label="inputFieldsData.lastName.label">
    <InputText :class="{'error-input':errorIsActive}"/>
    <ErrorMessage :message="inputFieldsData.lastName.errorMessage" :errorIsActive="errorIsActive"/>
  </InputField>
</template>


<script>
import Base from './base/Base.vue'
import InputText from '@/components/global/input-fields/input/variants/text/InputText.vue'
import ErrorMessage from '@/components/global/input-fields/ErrorMessage.vue'

export default {
  extends: Base,
  components: {
    InputText,
    ErrorMessage
  },
  setup() {
    return {
      ...Base.setup()
    }
  }
}
</script>