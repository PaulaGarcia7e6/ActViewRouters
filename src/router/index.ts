import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '@/views/Home.vue'
import AboutVue from '@/views/About.vue'
import ContactVue from '@/views/Contact.vue'
import ProducteDetailVue from '@/views/ProducteDetail.vue'
import ResultatsVue from '@/views/Resultats.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeVue
    },
    {
      path: '/about',
      name: 'about',
      component: AboutVue
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactVue
    },
    {
      path: '/producte/:id/:nom',
      name: 'producte',
      component: ProducteDetailVue
    },
    {
      path: '/resultats',
      name: 'resultats',
      component: ResultatsVue
    }
  ]
})

export default router
