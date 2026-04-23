# 灵魂镜像 (Soul Mirror) AI 微应用

一款基于 Next.js + AI 的高情绪价值情感陪伴与赛博玄学微应用。

## 一、 快速部署指南

项目已适配 **Vercel** 一键部署：

1. **准备 API Key**:
   - 获取 [OpenAI API Key](https://platform.openai.com/)。
   - (可选) 获取 [Stripe Secret Key](https://dashboard.stripe.com/)。

2. **环境变量配置**:
   在 Vercel 部署页面添加以下环境变量：
   - `OPENAI_API_KEY`: 你的 OpenAI 密钥。
   - `STRIPE_SECRET_KEY`: Stripe 密钥（用于支付）。
   - `NEXT_PUBLIC_BASE_URL`: 你的部署域名（如 `https://soul-mirror.vercel.app`）。

3. **一键部署**:
   - 将代码推送到 GitHub。
   - 在 Vercel 中导入仓库，点击 **Deploy**。

## 二、 流量获取指南 (小红书/抖音)

### 1. 内容钩子 (Hook)
- **视觉风格**: 使用“黑底白字”或“赛博朋克深紫色调”的截图。
- **标题示例**:
  - “深夜 emo 刷到这个，被 AI 毒舌治愈了...”
  - “测测你的灵魂底层代码是什么？”
  - “2026 年，人类已经开始用赛博塔罗做决策了吗？”

### 2. 裂变策略
- **能量签**: 引导用户在完成免费测试后，将生成的“能量签”带上话题 #灵魂镜像 #赛博玄学 发布到朋友圈或小红书。
- **评论区互动**: 发布一些 AI 毒舌语录，引导用户搜索你的应用。

### 3. 变现逻辑
- **9.9 元深度报告**: 极低的决策门槛，利用好奇心转化。
- **19.9 元深夜树洞**: 针对重度孤独感用户，提供高频情绪交互。

## 三、 技术架构说明
- **Frontend**: Next.js 14 (App Router) + Tailwind CSS + Framer Motion.
- **Backend**: Next.js Route Handlers (Edge Runtime 适配).
- **AI**: OpenAI Chat Completions (Custom System Prompt).
- **Payment**: Stripe Checkout (支持支付宝/信用卡).

---
*由“首席产品官与全栈工程师”构建于 2026 年。*
