<script setup>
import { onMounted, onUnmounted } from 'vue'
import HeroSection from '../components/sections/HeroSection.vue'
import AboutSection from '../components/sections/AboutSection.vue'
import ToolStrip from '../components/sections/ToolStrip.vue'
import JoinSection from '../components/sections/JoinSection.vue'
import HistorySection from '../components/sections/HistorySection.vue'
import MembersSection from '../components/sections/MembersSection.vue'
import MadeSection from '../components/sections/MadeSection.vue'

let observer

onMounted(() => {
  const items = document.querySelectorAll('.reveal')
  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-in'))
    return
  }
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in')
          observer.unobserve(entry.target)
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
  )
  items.forEach((el) => observer.observe(el))
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <div>
    <HeroSection />
    <AboutSection />
    <ToolStrip />
    <JoinSection />
    <HistorySection />
    <MembersSection />
    <MadeSection />
  </div>
</template>
