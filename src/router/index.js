import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import ImplementationsView from '../views/ImplementationsView.vue'
import JobsView from '../views/JobsView.vue'
import ServiceView from '../views/ServiceView.vue'
import ServicesView from '../views/ServicesView.vue'
import SoftwareView from '../views/SoftwareView.vue'
import SolutionsView from '../views/SolutionsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  base: '/demo/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/implementations',
      name: 'implementations',
      component: ImplementationsView
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView
    },
    {
      path: '/service',
      name: 'service',
      component: ServiceView
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView
    },
    {
      path: '/software',
      name: 'software',
      component: SoftwareView
    },
    {
      path: '/solutions',
      name: 'solutions',
      component: SolutionsView
    },
    {
      path: '/privacy-policy',
      name: 'privacyPolicy',
      component: () => import('../views/PrivacyPolicyView.vue')
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
  scrollBehavior() {
    // always scroll to top
    return {
      top: 0,
      // behavior: 'smooth'
    }
  },

})

export default router
