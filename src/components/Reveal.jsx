import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * Wraps children in a scroll-triggered entrance animation.
 * @param {string}  direction  'up' | 'left' | 'right' | 'none'
 * @param {number}  delay      seconds
 * @param {string}  className  extra Tailwind classes on the wrapper
 * @param {boolean} once       animate only first time (default true)
 */
export default function Reveal({
  children,
  delay   = 0,
  direction = 'up',
  className = '',
  once    = true,
  as      = 'div',
}) {
  const ref   = useRef(null)
  const inView = useInView(ref, { once, margin: '0px 0px' })

  const offsets = {
    up:    { y: 28, x: 0  },
    left:  { y: 0,  x: -28 },
    right: { y: 0,  x: 28 },
    none:  { y: 0,  x: 0  },
  }

  const { x, y } = offsets[direction] ?? offsets.up

  const variants = {
    hidden:  { opacity: 0, x, y },
    visible: {
      opacity: 1, x: 0, y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay,
      },
    },
  }

  const Tag = motion[as] ?? motion.div

  return (
    <Tag
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {children}
    </Tag>
  )
}
