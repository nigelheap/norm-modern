<script setup>
const mailto = `mailto:info@normwarehouse.com.au?subject=${encodeURIComponent('Get something made')}&body=${encodeURIComponent('Tell us what you need made:\n\n')}`
</script>

<template>
  <section id="made" class="section on-paper2" aria-labelledby="made-title">
    <div class="row reveal">
      <div class="row-label"><p class="label">05 — Commissions</p></div>
      <div class="row-body">
        <div class="made">
          <div>
            <h2 id="made-title" class="display">Get something made</h2>
            <div class="prose">
              <p class="lead">Need something made?</p>
              <p>
                Norm is full of talented individuals with expertise in woodwork and metalwork. Tell
                us what you need done and we will put you in touch with one of our members.
              </p>
            </div>
            <a class="pill pill-lg" :href="mailto">
              Tell us what you need <span class="arrow" aria-hidden="true"></span>
            </a>
          </div>
          <figure class="figure">
            <img
              src="/hero-contact.webp"
              alt="A member working at a workbench in the Norm workshop"
              loading="lazy"
            />
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>
