<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const project = ref('')
const materials = ref('')
const timingBudget = ref('')

const openProjectEmail = () => {
  const subject = name.value ? `Project inquiry from ${name.value}` : 'Project inquiry'
  const body = [
    `Name: ${name.value}`,
    `Email: ${email.value}`,
    '',
    'What I need made:',
    project.value,
    '',
    'Materials or skills involved:',
    materials.value || 'Not specified',
    '',
    'Timing and budget:',
    timingBudget.value || 'Not specified',
  ].join('\n')

  window.location.href = `mailto:info@normwarehouse.com.au?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
</script>

<template>
  <div>
    <section
      class="page-hero page-hero-banner page-hero-made"
      aria-labelledby="made-page-title"
    >
      <div class="page-hero-content">
        <p class="eyebrow"><span></span> Work with a member</p>
        <h1 id="made-page-title">Get something made</h1>
        <p class="page-intro">Find the right person for your project.</p>
      </div>
    </section>

    <section class="section made-section" aria-labelledby="made-inquiry-title">
      <div class="made-copy">
        <p class="eyebrow"><span></span> Tell us about it</p>
        <h2 id="made-inquiry-title">What do you need made?</h2>
        <p>
          Need something made? Norm is full of talented individuals with expertise in woodwork and
          metalwork. Tell us what you need done and we will put you in touch with one of our
          members.
        </p>
        <RouterLink class="text-link" to="/members">
          Meet our members <span class="line-arrow" aria-hidden="true"></span>
        </RouterLink>
      </div>

      <form class="join-form project-form" @submit.prevent="openProjectEmail">
        <label>
          <span>Name</span>
          <input v-model.trim="name" name="name" type="text" autocomplete="name" required />
        </label>
        <label>
          <span>Email</span>
          <input v-model.trim="email" name="email" type="email" autocomplete="email" required />
        </label>
        <label>
          <span>What do you need made?</span>
          <textarea
            v-model.trim="project"
            name="project"
            rows="7"
            placeholder="Tell us about the object, job or idea"
            required
          ></textarea>
        </label>
        <label>
          <span>Materials or skills involved</span>
          <input
            v-model.trim="materials"
            name="materials"
            type="text"
            placeholder="For example: timber, steel or fabrication"
          />
        </label>
        <label>
          <span>Timing and budget</span>
          <input
            v-model.trim="timingBudget"
            name="timing-budget"
            type="text"
            placeholder="If known"
          />
        </label>
        <button class="button button-dark" type="submit">
          Open project email <span class="line-arrow" aria-hidden="true"></span>
        </button>
        <p class="join-form-note">
          This opens your email app so you can review your message before sending.
        </p>
      </form>
    </section>
  </div>
</template>
