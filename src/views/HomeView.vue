<template>
  <div>
    <section class="hero hero-banner hero-home" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow"><span></span> Community workshop · Coburg North</p>
        <h1 id="hero-title">Make space for what you want to make.</h1>
        <p class="hero-intro">
          NORM is a warehouse full of workshop, studio and shared creative space for makers,
          tinkerers and artists.
        </p>
        <div class="hero-actions">
          <RouterLink class="button button-dark" to="/workshop">
            Explore the workshop <span class="line-arrow" aria-hidden="true"></span>
          </RouterLink>
          <RouterLink class="text-link" to="/contact">
            Come say hello <span class="line-arrow" aria-hidden="true"></span>
          </RouterLink>
        </div>
      </div>

      <div class="hero-visual">
        <aside class="hero-panel" aria-label="NORM at a glance">
          <p class="panel-kicker">What’s inside</p>
          <ul>
            <li><span>Workshop</span><strong>Wood + metal</strong></li>
            <li><span>Studios</span><strong>13 lockable spaces</strong></li>
            <li><span>Access</span><strong>24 hours</strong></li>
          </ul>
          <p class="panel-note">Non-profit. Volunteer run. Built to be shared.</p>
        </aside>
      </div>
    </section>

    <section class="section home-intro" aria-labelledby="home-intro-title">
      <div class="section-label">NORM / Coburg North</div>
      <div class="home-intro-grid">
        <h2 id="home-intro-title">A practical place for ambitious ideas.</h2>
        <div>
          <p>
            Build the thing you can’t fit at home. Learn from people who know their way around the
            tools. Work independently, collaborate freely and become part of a generous creative
            community.
          </p>
          <RouterLink class="text-link" to="/about">
            More about NORM <span class="line-arrow" aria-hidden="true"></span>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="route-section" aria-labelledby="explore-title">
      <p id="explore-title" class="section-label">Explore the warehouse</p>
      <div class="route-cards">
        <RouterLink class="route-card" to="/workshop">
          <div>
            <h2>Workshop</h2>
            <p>Woodwork, metalwork, bench space and a diverse community of practical skills.</p>
          </div>
          <i class="line-arrow" aria-hidden="true"></i>
        </RouterLink>
        <RouterLink class="route-card" to="/studios">
          <div>
            <h2>Studios</h2>
            <p>Lockable and shared spaces with workshop access, utilities and room to grow.</p>
          </div>
          <i class="line-arrow" aria-hidden="true"></i>
        </RouterLink>
        <RouterLink class="route-card" to="/donate">
          <div>
            <h2>Donate</h2>
            <p>Give useful tools and materials a new life in the hands of local makers.</p>
          </div>
          <i class="line-arrow" aria-hidden="true"></i>
        </RouterLink>
      </div>
    </section>

    <section class="home-closing" aria-labelledby="home-closing-title">
      <p class="eyebrow eyebrow-light"><span></span> Shared tools · Shared knowledge</p>
      <h2 id="home-closing-title">Access is superior to ownership.</h2>
      <RouterLink class="button button-orange" to="/about">
        Why we share <span class="line-arrow" aria-hidden="true"></span>
      </RouterLink>
    </section>
  </div>
</template>
