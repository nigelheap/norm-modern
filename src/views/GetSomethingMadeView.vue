<template>
  <div>
    <section
      class="page-hero page-hero-banner page-hero-made"
      aria-labelledby="made-page-title"
    >
      <div class="page-hero-content">
        <h1 id="made-page-title">Get something made</h1>
        <p class="page-intro">Find the right person for your project.</p>
      </div>
    </section>

    <section class="section made-section" aria-labelledby="made-inquiry-title">
      <div class="inquiry-grid text-grid">
        <div class="made-copy text-cell">
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

        <div class="text-cell">
          <h3>Send us an email</h3>
          <p>
            Email us with a description of your project. Include any photos, sketches, dimensions
            or timing you have in mind, and we’ll help connect you with a member.
          </p>
          <a class="text-link" href="mailto:info@normwarehouse.com.au?subject=Project%20inquiry">
            info@normwarehouse.com.au <span class="line-arrow" aria-hidden="true"></span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
