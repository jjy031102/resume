<script setup>
defineProps({
  project: { type: Object, required: true }
})
</script>

<template>
  <article class="project">
    <div class="project-head">
      <h3 class="project-name">{{ project.name }}</h3>
      <span class="project-role">{{ project.role }}</span>
    </div>
    <div class="project-tech">
      <span v-for="t in project.tech.split('·')" :key="t" class="tag">{{ t.trim() }}</span>
    </div>
    <p class="project-desc">{{ project.desc }}</p>
    <ul class="project-points">
      <li v-for="(p, i) in project.points" :key="i">{{ p }}</li>
    </ul>
  </article>
</template>

<style scoped>
.project {
  padding: 18px 0;
}

.project + .project {
  border-top: 1px solid var(--line);
}

.project-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 10px;
}

.project-name {
  font-size: 16px;
  color: var(--ink);
}

.project-role {
  font-size: 12px;
  color: var(--accent);
  background: rgba(37, 99, 235, 0.08);
  border: 1px solid rgba(37, 99, 235, 0.25);
  border-radius: 999px;
  padding: 2px 10px;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 10px;
}

.tag {
  font-size: 12px;
  color: var(--ink-2);
  background: #f1f5f9;
  border-radius: 4px;
  padding: 2px 8px;
}

.project-desc {
  font-size: 14px;
  color: var(--ink-2);
  margin-bottom: 8px;
}

.project-points {
  padding-left: 0;
}

.project-points li {
  position: relative;
  padding-left: 16px;
  font-size: 13px;
  color: var(--ink-2);
  margin-bottom: 4px;
}

.project-points li::before {
  content: '';
  position: absolute;
  left: 2px;
  top: 8px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent-light);
}
</style>
