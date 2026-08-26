<script setup>
defineProps({
  profile: { type: Object, required: true }
})
</script>

<template>
  <aside class="sidebar">
    <div class="avatar">{{ profile.avatarText }}</div>
    <h1 class="name">{{ profile.name }}</h1>
    <p class="title">{{ profile.title }}</p>
    <p class="tagline">{{ profile.tagline }}</p>

    <section class="block">
      <h3 class="block-title">联系方式</h3>
      <ul class="contact">
        <li>
          <span class="label">电话</span>
          <span>{{ profile.contact.phone }}</span>
        </li>
        <li>
          <span class="label">邮箱</span>
          <span>{{ profile.contact.email }}</span>
        </li>
        <li>
          <span class="label">微信</span>
          <span>{{ profile.contact.wechat }}</span>
        </li>
        <li>
          <span class="label">城市</span>
          <span>{{ profile.contact.city }}</span>
        </li>
        <li v-if="profile.contact.github">
          <span class="label">GitHub</span>
          <a :href="profile.contact.github" target="_blank" rel="noopener">查看主页 →</a>
        </li>
      </ul>
    </section>

    <section class="block">
      <h3 class="block-title">专业技能</h3>
      <div v-for="group in profile.skills" :key="group.category" class="skill-group">
        <h4 class="skill-cat">{{ group.category }}</h4>
        <div class="skill-chips">
          <span v-for="item in group.items" :key="item" class="chip">{{ item }}</span>
        </div>
      </div>
    </section>

    <section class="block">
      <h3 class="block-title">教育背景</h3>
      <div class="edu">
        <div class="edu-school">{{ profile.education.school }}</div>
        <div class="edu-meta">{{ profile.education.major }} · {{ profile.education.degree }}</div>
        <div class="edu-time">{{ profile.education.period }}</div>
      </div>
    </section>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 340px;
  flex-shrink: 0;
  background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
  color: #e2e8f0;
  padding: 36px 28px;
  display: flex;
  flex-direction: column;
  gap: 26px;
}

.avatar {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6, #22d3ee);
  color: #fff;
  font-size: 40px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
  border: 3px solid rgba(255, 255, 255, 0.25);
}

.name {
  font-size: 26px;
  color: #fff;
  letter-spacing: 2px;
}

.title {
  font-size: 16px;
  color: #93c5fd;
  margin-top: 2px;
}

.tagline {
  font-size: 13px;
  color: #94a3b8;
  margin-top: 6px;
}

.block-title {
  font-size: 13px;
  color: #60a5fa;
  letter-spacing: 2px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  margin-bottom: 14px;
}

.contact {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.contact li {
  display: flex;
  align-items: center;
  font-size: 13px;
  word-break: break-all;
}

.contact .label {
  width: 52px;
  flex-shrink: 0;
  color: #94a3b8;
}

.contact a {
  color: #93c5fd;
}

.contact a:hover {
  color: #fff;
  text-decoration: underline;
}

.skill-group {
  margin-bottom: 14px;
}

.skill-group:last-child {
  margin-bottom: 0;
}

.skill-cat {
  font-size: 12px;
  color: #cbd5e1;
  font-weight: 500;
  margin-bottom: 8px;
}

.skill-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.chip {
  font-size: 12px;
  padding: 3px 10px;
  border-radius: 999px;
  background: rgba(59, 130, 246, 0.18);
  border: 1px solid rgba(96, 165, 250, 0.35);
  color: #dbeafe;
}

.edu-school {
  font-size: 14px;
  color: #fff;
  font-weight: 600;
}

.edu-meta {
  font-size: 13px;
  color: #94a3b8;
  margin-top: 2px;
}

.edu-time {
  font-size: 12px;
  color: #64748b;
  margin-top: 2px;
}

/* 移动端：侧栏变顶部，自适应 */
@media (max-width: 820px) {
  .sidebar {
    width: 100%;
  }
}
</style>
