import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        title: 'NORM — Community workshop & studios',
        description:
          'NORM is a volunteer-run community workshop, studio and shared creative space in Coburg North, Melbourne.',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: 'About NORM — Community workshop & studios',
        description:
          'Meet NORM, an inclusive, volunteer-run creative warehouse for making, learning and sharing in Coburg North.',
      },
    },
    {
      path: '/workshop',
      name: 'workshop',
      component: () => import('../views/WorkshopView.vue'),
      meta: {
        title: 'Workshop access — NORM',
        description:
          'Explore NORM’s community woodwork and metalwork equipment, memberships, classes and safety inductions.',
      },
    },
    {
      path: '/studios',
      name: 'studios',
      component: () => import('../views/StudiosView.vue'),
      meta: {
        title: 'Studios — NORM',
        description:
          'Flexible creative studios with 24-hour access, workshop use and shared facilities in Coburg North.',
      },
    },
    {
      path: '/get-involved',
      name: 'get-involved',
      component: () => import('../views/GetInvolvedView.vue'),
      meta: {
        title: 'Get involved — NORM',
        description:
          'Donate useful tools, equipment and materials to NORM’s volunteer-run community of makers.',
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: {
        title: 'Contact NORM — Coburg North',
        description:
          'Contact or visit NORM at 14 Lewis Street, Coburg North, Melbourne.',
      },
    },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

router.afterEach((to) => {
  document.title = to.meta.title ?? 'NORM — Community workshop & studios'

  const description = document.querySelector('meta[name="description"]')
  if (description && to.meta.description) {
    description.setAttribute('content', to.meta.description)
  }
})

export default router
