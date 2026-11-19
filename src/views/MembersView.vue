<script setup>
const members = []

const specialties = [
  'Woodwork',
  'Metalwork',
  'Furniture making',
  'Fabrication',
  'Object design',
  'Sculpture',
]
</script>

<template>
  <div>
    <section
      class="page-hero page-hero-banner page-hero-members"
      aria-labelledby="members-page-title"
    >
      <div class="page-hero-content">
        <h1 id="members-page-title">Our members</h1>
        <p class="page-intro">The makers, artists and designers who bring NORM to life.</p>
      </div>
    </section>

    <section class="section members-section" aria-labelledby="members-directory-title">
      <div class="section-label">Member directory</div>
      <div class="members-heading">
        <h2 id="members-directory-title">People who know how to make things.</h2>
        <p>
          This directory is ready for member profiles and specialties. We’ll add people here as
          their details are confirmed.
        </p>
      </div>

      <div v-if="members.length" class="member-grid text-grid">
        <article v-for="member in members" :key="member.name" class="member-card text-cell">
          <div class="member-card-image">
            <img :src="member.image" :alt="member.name" loading="lazy" />
          </div>
          <p class="panel-kicker">{{ member.specialties.join(' · ') }}</p>
          <h3>{{ member.name }}</h3>
          <p>{{ member.bio }}</p>
          <a v-if="member.url" :href="member.url" target="_blank" rel="noopener">
            View their work <span class="line-arrow" aria-hidden="true"></span>
          </a>
        </article>
      </div>

      <div v-else class="members-empty text-grid">
        <div class="text-cell">
          <p class="panel-kicker">Profiles coming soon</p>
          <h3>The directory is being assembled.</h3>
          <p>
            Member names, profiles and links can be added here as soon as they’re ready for the
            site.
          </p>
        </div>
        <ul class="specialties-grid" aria-label="Member specialties">
          <li v-for="specialty in specialties" :key="specialty">{{ specialty }}</li>
        </ul>
      </div>
    </section>

    <section class="page-cta" aria-labelledby="members-cta-title">
      <div>
        <h2 id="members-cta-title">Find someone with the right skills.</h2>
      </div>
      <RouterLink class="button button-dark" to="/get-something-made">
        Get something made <span class="line-arrow" aria-hidden="true"></span>
      </RouterLink>
    </section>
  </div>
</template>
