import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home.vue"
import Administrator from "../views/Administrator.vue"
import Participant from "../views/Participants.vue"


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'Administrator',
    component: Administrator
  },
  {
    path: '/participant',
    name: 'Participant',
    component: Participant
  },
]

const router = new VueRouter({
  routes
})

export default router