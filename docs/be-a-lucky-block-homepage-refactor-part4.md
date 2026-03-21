# Be a Lucky Block 首页重构文档

> 游戏：Be a Lucky Block
> 域名：bealuckyblockwiki.wiki
> 任务范围：部分 4 - 首页模块 1
> 受影响文件：`src/locales/en.json`、`src/app/[locale]/page.tsx`

## 目标

基于 `00基础信息.md`、`00首页信息.md`、`00首页信息-1.md`，将首页重构为围绕 `Be a Lucky Block` 的完整英文落地页，满足以下要求：

- 仅修改现有 [page.tsx](/root/Documents/GameProjects/bealuckyblockwiki_wiki/src/app/[locale]/page.tsx) 与 [en.json](/root/Documents/GameProjects/bealuckyblockwiki_wiki/src/locales/en.json)
- 保留现有广告组件与整体路由结构
- 删除首页内部用于跳转其他页面的 URL 入口，改为首页模块锚点滚动
- 外链仅保留官方 Roblox 游戏页、Group、Discord、X 与 Roblox Events
- 所有视觉强调色统一使用 `--nav-theme` 与 `--nav-theme-light`
- 图标仅使用 `lucide-react`，每个导航卡片使用不同图标
- FAQ 问答中显式包含 `Be a Lucky Block`
- 模块标题统一采用 `Be a Lucky Block + xxx` 形式，保证 SEO 密度

## 首页信息架构

首页按以下顺序组织：

1. Hero
2. 视频区
3. 首页锚点导航区
4. `Be a Lucky Block Codes`
5. `Be a Lucky Block Wiki`
6. `Be a Lucky Block Beginner Guide`
7. `Be a Lucky Block Luck Guide`
8. `Be a Lucky Block Locations`
9. `Be a Lucky Block Brainrots`
10. `Be a Lucky Block Special Brainrots`
11. `Be a Lucky Block Trading Guide`
12. `Be a Lucky Block Base Guide`
13. `Be a Lucky Block Offline Cash`
14. `Be a Lucky Block Upgrades Guide`
15. `Be a Lucky Block Guard Escape Tips`
16. `Be a Lucky Block Weekly Updates`
17. `Be a Lucky Block Events`
18. `Be a Lucky Block Discord & Community`
19. `Be a Lucky Block FAQ`
20. CTA + Footer

## 设计与交互约束

- Hero 继续保留大标题、CTA、统计卡、结构化数据
- 视频下方保留导航模块，支持滚动到首页下方十几个模块
- 不创建新的简化版首页文件，只在现有 [page.tsx](/root/Documents/GameProjects/bealuckyblockwiki_wiki/src/app/[locale]/page.tsx) 上扩展
- 广告组件 `NativeBannerAd` 与 `AdBanner` 原样保留
- 卡片、分区、徽标、按钮统一使用当前主题变量，不写死十六进制或任意业务色
- 首页内部跳转全部改为 `#anchor` 形式，不导向站内其他路径
- 官方外链全部走 `OFFICIAL_LINKS`

## 文案重构范围

- 替换 [en.json](/root/Documents/GameProjects/bealuckyblockwiki_wiki/src/locales/en.json) 中旧主题残留内容
- 保留站点公共字段结构，但将首页相关字段全部改为 `Be a Lucky Block`
- `tools` 区改成首页模块导航文案，不再描述旧游戏的训练、流派、Boss 等内容
- `faq`、`cta`、`footer` 与 `seo.home` 全部对齐 Lucky Block 主题

## 页面实现策略

### 1. 数据分层

在 [page.tsx](/root/Documents/GameProjects/bealuckyblockwiki_wiki/src/app/[locale]/page.tsx) 中按模块定义常量数组，避免 JSX 内混杂大量重复文案结构。

### 2. 模块卡片模式

采用一套统一视觉语言：

- 顶部标题 + 副标题
- 主要信息卡
- 支持性列表、时间线、对比表或提示条
- 分区背景在透明卡与轻量渐变之间交替，保持层次感

### 3. 锚点导航

导航区至少覆盖首页下方核心模块，名称使用：

- `Be a Lucky Block Codes`
- `Be a Lucky Block Wiki`
- `Be a Lucky Block Beginner Guide`
- `Be a Lucky Block Luck Guide`
- `Be a Lucky Block Locations`
- `Be a Lucky Block Brainrots`
- `Be a Lucky Block Trading Guide`
- `Be a Lucky Block Base Guide`
- `Be a Lucky Block Upgrades Guide`
- `Be a Lucky Block Weekly Updates`
- `Be a Lucky Block Events`
- `Be a Lucky Block FAQ`

### 4. 外链策略

仅在以下位置保留外部链接：

- Hero 主 CTA 到 Roblox 游戏页
- Codes 区次 CTA 到 Discord
- Weekly Updates / Events / Community 卡片到官方活动与社群
- CTA 区到 Discord 与 Roblox 游戏页

## 执行清单

1. 新增本重构文档
2. 清理 [en.json](/root/Documents/GameProjects/bealuckyblockwiki_wiki/src/locales/en.json) 中旧主题模块
3. 重写首页导航资源区与相关标题文案
4. 扩展 [page.tsx](/root/Documents/GameProjects/bealuckyblockwiki_wiki/src/app/[locale]/page.tsx) 为 12+ 模块结构
5. 保留 FAQSection、CTASection、HeroStats、VideoFeature 与广告组件
6. 搜索仓库，确认首页英文翻译不存在旧主题词
7. 运行 `npm run typecheck`、`npm run lint`、`npm run build`
8. 启动本地开发服务并用 `curl` 验证首页与 `/pt`

## 决策说明

- 当前会话没有可用的 `frontend-design` 技能，因此本次直接在现有设计系统上手工实现首页视觉重构
- 由于任务明确禁止翻译，本次仅更新英文文案与英文首页组件，不扩展其他语言首页内容
- `src/messages/en.json` 在当前仓库不存在，因此旧主题排查以 [en.json](/root/Documents/GameProjects/bealuckyblockwiki_wiki/src/locales/en.json) 与首页组件为准
