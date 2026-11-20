<script setup>
import { computed, ref } from 'vue'
import { members } from '../../data/members.js'

const filter = ref('All')

const disciplines = computed(() => [
  'All',
  ...new Set(members.flatMap((member) => member.disciplines)),
])

const visible = computed(() =>
  filter.value === 'All'
    ? members
    : members.filter((member) => member.disciplines.includes(filter.value)),
)
</script>

<template>
  <section id="members" class="section on-dark" aria-labelledby="members-title">
    <div class="row reveal">
      <div class="row-label"><p class="label">04 — Our members</p></div>
      <div class="row-body">
        <h2 id="members-title" class="display">The people who make Norm.</h2>
        <p class="lead" style="margin-top: 1.5rem; max-width: 30ch">
          Makers, artists and designers who share the workshop and the studios.
        </p>
      </div>
    </div>

    <div class="row reveal">
      <div class="row-label"><p class="label">Directory</p></div>
      <div class="row-body">
        <div class="members-head">
          <div class="filters" role="group" aria-label="Filter members by discipline">
            <button
              v-for="item in disciplines"
              :key="item"
              class="chip"
              type="button"
              :aria-pressed="filter === item"
              @click="filter = item"
            >{{ item }}</button>
          </div>
          <p class="label" aria-live="polite">{{ visible.length }} shown</p>
        </div>

        <ul class="member-grid">
          <li v-for="(member, index) in visible" :key="member.name + index" class="member">
            <div class="still">
              <img :src="member.image" :alt="member.alt" loading="lazy" />
              <span v-if="member.placeholder" class="tag">Placeholder</span>
            </div>
            <p class="label kicker">{{ member.disciplines.join(' · ') }}</p>
            <h3>{{ member.name }}</h3>
            <p>{{ member.bio }}</p>
            <a v-if="member.url" :href="member.url" target="_blank" rel="noopener">
              View their work <span class="arrow" aria-hidden="true"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
