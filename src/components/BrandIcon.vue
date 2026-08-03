<script setup>
defineProps({
  path: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <svg class="brand-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path :d="path" fill="currentColor" />
  </svg>
</template>
