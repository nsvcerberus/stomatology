<template>
  <InputField :label="inputFieldsData.email.label">
    <InputEmail :class="{'error-input':errorIsActive}" @focus="focus" @blur="blur"/>
    <ErrorMessage :message="inputFieldsData.email.errorMessage" :errorIsActive="errorIsActive"/>
  </InputField>
</template>


<script>
import { emailStates, setValue } from './composition'
import Base from '../base/Base.vue'
import InputEmail from '@/components/global/input-fields/input/variants/text/variants/InputEmail.vue'
import ErrorMessage from '@/components/global/input-fields/ErrorMessage.vue'

export default {
  extends: Base,
  components: {
    InputEmail,
    ErrorMessage
  },
  setup() {
    const focus = () => {
      // сбрасывать ошибку!
    }

    const blur = (e) => {
      setValue(e.target.value);
    }

    return {
      ...Base.setup(),
      emailStates,
      setValue,
      focus,
      blur
    }
  }
}
</script>