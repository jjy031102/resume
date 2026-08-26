export default {
  name: '蒋明哲鑫',
  title: '前端开发实习生',
  tagline: '2026 届应届生 · 可立即到岗 · 接受加班与出差',
  avatarText: '蒋',

  contact: {
    phone: '19138378709',
    email: '3271406323@qq.com',
    wechat: 'xiaobai20mm',
    github: 'https://github.com/jjy031102',
    city: '四川 · 成都'
  },

  // 求职意向
  intention: {
    position: '前端开发实习生 / 初级前端开发',
    salary: '面议',
    type: '全职 / 实习均可'
  },

  // 技能（分类展示）
  skills: [
    {
      category: '前端基础',
      items: ['HTML5', 'CSS3', 'JavaScript', '响应式布局']
    },
    {
      category: '框架相关',
      items: ['Vue2 / Vue3']
    },
    {
      category: '其他',
      items: ['Tailwind CSS', 'Node.js 基础', 'AI 绘图 / 视频创作']
    }
  ],

  // 教育背景
  education: {
    school: '重庆城市职业学院',
    major: '计算机应用技术',
    degree: '大专',
    period: '2023.09 — 2026.06',
    courses: ['Web 前端开发', 'JavaScript 程序设计', '数据结构', '数据库基础']
  },

  projects: [
    {
      name: 'Vue3 个人简历网站（本作品）',
      role: '独立开发',
      tech: 'Vue3 · Vite · 组件化开发',
      desc: '使用 Vue3 组合式 API 从零搭建的个人简历展示页，把个人信息、技能、项目经历数据化集中管理，通过组件拆分实现页面复用。',
      points: [
        '基于 <script setup> 组合式 API 开发，组件间使用 props 单向数据流传值',
        '使用 Vite 构建并配置相对路径 base，方便直接部署与分享给招聘方',
        '响应式布局，适配 PC 与移动端浏览'
      ]
    },
    {
      name: 'TodoList 待办事项应用（尚硅谷实战）',
      role: '课程实战项目',
      tech: 'Vue2 / Vue3 · Tailwind CSS',
      desc: '跟随尚硅谷教程实战开发的 TodoList 待办事项应用，深入练习 Vue 核心语法与组件化开发。',
      points: [
        '熟练使用 props 传参、computed 计算属性（如 doneTotal 已完成统计）、v-model 双向绑定',
        '通过组件拆分实现列表展示、新增、删除、全选等完整交互',
        '独立排查解决样式失效、数据响应式更新等常见问题'
      ]
    }
  ],

  // 自我评价
  selfIntro: [
    '我是 2026 届计算机应用技术大专应届毕业生，熟悉 HTML/CSS、JavaScript、Vue2/3，掌握 MySQL 基础操作，持有 1+X Web 前端初级证书。',
    '在校期间获得校级奖学金、校级优秀毕业生荣誉，担任班级团支书，有丰富学生工作与志愿服务经历。具备良好的沟通协调、团队协作与问题处理能力。',
    '对待开发踏实认真，自主学习能力强，愿意主动钻研新技术，希望从事前端开发相关岗位，在实际项目中积累开发经验。'
  ]
}
