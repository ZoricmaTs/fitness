import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProfileUser from '../views/ProfileUser.vue'
import ProfileTrainer from '../views/ProfileTrainer.vue'
import EmailConfirmation from '../views/EmailConfirmation.vue'
import Authorization from '../views/Authorization.vue'
import Register from '../views/Register.vue'
import TermsOfService from '../views/TermsOfService.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signin',
    name: 'signin',
    component: Authorization
  },
  {
    path: '/signup',
    name: 'signup',
    component: Register
  },
  {
    path: '/termsofservice',
    name: 'termsofservice',
    component: TermsOfService
  },
  {
    path: '/profileuser/:id',
    name: 'profileuser', //для роутеров
    component: ProfileUser,
    props: true
  },
  {
    path: '/profiletrainer/:id',
    name: 'profiletrainer',
    component: ProfileTrainer,
    props: true
  },
  {
    path: '/email_confirmation',
    name: 'email_confirmation', //для роутеров
    component: EmailConfirmation,
    props: route => ({ email: route.query.email, code: route.query.code })
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
