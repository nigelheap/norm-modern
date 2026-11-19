<template>
  <div>
    <section class="home-welcome" aria-labelledby="hero-title">
      <div class="welcome-copy">
        <p class="eyebrow"><span></span> Community workshop · Coburg North</p>
        <h1 id="hero-title">Norm Warehouse</h1>
        <p class="welcome-tagline">Creative studios and communal workshop</p>
        <p>
          Norm Warehouse makes access to industrial machinery and equipment possible for emerging
          and entry level makers, designers and artists.
        </p>
        <p>
          Our workshop is a gender inclusive and queer friendly learning environment that fosters
          safe use of woodwork and metalwork tools and equipment. We are a non-profit, volunteer
          run organisation that is independently funded through studios and memberships.
        </p>
        <div class="welcome-start">
          <h2>Get started</h2>
          <div class="welcome-links">
            <RouterLink class="button button-dark" to="/join">
              Join the community <span class="line-arrow" aria-hidden="true"></span>
            </RouterLink>
            <RouterLink class="text-link" to="/workshop">
              Explore the workshop <span class="line-arrow" aria-hidden="true"></span>
            </RouterLink>
          </div>
        </div>
      </div>

      <div class="welcome-visual">
        <img
          class="welcome-photo"
          src="/home-hero.webp"
          alt="Members making things at the shared NORM workshop benches"
          fetchpriority="high"
          decoding="async"
        />
        <dl class="welcome-facts" aria-label="NORM at a glance">
          <div><dt>Workshop</dt><dd>Wood + metal</dd></div>
          <div><dt>Studios</dt><dd>13 lockable spaces</dd></div>
          <div><dt>Access</dt><dd>24 hours</dd></div>
        </dl>
        <p class="welcome-photo-note">Non-profit. Volunteer run. Built to be shared.</p>
      </div>
    </section>

    <section class="home-catalogue" aria-labelledby="spaces-title">
      <div class="catalogue-heading">
        <h2 id="spaces-title">Space to make</h2>
        <p>A workshop, a studio, a place in the community.</p>
      </div>
      <div class="catalogue-grid catalogue-grid-three">
        <RouterLink class="photo-link" to="/workshop">
          <img src="/hero-workshop.webp" alt="Woodworking benches and machinery" loading="lazy" />
          <span>Communal workshop <i class="line-arrow" aria-hidden="true"></i></span>
        </RouterLink>
        <RouterLink class="photo-link" to="/studios">
          <img src="/hero-studios.webp" alt="A maker working in a NORM studio" loading="lazy" />
          <span>Creative studios <i class="line-arrow" aria-hidden="true"></i></span>
        </RouterLink>
        <RouterLink class="photo-link" to="/join">
          <img src="/workshop-images/DSCF0702.jpeg" alt="Communal lounge and kitchen at NORM" loading="lazy" />
          <span>Join the community <i class="line-arrow" aria-hidden="true"></i></span>
        </RouterLink>
      </div>
    </section>

    <section class="home-catalogue" aria-labelledby="makers-title">
      <div class="catalogue-heading">
        <h2 id="makers-title">People + projects</h2>
        <p>Good ideas meet practical skills.</p>
      </div>
      <div class="catalogue-grid catalogue-grid-two">
        <RouterLink class="photo-link" to="/members">
          <img src="/home-hero.webp" alt="Members at work in the warehouse" loading="lazy" />
          <span>Our members <i class="line-arrow" aria-hidden="true"></i></span>
        </RouterLink>
        <RouterLink class="photo-link" to="/get-something-made">
          <img src="/workshop-images/DSCF0694.jpeg" alt="A bench vise ready for the next project" loading="lazy" />
          <span>Get something made <i class="line-arrow" aria-hidden="true"></i></span>
        </RouterLink>
      </div>
    </section>

    <section class="home-details" aria-labelledby="warehouse-title">
      <h2 id="warehouse-title">Inside NORM</h2>
      <div class="home-details-grid">
        <p>
          The front half of the building has a communal lounge and kitchen, 13 lockable studios
          plus shared space for projects. In the back half you’ll find a nice big workshop full of
          professional wood and metal machinery, power tools, hand tools and material storage.
        </p>
        <div>
          <p>
            Norm employs two workshop managers who maintain the machines in good working order and
            are available for assistance with using the equipment. As a registered Not-For-Profit,
            we also elect board members who oversee operations and decision-making.
          </p>
          <RouterLink class="text-link" to="/about">
            More about NORM <span class="line-arrow" aria-hidden="true"></span>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="home-closing" aria-labelledby="home-closing-title">
      <p class="eyebrow"><span></span> Shared tools · Shared knowledge</p>
      <h2 id="home-closing-title">Access is superior to ownership.</h2>
      <RouterLink class="text-link" to="/history">
        Our story <span class="line-arrow" aria-hidden="true"></span>
      </RouterLink>
    </section>
  </div>
</template>
