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

const workshopImages = [
  { file: 'DSCF0657.jpeg', width: 854, height: 1280, alt: 'Entrance to the NORM warehouse workshop' },
  { file: 'DSCF0658.jpeg', width: 1280, height: 854, alt: 'Outdoor courtyard with plants and shared seating' },
  { file: 'DSCF0659.jpeg', width: 1280, height: 854, alt: 'Communal kitchen booth and timber table' },
  { file: 'DSCF0662.jpeg', width: 1280, height: 854, alt: 'Workshop safety sign and hearing protection' },
  { file: 'DSCF0664.jpeg', width: 854, height: 1280, alt: 'Bandsaw in the woodworking area' },
  { file: 'DSCF0666.jpeg', width: 1280, height: 854, alt: 'Woodworking machine beside a workshop ladder' },
  { file: 'DSCF0675.jpeg', width: 854, height: 1280, alt: 'Woodfast thicknesser in the workshop' },
  { file: 'DSCF0676.jpeg', width: 854, height: 1280, alt: 'Workshop machine and dust extraction hose' },
  { file: 'DSCF0679.jpeg', width: 1280, height: 854, alt: 'Table saw and tool wall' },
  { file: 'DSCF0681.jpeg', width: 1280, height: 854, alt: 'Belt sander ready for use' },
  { file: 'DSCF0683.jpeg', width: 854, height: 1280, alt: 'Drill press with a timber work surface' },
  { file: 'DSCF0686.jpeg', width: 1280, height: 854, alt: 'Hand tools arranged above a workshop bench' },
  { file: 'DSCF0688.jpeg', width: 1280, height: 854, alt: 'Welding equipment beside a metal workbench' },
  { file: 'DSCF0691.jpeg', width: 1280, height: 854, alt: 'Wide view across the workshop machinery' },
  { file: 'DSCF0692.jpeg', width: 1280, height: 854, alt: 'Shared workbenches in the main workshop' },
  { file: 'DSCF0694.jpeg', width: 1280, height: 854, alt: 'Blue bench vise fixed to a timber workbench' },
  { file: 'DSCF0696.jpeg', width: 1280, height: 854, alt: 'Large timber benches in the woodworking space' },
  { file: 'DSCF0698.jpeg', width: 1280, height: 854, alt: 'Workshop tables surrounded by timber storage' },
  { file: 'DSCF0700.jpeg', width: 1280, height: 854, alt: 'Dust extractors stored beneath a workshop bench' },
  { file: 'DSCF0702.jpeg', width: 1280, height: 854, alt: 'NORM communal lounge and kitchen' },
  { file: 'DSCF0704.jpeg', width: 854, height: 1280, alt: 'Passage between workshop and shared spaces' },
  { file: 'DSCF0689.jpeg', width: 854, height: 1280, alt: 'metal bay' },
  { file: 'DSCF0693.jpeg', width: 854, height: 1280, alt: 'bench with vice' },
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
          Email about induction <span class="line-arrow" aria-hidden="true"></span>
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

    <section class="workshop-gallery" aria-labelledby="gallery-title">
      <div class="gallery-heading">
        <div>
          <p class="eyebrow eyebrow-light"><span></span> Around the warehouse</p>
          <h2 id="gallery-title">A working space, not a showroom.</h2>
        </div>
        <p>
          Machines, benches, shared rooms and the quiet corners between projects — this is where
          the work happens.
        </p>
      </div>

      <div class="workshop-masonry">
        <figure v-for="image in workshopImages" :key="image.file" class="workshop-photo">
          <a
            :href="`/workshop-images/${image.file}`"
            target="_blank"
            rel="noopener"
            :aria-label="`Open full-size photo: ${image.alt}`"
          >
            <img
              :src="`/workshop-images/${image.file}`"
              :alt="image.alt"
              :width="image.width"
              :height="image.height"
              loading="lazy"
              decoding="async"
            />
          </a>
        </figure>
      </div>
    </section>

    <section class="page-cta" aria-labelledby="workshop-cta-title">
      <div>
        <p class="eyebrow"><span></span> Thinking about workshop access?</p>
        <h2 id="workshop-cta-title">Email us and tell us what you want to make.</h2>
      </div>
      <a class="button button-dark" href="mailto:info@normwarehouse.com.au?subject=Workshop%20access%20enquiry">
        Start an email <span class="line-arrow" aria-hidden="true"></span>
      </a>
    </section>
  </div>
</template>
