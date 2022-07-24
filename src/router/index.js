import { createRouter, createWebHistory } from 'vue-router'
import { navigationData } from '@/data/navigation'
import Login from '@/components/modules/authorization/content/views/Login.vue'
import SignUp from '@/components/modules/authorization/content/views/SignUp.vue'


const routes = [
  {
    name: navigationData.login.name,
    path: navigationData.login.path,
    component: Login
  },
  {
    name: navigationData.signUp.name,
    path: navigationData.signUp.path,
    component: SignUp
  }
]


const router = createRouter({
  history: createWebHistory(),
  navigationData,
  routes
})


export default router