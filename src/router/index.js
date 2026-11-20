import { createRouter, createWebHistory } from 'vue-router'

const TITLE = 'Norm Warehouse — Creative studios and communal workshop'
const DESCRIPTION =
  'Norm Warehouse is a non-profit, volunteer-run community workshop and studios in Coburg North, Melbourne, giving emerging makers access to wood and metal machinery.'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, saved) {
    if (saved) return saved
    if (to.hash) return { el: to.hash, top: 72, behavior: 'smooth' }
    return { top: 0 }
  },
  routes: [
    { path: '/', name: 'home', component: () => import('../views/HomeView.vue') },

    // Old multi-page routes now point at sections of the single page.
    { path: '/about', redirect: { path: '/', hash: '#about' } },
    { path: '/workshop', redirect: { path: '/', hash: '#about' } },
    { path: '/studios', redirect: { path: '/', hash: '#join' } },
    { path: '/join', redirect: { path: '/', hash: '#join' } },
    { path: '/history', redirect: { path: '/', hash: '#history' } },
    { path: '/members', redirect: { path: '/', hash: '#members' } },
    { path: '/get-something-made', redirect: { path: '/', hash: '#made' } },
    { path: '/contact', redirect: { path: '/', hash: '#contact' } },
    { path: '/donate', redirect: '/' },
    { path: '/get-involved', redirect: '/' },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

router.afterEach(() => {
  document.title = TITLE
  const description = document.querySelector('meta[name="description"]')
  if (description) description.setAttribute('content', DESCRIPTION)
})

export default router
