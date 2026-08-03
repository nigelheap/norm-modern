<script setup>
const workshopTools = [
  {
    number: '01',
    title: 'Metalwork',
    text: 'MIG and stick welding gear, angle grinders and a bench grinder.',
  },
  {
    number: '02',
    title: 'Woodwork',
    text: 'Panel saw, bandsaw, drop saw, drill press, scroll saw, wood lathe, thicknesser and linisher.',
  },
  {
    number: '03',
    title: 'Space to work',
    text: 'Heaps of hand and power tools, plus bench space for up to six people at one time.',
  },
  {
    number: '04',
    title: 'People to ask',
    text: 'A community with diverse skills and a peer-to-peer approach to learning.',
  },
]
</script>

<template>
  <div>
    <section class="page-hero page-hero-dark" aria-labelledby="workshop-page-title">
      <p class="eyebrow eyebrow-light"><span></span> Workshop access</p>
      <h1 id="workshop-page-title">Got projects but limited space and tools?</h1>
      <p class="page-intro">
        A fully equipped community workshop for woodwork, metalwork and the ideas that need more
        room than home can offer.
      </p>
    </section>

    <section class="section workshop-section" aria-labelledby="equipment-title">
      <div class="section-label">Equipment + access</div>
      <div class="section-heading-row">
        <h2 id="equipment-title">Set up to help you get the work done.</h2>
        <p>
          All workshop equipment is included for studio holders. A limited number of
          workshop-only memberships are also available with a three-month minimum commitment.
        </p>
      </div>

      <div class="tool-list">
        <article v-for="tool in workshopTools" :key="tool.title" class="tool-item">
          <span class="tool-number">{{ tool.number }}</span>
          <h3>{{ tool.title }}</h3>
          <p>{{ tool.text }}</p>
        </article>
      </div>

      <div class="induction-panel">
        <div>
          <p class="panel-kicker">Before you begin</p>
          <h3>Safety induction</h3>
        </div>
        <p>
          Before using the workshop you’ll complete a 1.5-hour general safety induction with the
          workshop manager. The one-off fee is $50 cash. Welding, lathe and table-router inductions
          are available separately.
        </p>
        <a class="button button-light" href="mailto:info@normwarehouse.com.au?subject=Safety%20induction%20enquiry">
          Email about induction <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div class="classes-row">
        <p>Classes run by members</p>
        <div class="class-tags" aria-label="Classes offered by NORM members">
          <span>Welding</span>
          <span>Woodworking</span>
          <span>Basic tool use</span>
          <span>And more</span>
        </div>
      </div>
    </section>

    <section class="page-cta" aria-labelledby="workshop-cta-title">
      <div>
        <p class="eyebrow"><span></span> Thinking about workshop access?</p>
        <h2 id="workshop-cta-title">Email us and tell us what you want to make.</h2>
      </div>
      <a class="button button-dark" href="mailto:info@normwarehouse.com.au?subject=Workshop%20access%20enquiry">
        Start an email <span aria-hidden="true">↗</span>
      </a>
    </section>
  </div>
</template>
