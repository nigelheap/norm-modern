<script setup>
const subject = encodeURIComponent('Norm enquiry')
const body = encodeURIComponent(
  'Tell us a bit about yourself and what you want to do at Norm:\n\n',
)
const mailto = `mailto:info@normwarehouse.com.au?subject=${subject}&body=${body}`
</script>

<template>
  <section id="join" class="section on-accent" aria-labelledby="join-title">
    <div class="row reveal">
      <div class="row-label"><p class="label">02 — Join</p></div>
      <div class="row-body">
        <h2 id="join-title" class="display join-lead">Join the community</h2>
        <div class="prose" style="margin-top: 2rem">
          <p class="lead">
            Norm is a co-operative run organisation where current tenants and members have an
            active say in how the place is run.
          </p>
          <p>
            We aim to keep the cost of membership as low as possible, and all funds raised are
            re-invested into our shared facilities and assets. Consequently, our studios are in
            high demand and are usually fully occupied. However spaces do become available when
            someone vacates. Expressions of interest are always welcome, and we are also happy to
            give tours of the workshop for prospective members.
          </p>
        </div>
      </div>
    </div>

    <div class="row reveal">
      <div class="row-label"><p class="label">Studios</p></div>
      <div class="row-body">
        <div class="spaces">
          <figure class="figure">
            <img
              src="/hero-studios.webp"
              alt="A maker drilling at a bench in a studio"
              loading="lazy"
            />
          </figure>
          <figure class="figure">
            <img
              src="/workshop-images/DSCF0659.jpeg"
              alt="A timber booth seat and table in the communal lounge"
              loading="lazy"
            />
          </figure>
        </div>
      </div>
    </div>

    <div class="row reveal">
      <div class="row-label"><p class="label">Costs</p></div>
      <div class="row-body">
        <div class="tiles">
          <article class="tile tile-dark">
            <h3>Studio</h3>
            <p>Approximately 6 sqm, shared with either 1 or 2 other people in a lockable space.</p>
            <p class="price">$370<small>/ month</small></p>
          </article>
          <article class="tile">
            <h3>Workshop membership</h3>
            <p>5 available. All the same amenities, but no studio space.</p>
            <p class="price">$220<small>/ month</small></p>
          </article>
        </div>
        <p class="fineprint" style="margin-top: 1rem">Prices as of Jan 2027.</p>

        <p class="mini-head" style="margin: 2.5rem 0 0.75rem">Rent includes</p>
        <ul class="includes">
          <li>Workshop access</li>
          <li>Internet</li>
          <li>Waste disposal</li>
          <li>24/7 access</li>
        </ul>
      </div>
    </div>

    <div class="row reveal">
      <div class="row-label"><p class="label">Who it’s for</p></div>
      <div class="row-body">
        <div class="two-col">
          <div>
            <h3>Welcome</h3>
            <p>
              Norm welcomes early career makers, artists and designers of all ages and genders. We
              can accommodate fledging and aspiring businesses.
            </p>
          </div>
          <div>
            <h3>Not a fit</h3>
            <p>We do not cater for established businesses or large volume producers.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="row reveal">
      <div class="row-label"><p class="label">Get in touch</p></div>
      <div class="row-body">
        <a class="enquire" :href="mailto">
          <p class="mini-head">Fit looks good?</p>
          <p class="lead">Tell us a bit about yourself and what you want to do at Norm.</p>
          <span class="pill pill-lg">Email us <span class="arrow" aria-hidden="true"></span></span>
        </a>
        <p class="fineprint" style="margin-top: 1rem">
          Send us an email, or ask for a tour of the workshop. Let us know what kind of work you’re
          looking to do.
        </p>
      </div>
    </div>
  </section>
</template>
