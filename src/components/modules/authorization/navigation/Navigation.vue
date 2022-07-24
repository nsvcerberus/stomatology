<template>
  <nav>
    <RouterLink class="login" :path="navigationData.login.path" :text="navigationData.login.name"/>
    <RouterLink class="sign-up" :path="navigationData.signUp.path" :text="navigationData.signUp.name"/>
  </nav>
</template>


<script>
import { navigationData } from '@/data/navigation.js'
import RouterLink from '@/components/global/RouterLink.vue'

export default {
  components: {
    RouterLink
  },
  setup() {
    return {
      navigationData
    }
  }
}
</script>


<style scoped lang="scss">
nav {
  display: flex;
  width: 100%;
}

nav a {
  display: flex;
  flex: 3;
  height: 50px;
  color: rgb(172, 172, 172);
  align-items: center;
}

nav a.router-link-exact-active {
  color: $blue;
}

.sign-up {
  justify-content: right;
}
</style>