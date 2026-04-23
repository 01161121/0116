import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export async function POST(req: Request) {
  try {
    const { productId, amount } = await req.json();

    // 在实际场景中，这里应该根据 productId 获取价格
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'alipay'], // 适配移动端
      line_items: [
        {
          price_data: {
            currency: 'cny',
            product_data: {
              name: productId === 'deep_analysis' ? '灵魂镜像-深度运势报告' : '灵魂镜像-深夜树洞',
            },
            unit_amount: amount * 100, // 分
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Payment Error:', error);
    return NextResponse.json({ error: '支付系统暂时无法连接' }, { status: 500 });
  }
}
