<script setup>
import profile from './data/profile.js'
import Sidebar from './components/Sidebar.vue'
import ProjectCard from './components/ProjectCard.vue'
</script>

<template>
  <div class="page">
    <div class="container">
      <Sidebar :profile="profile" />

      <main class="main">
        <!-- 求职意向 -->
        <section class="card">
          <h2 class="card-title">求职意向</h2>
          <div class="intention">
            <div class="intention-item">
              <span class="intention-label">意向岗位</span>
              <span class="intention-value">{{ profile.intention.position }}</span>
            </div>
            <div class="intention-item">
              <span class="intention-label">工作性质</span>
              <span class="intention-value">{{ profile.intention.type }}</span>
            </div>
            <div class="intention-item">
              <span class="intention-label">期望薪资</span>
              <span class="intention-value">{{ profile.intention.salary }}</span>
            </div>
          </div>
        </section>

        <!-- 自我评价 -->
        <section class="card">
          <h2 class="card-title">自我评价</h2>
          <ul class="intro-list">
            <li v-for="(t, i) in profile.selfIntro" :key="i">{{ t }}</li>
          </ul>
        </section>

        <!-- 项目经历 -->
        <section class="card">
          <h2 class="card-title">项目经历</h2>
          <div class="projects">
            <ProjectCard v-for="(p, i) in profile.projects" :key="i" :project="p" />
          </div>
        </section>
      </main>
    </div>

    <footer class="footer">Powered by Vue 3 · {{ profile.name }} 的个人简历</footer>
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 28px 16px;
}

.container {
  display: flex;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  background: var(--card);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(15, 23, 42, 0.12);
}

.main {
  flex: 1;
  padding: 36px 40px;
  display: flex;
  flex-direction: column;
  gap: 26px;
}

.card-title {
  font-size: 18px;
  color: var(--ink);
  padding-bottom: 10px;
  border-bottom: 2px solid var(--accent-light);
  display: inline-block;
  margin-bottom: 16px;
  letter-spacing: 1px;
}

/* 求职意向 */
.intention {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
}

.intention-item {
  background: #f8fafc;
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.intention-label {
  font-size: 12px;
  color: var(--ink-3);
}

.intention-value {
  font-size: 14px;
  color: var(--ink);
  font-weight: 600;
}

/* 自我评价 */
.intro-list {
  padding-left: 0;
}

.intro-list li {
  position: relative;
  padding-left: 18px;
  font-size: 14px;
  color: var(--ink-2);
  margin-bottom: 8px;
}

.intro-list li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--accent-light);
}

/* 页脚 */
.footer {
  text-align: center;
  color: var(--ink-3);
  font-size: 12px;
  padding: 18px 0 4px;
}

/* 响应式 */
@media (max-width: 820px) {
  .page {
    padding: 12px 8px;
  }

  .container {
    flex-direction: column;
  }

  .main {
    padding: 24px 18px;
  }
}
</style>
