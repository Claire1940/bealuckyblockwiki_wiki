# Be a Lucky Block 首页重构文档

> 游戏：Be a Lucky Block
> 域名：bealuckyblockwiki.wiki
> 任务范围：部分 5 - 首页模块 2
> 受影响文件：`src/locales/en.json`、`src/app/[locale]/page.tsx`

## 目标

基于 `00基础信息.md` 与 `00首页信息-2.md`，继续增强首页中段模块（Locations / Brainrots / Special Brainrots / Trading Guide），并与现有模块体系无缝衔接：

- 仅修改现有 `page.tsx` 与 `en.json`
- 保留全部广告组件与懒加载组件（`HeroStats`、`FAQSection`、`CTASection`）
- 维持视频区下方导航，并新增对 `Be a Lucky Block Special Brainrots` 的锚点支持
- 模块标题统一采用 `Be a Lucky Block + xxx` 结构
- 图标保持 `lucide-react`，导航卡片图标不重复
- 文案避免出现 `reliability`、`unverified`、`disputed`、`tough` 等词
- 颜色继续使用主题变量（`--nav-theme` / `--nav-theme-light`）

## 模块映射（00首页信息-2）

1. `Be a Lucky Block Locations`
- 展示形态：location cards + route comparison table
- 关键点：Near/Mid/Far 路线阶梯、回程压力、渐进升级策略
- 页面动作：保留对比表并补全高亮要点列表与 CTA

2. `Be a Lucky Block Brainrots`
- 展示形态：rarity cards + earnings explainer + filters
- 关键点：`RELEASE` 奖励、基地经济、离线收益、核心循环
- 页面动作：补强“当前免费奖励”“收益解释”“筛选标签”表达

3. `Be a Lucky Block Special Brainrots`
- 展示形态：featured cards + rarity spotlight + wishlist panel
- 关键点：Inferno Secret / Divine / Void / Cyborg / Mogging Secret
- 页面动作：从 3 个卡片扩展到 5 个命名卡片，并保留 spotlight + wishlist

4. `Be a Lucky Block Trading Guide`
- 展示形态：trade tips + value notes + warning banner style
- 关键点：稳定收入后再交易、处理重复件与活动件、跟踪社区需求
- 页面动作：增强交易提示密度并加入醒目提示条

## 导航与 SEO 约束

- 视频下导航区继续保留首页锚点滚动
- 新增 `Be a Lucky Block Special Brainrots` 导航卡
- 导航标题与模块标题均显式包含 `Be a Lucky Block`
- `en.json` 的 `tools` 与 `homepage` 字段同步更新，确保导航语义与模块文案一致

## 执行清单

1. 新增本重构文档（本文件）
2. 更新 `src/locales/en.json` 的 `tools` 与 `homepage` 文案
3. 在现有 `src/app/[locale]/page.tsx` 中更新以下内容：
- 导航卡片列表（加入 `special-brainrots`）
- Locations 模块文案与结构补强
- Brainrots 模块文案补强
- Special Brainrots 模块扩展为 5 个卡片
- Trading Guide 模块增加提示条与新文案
4. 执行验证命令（grep/typecheck/lint/build/dev+curl）
5. 提交并推送，检查 Actions，执行部署脚本

## 决策说明

- 当前会话中没有可用的 `frontend-design` 技能条目，因此继续在现有视觉系统中手工落实统一风格
- 为减少回归风险，采用“增量强化”而非重写结构，确保广告与现有模块顺序不被破坏
- `src/messages/en.json` 在当前仓库不存在，旧词检查以 `src/locales/en.json` 与首页组件内容为准
