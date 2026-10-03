# 筑家云 · 家装管理后台

面向家装公司的经营管理后台，采用 **React + TypeScript + Ant Design + Vite** 构建。

## 项目结构

```
src/
├── api/          # API 适配层，当前连接本地 Mock
├── components/   # 可复用业务组件
├── layouts/      # 后台布局与导航
├── mock/         # Dashboard、客户、项目 Mock 数据
├── pages/        # 看板、客户、项目、设计、报价、财务等页面模块
├── router/       # 路由定义
├── styles/       # 全局视觉样式
└── types/        # 业务类型
```

## 功能模块

- 经营看板：签约额、线索、在建项目、回款率与项目进度。
- 客户管理：渠道、意向、跟进人和最近跟进记录。
- 施工项目：施工阶段、进度、合同金额和负责人。
- 设计、报价合同、财务中心：可扩展的模块页面与工作列表。

## 本地运行

```bash
npm install
npm run dev
```

推送到 `main` 会自动由 GitHub Actions 构建并发布到 GitHub Pages。
