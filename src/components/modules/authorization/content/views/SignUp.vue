<template>
  <div class="form">
    <InputFieldFirstName/>
    <InputFieldLastName/>
    <InputFieldLogin/>
    <InputFieldEmail/>
    <InputFieldPhone/>
    <InputFieldPassword/>
    <InputFieldRetryPassword/>
    <div class="button-field">
      <Button :text="buttonsData.signUp.name"/>
    </div>
  </div>
</template>


<script>
import Base from './base/Base.vue'
import InputFieldFirstName from '@/components/modules/authorization/content/input-fields/InputFieldFirstName.vue'
import InputFieldLastName from '@/components/modules/authorization/content/input-fields/InputFieldLastName.vue'
import InputFieldLogin from '@/components/modules/authorization/content/input-fields/InputFieldLogin.vue'
import InputFieldEmail from '@/components/modules/authorization/content/input-fields/email/InputFieldEmail.vue'
import InputFieldPhone from '@/components/modules/authorization/content/input-fields/InputFieldPhone.vue'
import InputFieldPassword from '@/components/modules/authorization/content/input-fields/InputFieldPassword.vue'
import InputFieldRetryPassword from '@/components/modules/authorization/content/input-fields/InputFieldRetryPassword.vue'
import Button from '@/components/global/Button.vue'

export default {
  extends: Base,
  components: {
    InputFieldFirstName,
    InputFieldLastName,
    InputFieldLogin,
    InputFieldEmail,
    InputFieldPhone,
    InputFieldPassword,
    InputFieldRetryPassword,
    Button
  },
  setup() {
    return{
      ...Base.setup()
    }
  }
}
</script>