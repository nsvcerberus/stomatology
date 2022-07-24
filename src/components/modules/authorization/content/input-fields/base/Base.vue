<script>
import { inputFieldsData } from '@/data/authorization'
import InputField from '@/components/global/input-fields/InputField.vue'

export default {
  props: {
    errorIsActive: {
      type: Boolean,
      default: false
    }
  },
  components: {
    InputField
  },
  setup() {
    return {
      inputFieldsData
    }
  }
}
</script>


<style lang="scss">
.input-field {
  margin-top: 28px;
}

.error-input {
  border-color: $color-error;
}
</style>