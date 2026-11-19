<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const inquiry = ref('')

const openInquiryEmail = () => {
  const subject = name.value ? `NORM membership inquiry from ${name.value}` : 'NORM membership inquiry'
  const body = [
    `Name: ${name.value}`,
    `Email: ${email.value}`,
    '',
    inquiry.value,
  ].join('\n')

  window.location.href = `mailto:info@normwarehouse.com.au?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
</script>

<template>
  <div>
    <section class="page-hero page-hero-banner page-hero-join" aria-labelledby="join-page-title">
      <div class="page-hero-content">
        <p class="eyebrow"><span></span> Membership</p>
        <h1 id="join-page-title">Join the community</h1>
      </div>
    </section>

    <section class="section join-intro" aria-labelledby="join-intro-title">
      <div class="section-label">A place to make</div>
      <div class="join-intro-grid">
        <h2 id="join-intro-title">A co-operative space shaped by its community.</h2>
        <p>
          Norm is a co-operative run organisation where current tenants and members have an active
          say in how the place is run. We aim to keep the cost of membership as low as possible,
          and all funds raised are re-invested into our shared facilities and assets. Consequently,
          our studios are in high demand and are usually fully occupied. However spaces do become
          available when someone vacates. Expressions of interest are always welcome, and we are
          also happy to give tours of the workshop for prospective members.
        </p>
      </div>
    </section>

    <section class="join-options" aria-labelledby="join-options-title">
      <div class="join-options-heading">
        <p class="eyebrow"><span></span> Membership options</p>
        <h2 id="join-options-title">Choose the space you need.</h2>
      </div>

      <div class="join-option join-option-studio">
        <div>
          <p class="panel-kicker">Shared studio</p>
          <p class="join-price"><strong>$370</strong><span>/ month</span></p>
        </div>
        <p>
          As of Jan 2027 a standard studio costs $370/month for approximately 6 sqm. Our studios
          are shared with either 1 or 2 other people in a lockable space. Studio rent includes:
        </p>
        <ul>
          <li>Workshop access</li>
          <li>Internet</li>
          <li>Waste disposal</li>
          <li>24/7 access</li>
        </ul>
      </div>

      <div class="join-option join-option-workshop">
        <div>
          <p class="panel-kicker">Workshop membership</p>
          <p class="join-price"><strong>$220</strong><span>/ month</span></p>
        </div>
        <p>
          We also offer 5 workshop memberships which cost $220/month and include all the same
          amenities but no studio space.
        </p>
      </div>
    </section>

    <section class="section join-inquiry" aria-labelledby="join-inquiry-title">
      <div class="join-inquiry-copy">
        <p class="eyebrow"><span></span> Express your interest</p>
        <h2 id="join-inquiry-title">Tell us what you want to make.</h2>
        <p>
          If you think Norm looks like a good fit for your needs,
          <a href="mailto:info@normwarehouse.com.au?subject=NORM%20membership%20inquiry">send us an email</a>
          or fill out an inquiry below. Be sure to let us know what kind of work you’re looking to
          do.
        </p>
        <p>
          Norm welcomes early career makers, artists and designers of all ages and genders. We can
          accommodate fledgling and aspiring businesses, however we do not cater for established
          businesses or large volume producers.
        </p>
      </div>

      <form class="join-form" @submit.prevent="openInquiryEmail">
        <label>
          <span>Name</span>
          <input v-model.trim="name" name="name" type="text" autocomplete="name" required />
        </label>
        <label>
          <span>Email</span>
          <input v-model.trim="email" name="email" type="email" autocomplete="email" required />
        </label>
        <label>
          <span>Your inquiry</span>
          <textarea
            v-model.trim="inquiry"
            name="inquiry"
            rows="8"
            placeholder="tell us a bit about yourself and what you want to do at Norm"
            required
          ></textarea>
        </label>
        <button class="button button-dark" type="submit">
          Open inquiry email <span class="line-arrow" aria-hidden="true"></span>
        </button>
        <p class="join-form-note">
          This opens your email app so you can review your message before sending.
        </p>
      </form>
    </section>
  </div>
</template>
