<template>
  <div>
    <section class="page-hero" aria-labelledby="about-page-title">
      <p class="eyebrow"><span></span> About NORM</p>
      <h1 id="about-page-title">More than a place to keep your tools.</h1>
      <p class="page-intro">
        A volunteer-run warehouse where makers, tinkerers and artists can complete projects,
        learn new skills and pass on knowledge.
      </p>
    </section>

    <section class="section about-section" aria-labelledby="about-title">
      <div class="section-label">A place to make together</div>
      <div class="about-heading">
        <h2 id="about-title">Hands-on, inclusive and built around sharing.</h2>
      </div>
      <div class="about-copy copy-grid">
        <p>
          We aim to help makers, tinkerers and artists complete projects, learn new skills and pass
          on knowledge. NORM is an inclusive, hands-on, peer-to-peer learning environment that
          supports safe and comfortable use of woodwork and metalwork tools and equipment.
        </p>
        <p>
          We are a non-profit, volunteer-run organisation working to make workshop space and
          equipment financially accessible. It’s a place for bigger projects, short-term storage,
          workshops, events and spontaneous collaboration.
        </p>
      </div>
    </section>

    <section class="warehouse-layout" aria-labelledby="inside-title">
      <div class="warehouse-copy">
        <p class="eyebrow eyebrow-light"><span></span> Inside the warehouse</p>
        <h2 id="inside-title">Shared up front. Down and dirty out back.</h2>
      </div>
      <div class="warehouse-detail">
        <p>
          The front half has a communal lounge and kitchen, 13 lockable studios and a whole heap of
          shared space. In the back you’ll find a big workshop for creative projects and tinkering,
          with dedicated short-term storage for larger builds.
        </p>
        <RouterLink class="button button-orange" to="/workshop">
          See the workshop <span aria-hidden="true">↗</span>
        </RouterLink>
      </div>
    </section>

    <section class="share-section" aria-labelledby="share-title">
      <div class="share-stat" aria-label="A cordless drill is used for only six to thirteen minutes in its life">
        <span class="stat-number">6–13</span>
        <span class="stat-unit">minutes</span>
      </div>
      <div class="share-copy">
        <p class="eyebrow eyebrow-light"><span></span> Why share?</p>
        <h2 id="share-title">You want the hole, not the drill.</h2>
        <p>
          That’s how little an average cordless drill may be used before it reaches landfill.
          Sharing maximises the idle capacity of useful things, keeps equipment in circulation and
          makes better tools accessible to more people.
        </p>
        <blockquote>“Access is superior to ownership.” <cite>— Kevin Kelly</cite></blockquote>
      </div>
    </section>
  </div>
</template>
