<template>
  <div class="form">
    <InputFieldLogin/>
    <InputFieldPassword/>
    <div class="button-field">
      <Button :text="buttonsData.login.name"/>
    </div>
  </div>
</template>


<script>
import Base from './base/Base.vue'
import InputFieldLogin from '@/components/modules/authorization/content/input-fields/InputFieldLogin.vue'
import InputFieldPassword from '@/components/modules/authorization/content/input-fields/InputFieldPassword.vue'
import Button from '@/components/global/Button.vue'

export default {
  extends: Base,
  components: {
    InputFieldLogin,
    InputFieldPassword,
    Button
  },
  setup() {
    return{
      ...Base.setup()
    }
  }
}
</script>