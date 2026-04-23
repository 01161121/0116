import { NextResponse } from 'next/server';

// 推荐使用：硅基流动 (SiliconFlow) - 国内访问无压力，注册送额度
// 官网：https://siliconflow.cn/
const AI_API_KEY = process.env.AI_API_KEY;
const AI_ENDPOINT = process.env.AI_ENDPOINT || 'https://api.siliconflow.cn/v1/chat/completions';
const AI_MODEL = process.env.AI_MODEL || 'deepseek-ai/DeepSeek-V3'; // 也可以用 Qwen/Llama 等免费模型

import { SOUL_MIRROR_PROMPT } from '@/lib/ai';

export async function POST(req: Request) {
  try {
    const { messages, type, isPaid } = await req.json();

    // 免费版逻辑：如果未支付，限制回复长度
    const systemPrompt = isPaid 
      ? `${SOUL_MIRROR_PROMPT}\n你现在正在进行深度解析，请提供约500字的详尽报告。`
      : SOUL_MIRROR_PROMPT;

    const response = await fetch(AI_ENDPOINT, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${AI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: AI_MODEL,
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages
        ],
        temperature: 0.8,
        max_tokens: isPaid ? 1000 : 150,
      }),
    });

    const data = await response.json();
    return NextResponse.json({ 
      content: data.choices[0].message.content 
    });
  } catch (error) {
    console.error('AI Error:', error);
    return NextResponse.json({ error: 'AI 能量波动，请稍后再试' }, { status: 500 });
  }
}
