<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { siFacebook, siInstagram } from 'simple-icons'
import BrandIcon from './components/BrandIcon.vue'

const menuOpen = ref(false)
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

onMounted(() => window.addEventListener('keydown', handleEscape))
onUnmounted(() => {
  window.removeEventListener('keydown', handleEscape)
  document.body.classList.remove('menu-is-open')
})
</script>

<template>
  <div class="site-shell">
    <header class="site-header" :class="{ 'menu-active': menuOpen }">
      <RouterLink class="brand" to="/" aria-label="NORM home" @click="closeMenu">
        <img src="/norm-logo.png" alt="NORM" />
      </RouterLink>

      <nav class="desktop-nav" aria-label="Primary navigation">
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/workshop">Workshop</RouterLink>
        <RouterLink to="/studios">Studios</RouterLink>
        <RouterLink to="/donate">Donate</RouterLink>
      </nav>

      <div class="header-actions">
        <a
          class="header-social-icon"
          href="https://www.instagram.com/normworkshop"
          target="_blank"
          rel="noopener"
          aria-label="NORM on Instagram"
        ><BrandIcon :path="siInstagram.path" /></a>
        <a
          class="header-social-icon"
          href="https://www.facebook.com/meetnorm"
          target="_blank"
          rel="noopener"
          aria-label="NORM on Facebook"
        ><BrandIcon :path="siFacebook.path" /></a>
        <RouterLink class="header-cta" to="/contact">
          Contact <span class="line-arrow" aria-hidden="true"></span>
        </RouterLink>
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
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/workshop">Workshop</RouterLink>
        <RouterLink to="/studios">Studios</RouterLink>
        <RouterLink to="/donate">Donate</RouterLink>
        <div class="mobile-contact-group">
          <RouterLink class="mobile-contact-link" to="/contact">Contact</RouterLink>
          <div class="mobile-social-row">
            <a
              class="mobile-social-icon"
              href="https://www.instagram.com/normworkshop"
              target="_blank"
              rel="noopener"
              aria-label="NORM on Instagram"
            >
              <BrandIcon :path="siInstagram.path" />
            </a>
            <a
              class="mobile-social-icon"
              href="https://www.facebook.com/meetnorm"
              target="_blank"
              rel="noopener"
              aria-label="NORM on Facebook"
            >
              <BrandIcon :path="siFacebook.path" />
            </a>
          </div>
        </div>
        <a class="mobile-email" href="mailto:info@normwarehouse.com.au">
          info@normwarehouse.com.au
        </a>
      </nav>
    </Transition>

    <main id="page-top">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" :key="route.fullPath" />
        </Transition>
      </RouterView>
    </main>

    <footer class="site-footer">
      <RouterLink class="footer-logo" to="/" aria-label="NORM home">
        <img src="/norm-logo.png" alt="NORM" />
      </RouterLink>
      <p>Non-profit · Volunteer run · Melbourne made</p>
      <div class="footer-actions">
        <RouterLink to="/contact">
          Drop us a email <span class="line-arrow" aria-hidden="true"></span>
        </RouterLink>
        <a href="https://www.instagram.com/normworkshop" target="_blank" rel="noopener">
          Instagram <span class="line-arrow" aria-hidden="true"></span>
        </a>
        <a href="https://www.facebook.com/meetnorm" target="_blank" rel="noopener">
          Facebook <span class="line-arrow" aria-hidden="true"></span>
        </a>
      </div>
    </footer>
  </div>
</template>
