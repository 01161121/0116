'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Moon, Zap, ArrowRight, Share2, Lock } from 'lucide-react'
import { ENERGY_TEST_QUESTIONS } from '@/lib/ai'
// -ZCY--0116-- 只需要修改这里 ---
const MY_WECHAT = "ZCY--0116" // 改成你真实的微信号
// ----------------------

export default function Home() {
  const [step, setStep] = useState<'landing' | 'test' | 'result'>('landing')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)

  const handleStart = () => setStep('test')

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value]
    setAnswers(newAnswers)
    
    if (currentQuestion < ENERGY_TEST_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      generateResult(newAnswers)
    }
  }

  const generateResult = async (finalAnswers: string[]) => {
    setLoading(true)
    // 模拟生成结果
    setTimeout(() => {
      setResult({
        energy: Math.floor(Math.random() * 40 + 60),
        tag: finalAnswers.includes('water') ? '流动的忧郁' : '高频震荡者',
        desc: "你的系统正在经历一场无声的重构。目前的能量频率显示，你正处于某种进化的边缘。",
        nickname: "赛博浪人"
      })
      setStep('result')
      setLoading(false)
    }, 2000)
  }

  return (
    <main className="relative z-10 max-w-md mx-auto px-6 pt-20 pb-12">
      <AnimatePresence mode="wait">
        {step === 'landing' && (
          <motion.div
            key="landing"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center space-y-8"
          >
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-cyber-neon blur opacity-30 animate-pulse" />
              <h1 className="relative text-5xl font-bold tracking-tighter neon-text">
                灵魂镜像
              </h1>
            </div>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              在赛博荒原中，<br />
              寻找你失散的底层代码。
            </p>
            <div className="pt-12">
              <button
                onClick={handleStart}
                className="group relative w-full py-4 bg-white text-black font-bold rounded-none overflow-hidden transition-all hover:bg-cyber-neon hover:text-white"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  开始今日能量测试 <ArrowRight size={18} />
                </span>
              </button>
            </div>
            <div className="flex justify-center gap-8 text-xs text-gray-500 pt-8 uppercase tracking-widest">
              <span className="flex items-center gap-1"><Sparkles size={12}/> AI 驱动</span>
              <span className="flex items-center gap-1"><Moon size={12}/> 深度解析</span>
              <span className="flex items-center gap-1"><Zap size={12}/> 秒级交付</span>
            </div>
          </motion.div>
        )}

        {step === 'test' && (
          <motion.div
            key="test"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-12"
          >
            <div className="space-y-2">
              <div className="text-cyber-neon text-xs tracking-widest uppercase">
                Question {currentQuestion + 1} / {ENERGY_TEST_QUESTIONS.length}
              </div>
              <h2 className="text-2xl font-medium leading-snug">
                {ENERGY_TEST_QUESTIONS[currentQuestion].question}
              </h2>
            </div>
            <div className="space-y-4">
              {ENERGY_TEST_QUESTIONS[currentQuestion].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(opt.value)}
                  className="w-full text-left p-5 glass-morphism border border-white/10 hover:border-cyber-neon transition-all group"
                >
                  <span className="text-gray-400 group-hover:text-cyber-neon transition-colors">
                    {opt.label}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 'result' && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-8"
          >
            {/* 能量签 Card */}
            <div className="relative p-8 border border-white/20 bg-cyber-zen/50 overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20"><Sparkles /></div>
              <div className="space-y-6 relative z-10">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-tighter">Energy Level</div>
                    <div className="text-4xl font-bold text-cyber-neon">{result.energy}%</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500 uppercase tracking-tighter">Subject</div>
                    <div className="font-medium">{result.nickname}</div>
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="space-y-2">
                  <div className="inline-block px-2 py-1 bg-cyber-purple/20 text-cyber-neon text-[10px] uppercase tracking-widest">
                    {result.tag}
                  </div>
                  <p className="text-gray-300 italic text-sm leading-relaxed">
                    "{result.desc}"
                  </p>
                </div>
                <div className="pt-4 flex justify-between items-center text-[10px] text-gray-600 uppercase">
                  <span>Soul Mirror OS v2.0</span>
                  <span>{new Date().toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            {/* 变现转化点：改为微信私域手动转化 (零成本) */}
            <div className="space-y-4">
              <h3 className="text-center text-sm text-gray-400 uppercase tracking-widest">深度解锁</h3>
              <div className="grid grid-cols-1 gap-4">
                <button 
                  onClick={() => alert(`请添加赛博祭司微信：${MY_WECHAT}\n发送“深度解析”获取解锁码`)}
                  className="flex items-center justify-between p-4 bg-cyber-purple/10 border border-cyber-purple/30 hover:bg-cyber-purple/20 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-cyber-purple/20 rounded-full"><Sparkles size={16} className="text-cyber-neon"/></div>
                    <div className="text-left">
                      <div className="text-sm font-bold">深度运势报告</div>
                      <div className="text-[10px] text-gray-400">联系“祭司”人工解锁 (限时 9.9)</div>
                    </div>
                  </div>
                  <div className="text-cyber-neon font-bold">解锁</div>
                </button>
                <button 
                  className="flex items-center justify-between p-4 bg-cyber-gold/10 border border-cyber-gold/30 hover:bg-cyber-gold/20 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-cyber-gold/20 rounded-full"><Share2 size={16} className="text-cyber-gold"/></div>
                    <div className="text-left">
                      <div className="text-sm font-bold">分享免费解锁</div>
                      <div className="text-[10px] text-gray-400">分享至 3 个群后截图私聊解锁</div>
                    </div>
                  </div>
                  <div className="text-cyber-gold font-bold">免费</div>
                </button>
              </div>
            </div>

            <button className="w-full flex items-center justify-center gap-2 py-4 text-xs text-gray-500 uppercase tracking-widest hover:text-white transition-colors">
              <Share2 size={14} /> 保存并分享到朋友圈
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-cyber-black/80 backdrop-blur-sm">
          <div className="text-center space-y-4">
            <div className="w-12 h-12 border-2 border-cyber-neon border-t-transparent rounded-full animate-spin mx-auto" />
            <div className="text-xs text-cyber-neon uppercase tracking-widest animate-pulse">正在同步灵魂频率...</div>
          </div>
        </div>
      )}
    </main>
  )
}
