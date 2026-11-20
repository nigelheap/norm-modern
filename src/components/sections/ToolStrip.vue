<script setup>
const tools = [
  { img: 'DSCF0664', name: 'Bandsaw', alt: 'A floor-standing bandsaw' },
  { img: 'DSCF0666', name: 'Jointer', alt: 'A jointer with a long infeed table' },
  { img: 'DSCF0675', name: 'Thicknesser', alt: 'A thicknesser planer with dust extraction' },
  { img: 'DSCF0679', name: 'Router table', alt: 'A router table mounted in a bench' },
  { img: 'DSCF0681', name: 'Belt and disc sander', alt: 'A blue belt and disc sander' },
  { img: 'DSCF0683', name: 'Drill press', alt: 'A drill press with a timber table' },
  { img: 'DSCF0688', name: 'Welding bay', alt: 'A welder, gas bottles and a steel bench' },
  { img: 'DSCF0686', name: 'Hand tools', alt: 'A wall of saws, planes, squares and hammers' },
]
</script>

<template>
  <section class="toolstrip" aria-labelledby="tools-title">
    <div class="toolstrip-head">
      <h2 id="tools-title" class="label">In the workshop</h2>
      <p class="label" aria-hidden="true">Scroll →</p>
    </div>
    <ul class="toolstrip-track" tabindex="0" aria-label="Machines in the workshop">
      <li v-for="tool in tools" :key="tool.img" class="tool">
        <figure>
          <div class="frame">
            <img :src="`/workshop-images/${tool.img}.jpeg`" :alt="tool.alt" loading="lazy" />
          </div>
          <figcaption><strong>{{ tool.name }}</strong></figcaption>
        </figure>
      </li>
    </ul>
  </section>
</template>
