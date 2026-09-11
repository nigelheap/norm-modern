<script setup>
const memberships = [
  {
    name: 'Workshop only',
    price: '$250',
    unit: '/ month',
    detail: 'Internet and 24-hour workshop access.',
  },
  {
    name: 'Shared studio',
    price: '$360',
    unit: '/ month',
    detail: 'Shared studio space, internet and 24-hour workshop access.',
  },
  {
    name: 'Large studio',
    price: '$660',
    unit: '/ month',
    detail: 'Lockable studio space, internet and 24-hour workshop access.',
  },
]
</script>

<template>
  <div>
    <section class="page-hero page-hero-banner page-hero-studios" aria-labelledby="studios-page-title">
      <p class="eyebrow"><span></span> Studios</p>
      <h1 id="studios-page-title">Your kitchen table deserves a break.</h1>
      <p class="page-intro">
        Studios from 13–24m² for furniture makers, designers, visual artists, engineers, animators,
        sculptors and creatives of every description.
      </p>
    </section>

    <section class="section studios-section" aria-labelledby="studio-life-title">
      <div class="section-label">Space to get busy</div>
      <div class="section-heading-row">
        <h2 id="studio-life-title">A studio of your own. A warehouse to share.</h2>
        <p>
          Meet clients, collaborate with other studio holders or get your head down in your own
          lockable space. Studio holders have complete access to the workshop.
        </p>
      </div>

      <div class="studio-features">
        <div><strong>24/7</strong><span>Building access</span></div>
        <div><strong>Included</strong><span>Workshop + utilities</span></div>
        <div><strong>Always</strong><span>Wi-Fi, tea + coffee</span></div>
      </div>

      <div class="floorplan-block">
        <div class="floorplan-copy">
          <p class="panel-kicker">Room to work</p>
          <h3>Studios, shared space and a 131m² workshop.</h3>
          <p>
            NORM is non-smoking. There are some limitations around ventilation and noisy work for
            the comfort of other users, but we’re happy to discuss what your practice needs.
          </p>
        </div>
        <a class="floorplan-image" href="/norm-floorplan.webp" target="_blank" rel="noopener">
          <img
            src="/norm-floorplan.webp"
            alt="Ground and mezzanine floor plans of the NORM warehouse"
            loading="lazy"
          />
          <span>Open floor plan <i class="line-arrow" aria-hidden="true"></i></span>
        </a>
      </div>

      <div class="membership-list" aria-label="Membership options">
        <article v-for="membership in memberships" :key="membership.name" class="membership-row">
          <h3>{{ membership.name }}</h3>
          <p>{{ membership.detail }}</p>
          <div class="price">
            <span>From</span><strong>{{ membership.price }}</strong> {{ membership.unit }}
          </div>
        </article>
      </div>

      <p class="studio-note">
        Workshop-only memberships require a three-month minimum commitment. All utilities are
        covered, including high-speed Wi-Fi and the occasional baked good.
      </p>
    </section>

    <section class="page-cta" aria-labelledby="studio-cta-title">
      <div>
        <p class="eyebrow"><span></span> Find your space</p>
        <h2 id="studio-cta-title">Tell us what you need from a studio.</h2>
      </div>
      <a class="button button-dark" href="mailto:info@normwarehouse.com.au?subject=Studio%20enquiry">
        Ask about studios <span class="line-arrow" aria-hidden="true"></span>
      </a>
    </section>
  </div>
</template>
