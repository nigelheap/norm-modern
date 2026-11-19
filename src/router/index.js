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
    { path: '/about', redirect: '/' },
    {
      path: '/history',
      name: 'history',
      component: () => import('../views/HistoryView.vue'),
      meta: {
        title: 'History — NORM Warehouse',
        description:
          'Read how NORM grew from two friends sharing tools into an inclusive community workshop for local makers and artists.',
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
      path: '/members',
      name: 'members',
      component: () => import('../views/MembersView.vue'),
      meta: {
        title: 'Our members — NORM Warehouse',
        description:
          'Meet the makers, artists and designers who make up the NORM Warehouse community.',
      },
    },
    {
      path: '/join',
      name: 'join',
      component: () => import('../views/JoinView.vue'),
      meta: {
        title: 'Join NORM — Studios & workshop memberships',
        description:
          'Join NORM through a shared studio or workshop membership in Coburg North.',
      },
    },
    {
      path: '/get-something-made',
      name: 'get-something-made',
      component: () => import('../views/GetSomethingMadeView.vue'),
      meta: {
        title: 'Get something made — NORM Warehouse',
        description:
          'Tell NORM about your woodwork or metalwork project and connect with a skilled member.',
      },
    },
    { path: '/donate', redirect: '/' },
    { path: '/get-involved', redirect: '/' },
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
