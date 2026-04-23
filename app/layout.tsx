import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '灵魂镜像 | Soul Mirror AI',
  description: '24小时在线的赛博情感陪伴与运势解析',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className={`${inter.className} bg-cyber-black text-white min-h-screen overflow-x-hidden`}>
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(109,40,217,0.1),transparent)] pointer-events-none" />
        {children}
      </body>
    </html>
  )
}
