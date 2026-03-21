# Be a Lucky Block 首页重构文档

> 游戏：Be a Lucky Block  
> 域名：bealuckyblockwiki.wiki  
> 任务范围：部分 6 - 首页模块 3  
> 受影响文件：`src/locales/en.json`、`src/app/[locale]/page.tsx`

## 目标

基于 `00基础信息.md` 与 `00首页信息-3.md`，完成首页模块 09-12（Base / Offline Cash / Upgrades / Guard Escape）的结构化升级，并与现有首页风格、广告组件和锚点导航保持一致。

必须满足以下硬约束：

- 仅修改现有 `page.tsx` 和 `en.json`
- 保留所有广告组件与懒加载组件
- 模块标题统一为 `Be a Lucky Block + xxx`
- 图标统一使用 `lucide-react`，卡片图标不重复
- 图标和文字强调色使用全局主题变量（`--nav-theme` / `--nav-theme-light`）
- 只更新英文翻译内容（`src/locales/en.json`）
- 文案不出现 `reliability`、`unverified`、`disputed`、`tough`

## 模块映射（00首页信息-3）

1. `Be a Lucky Block Base Guide`（Module 09）
- 目标结构：base flow cards + priority board + compact tips grid
- 实现要点：
  - 4 张流程卡对应 Start/Claim/Run/Bank
  - Priority Board 使用列表呈现
  - Compact Tips Grid 使用紧凑提示卡
  - 增加 CTA：`/base-guide`

2. `Be a Lucky Block Offline Cash`（Module 10）
- 目标结构：earnings explainer + stack priorities + reminder strip
- 实现要点：
  - 3 张 earnings explainer 卡片
  - stack priorities 使用优先级 chip
  - reminder strip 用横向提示条或网格条
  - 增加 CTA：`/offline-cash`

3. `Be a Lucky Block Upgrades Guide`（Module 11）
- 目标结构：upgrade ladder + priority chips + before/after cards
- 实现要点：
  - 4 阶梯升级卡（Early / Stable Income / Mid / Update Windows）
  - priority chips 按原文分组
  - before/after 卡片按 3 组完整表达
  - 增加 CTA：`/upgrades-guide`

4. `Be a Lucky Block Guard Escape Tips`（Module 12）
- 目标结构：escape checklist + route tips + fail-state cards
- 实现要点：
  - escape checklist 用清单列表
  - route tips 按 title + description 卡片化
  - fail-state cards 按 3 类失败场景呈现
  - 增加 CTA：`/guard-escape-tips`

## 导航与 SEO

- 视频下导航继续保留，并同步 09-12 文案到 `tools`
- `homepage` 字段同步更新对应 09-12 summary
- 所有新增可见标题显式包含 `Be a Lucky Block`
- 模块锚点不改动既有结构，避免破坏已有滚动和入口

## 执行计划

1. 创建本重构文档（当前文件）
2. 更新 `src/locales/en.json` 中 `tools` 与 `homepage` 的 09-12 文案
3. 修改现有 `src/app/[locale]/page.tsx`：
- 重写模块 09-12 数据源，严格映射 `00首页信息-3.md`
- 保留广告代码与原页面主结构
- 对 09-12 卡片应用不同图标
- 补齐 4 个模块 CTA
4. 执行验证命令：`grep`、`npm run typecheck`、`npm run lint`、`npm run build`、`npm run dev + curl`
5. Git 提交推送并检查 Actions，最后执行重部署脚本

## 关键决策

- 会话技能列表中没有 `frontend-design` 技能条目，因此在当前设计系统内手工实现统一风格。
- 采用“局部结构增强”策略，不重写整页，减少回归风险并保证广告与现有模块顺序稳定。
