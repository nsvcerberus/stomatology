import { reactive } from "vue";

export const emailStates = reactive({
  value: "",
  error: false
});

export const setValue = (value) => {
  emailStates.value = value;
  checkValidation(value);
}

const checkValidation = (value) => {
  let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  emailStates.error = (regex.test(value)) ? false : true;
}