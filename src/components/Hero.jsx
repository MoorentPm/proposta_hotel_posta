import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const HERO_IMG = '/assets/images/hero-hotel-posta.webp'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY      = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const contentO = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.5], ['0%', '-10%'])

  return (
    <section
      ref={ref}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <img
          src={HERO_IMG}
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.5)' }}
          draggable={false}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-5xl"
        style={{ opacity: contentO, y: contentY }}
      >
        <motion.h1
          className="font-headline italic text-white tracking-wide leading-tight mb-8"
          style={{ fontSize: 'clamp(48px, 9vw, 120px)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55 }}
        >
          Il vostro{' '}
          <span className="block">Massimo Splendore</span>
        </motion.h1>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <span className="w-px h-24 bg-white/30" />
        </motion.div>
      </motion.div>
    </section>
  )
}
