'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { CheckCircle, Download, MessageSquare } from 'lucide-react'

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(true)
  const [content, setContent] = useState<string | null>(null)

  useEffect(() => {
    // 模拟从后端获取支付成功后的解锁内容
    const fetchContent = async () => {
      setTimeout(() => {
        setContent("这是你的深度解析报告：\n你的底层代码中存在大量未处理的‘情感异常’。你习惯于在光鲜的社交外壳下隐藏逻辑冲突。建议在接下来的48小时内，关闭外部干扰协议，尝试进行一次系统自检。你的幸运频率是 432Hz，建议多接触自然碳基生命（猫/植物）。")
        setLoading(false)
      }, 2000)
    }
    fetchContent()
  }, [])

  return (
    <main className="max-w-md mx-auto px-6 py-20 text-center space-y-8">
      {loading ? (
        <div className="space-y-4">
          <div className="w-12 h-12 border-2 border-cyber-gold border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-cyber-gold animate-pulse">正在从赛博云端调取你的灵魂档案...</p>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="space-y-8"
        >
          <div className="flex flex-col items-center gap-4">
            <CheckCircle size={64} className="text-cyber-gold" />
            <h1 className="text-2xl font-bold text-cyber-gold">支付成功，档案已解锁</h1>
          </div>

          <div className="glass-morphism p-6 text-left border border-cyber-gold/20">
            <pre className="whitespace-pre-wrap text-sm text-gray-300 font-mono leading-relaxed">
              {content}
            </pre>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-8">
            <button className="flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest">
              <Download size={18} /> 下载 PDF
            </button>
            <button className="flex flex-col items-center gap-2 p-4 bg-cyber-gold/10 border border-cyber-gold/30 text-[10px] uppercase tracking-widest text-cyber-gold">
              <MessageSquare size={18} /> 进入树洞
            </button>
          </div>
        </motion.div>
      )}
    </main>
  )
}
