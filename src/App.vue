<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { siFacebook, siInstagram } from 'simple-icons'
import BrandIcon from './components/BrandIcon.vue'

const EMAIL = 'info@normwarehouse.com.au'
const INSTAGRAM = 'https://www.instagram.com/normworkshop'
const FACEBOOK = 'https://www.facebook.com/meetnorm'

const links = [
  { id: 'about', label: 'About' },
  { id: 'join', label: 'Join' },
  { id: 'history', label: 'History' },
  { id: 'members', label: 'Members' },
  { id: 'made', label: 'Get something made' },
]

const menuOpen = ref(false)
const active = ref('')
const route = useRoute()

const closeMenu = () => {
  menuOpen.value = false
}

const handleEscape = (event) => {
  if (event.key === 'Escape') closeMenu()
}

watch(menuOpen, (isOpen) => {
  document.body.classList.toggle('menu-is-open', isOpen)
})

watch(() => route.fullPath, closeMenu)

let frame = 0
const updateActive = () => {
  frame = 0
  let current = ''
  for (const { id } of links) {
    const el = document.getElementById(id)
    if (el && el.getBoundingClientRect().top <= 140) current = id
  }
  active.value = current
}
const onScroll = () => {
  if (!frame) frame = requestAnimationFrame(updateActive)
}

onMounted(() => {
  window.addEventListener('keydown', handleEscape)
  window.addEventListener('scroll', onScroll, { passive: true })
  updateActive()
})
onUnmounted(() => {
  window.removeEventListener('keydown', handleEscape)
  window.removeEventListener('scroll', onScroll)
  document.body.classList.remove('menu-is-open')
})
</script>

<template>
  <div class="site-shell">
    <a class="skip-link" href="#main">Skip to content</a>

    <header class="site-header" :class="{ 'menu-active': menuOpen }">
      <RouterLink class="brand" :to="{ path: '/', hash: '' }" aria-label="NORM home" @click="closeMenu">
        <img src="/norm-logo.png" alt="NORM" width="1200" height="685" />
      </RouterLink>

      <nav class="desktop-nav" aria-label="Primary navigation">
        <RouterLink
          v-for="link in links"
          :key="link.id"
          :to="{ path: '/', hash: '#' + link.id }"
          :class="{ 'is-active': active === link.id }"
        >{{ link.label }}</RouterLink>
      </nav>

      <div class="header-actions">
        <a class="social-icon" :href="INSTAGRAM" target="_blank" rel="noopener" aria-label="NORM on Instagram">
          <BrandIcon :path="siInstagram.path" />
        </a>
        <a class="social-icon" :href="FACEBOOK" target="_blank" rel="noopener" aria-label="NORM on Facebook">
          <BrandIcon :path="siFacebook.path" />
        </a>
        <a class="pill" :href="`mailto:${EMAIL}`">Enquire</a>
      </div>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="mobile-menu"
        :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
        @click="menuOpen = !menuOpen"
      >
        <span></span>
        <span></span>
      </button>
    </header>

    <Transition name="menu">
      <nav v-if="menuOpen" id="mobile-menu" class="mobile-nav" aria-label="Mobile navigation">
        <RouterLink
          v-for="link in links"
          :key="link.id"
          :to="{ path: '/', hash: '#' + link.id }"
          @click="closeMenu"
        >{{ link.label }}</RouterLink>
        <a class="pill pill-accent" :href="`mailto:${EMAIL}`">Enquire</a>
        <a class="mobile-email" :href="`mailto:${EMAIL}`">{{ EMAIL }}</a>
        <div class="mobile-social-row">
          <a class="social-icon" :href="INSTAGRAM" target="_blank" rel="noopener" aria-label="NORM on Instagram">
            <BrandIcon :path="siInstagram.path" />
          </a>
          <a class="social-icon" :href="FACEBOOK" target="_blank" rel="noopener" aria-label="NORM on Facebook">
            <BrandIcon :path="siFacebook.path" />
          </a>
        </div>
      </nav>
    </Transition>

    <main id="main">
      <RouterView />
    </main>

    <footer id="contact" class="site-footer">
      <div class="footer-grid">
        <RouterLink class="footer-logo" :to="{ path: '/', hash: '' }" aria-label="NORM home">
          <img src="/norm-logo.png" alt="NORM" width="1200" height="685" loading="lazy" />
        </RouterLink>
        <div class="footer-contact">
          <div>
            <p class="mini-head">Email</p>
            <a :href="`mailto:${EMAIL}`">{{ EMAIL }}</a>
          </div>
          <div>
            <p class="mini-head">Find us</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=14+Lewis+Street+Coburg+North+VIC+3058"
              target="_blank"
              rel="noopener"
            >
              <address>14 Lewis Street<br />Coburg North, VIC 3058</address>
            </a>
          </div>
          <div>
            <p class="mini-head">Follow</p>
            <a :href="INSTAGRAM" target="_blank" rel="noopener">Instagram</a>
            <a :href="FACEBOOK" target="_blank" rel="noopener">Facebook</a>
          </div>
        </div>
      </div>
      <p class="footer-ack">
        Norm Warehouse acknowledges the Wurundjeri Woi-wurrung people of the Kulin Nation as the
        Traditional custodians of the land on which our workshop is located and on which our
        members create. We pay respect to their Elders past, present, and emerging, as well as to
        all First Nations’ communities who significantly contribute to the life of the area.
      </p>
      <p class="footer-tagline">Non-profit · Volunteer run · Melbourne made</p>
    </footer>
  </div>
</template>
