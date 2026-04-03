import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { href: '#vision',       label: 'Visione'     },
  { href: '#metamorfosi',  label: 'Metamorfosi' },
  { href: '#partnership',  label: 'Partnership' },
  { href: '#servizi',      label: 'Servizi'     },
  { href: '#contatti',     label: 'Contatti'    },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const [active, setActive]     = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const linkColor     = scrolled ? '#6d5a52' : 'rgba(255,255,255,0.8)'
  const linkHover     = scrolled ? '#1b1c1b' : '#ffffff'
  const linkActive    = scrolled ? '#1b1c1b' : '#ffffff'
  const linkActiveBdr = scrolled ? '#1b1c1b' : 'rgba(255,255,255,0.8)'

  return (
    <>
      <motion.nav
        className="fixed top-0 w-full z-50"
        animate={{
          backgroundColor:    scrolled ? 'rgba(251,249,248,0.45)' : 'rgba(0,0,0,0)',
          backdropFilter:     scrolled ? 'blur(48px)' : 'blur(0px)',
          WebkitBackdropFilter: scrolled ? 'blur(48px)' : 'blur(0px)',
          borderBottomColor:  scrolled ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0)',
        }}
        style={{ borderBottomWidth: 1, borderBottomStyle: 'solid' }}
        transition={{ duration: 0.25 }}
      >
        <div className="flex justify-between items-center px-8 py-6 w-full max-w-screen-2xl mx-auto">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-lg font-headline tracking-[0.2em] no-underline"
            animate={{ color: scrolled ? '#1b1c1b' : '#ffffff' }}
            transition={{ duration: 0.25 }}
          >
            Moorent Pm
          </motion.a>

          {/* Desktop links */}
          <div className="hidden md:flex gap-12">
            {LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setActive(href)}
                className="font-body font-light tracking-tight no-underline transition-colors duration-150"
                style={{
                  color: active === href ? linkActive : linkColor,
                  borderBottom: active === href ? `1px solid ${linkActiveBdr}` : '1px solid transparent',
                  paddingBottom: 4,
                }}
                onMouseEnter={e => { if (active !== href) e.currentTarget.style.color = linkHover }}
                onMouseLeave={e => { if (active !== href) e.currentTarget.style.color = linkColor }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            href="#contatti"
            className="hidden md:inline-block rounded-full px-8 py-2.5 font-label text-xs uppercase tracking-widest no-underline transition-all duration-150"
            animate={scrolled
              ? { backgroundColor: '#1b1c1b', color: '#fbf9f8', borderColor: '#1b1c1b' }
              : { backgroundColor: 'rgba(255,255,255,0.15)', color: '#ffffff', borderColor: 'rgba(255,255,255,0.6)' }
            }
            style={{ border: '1px solid' }}
            whileHover={{ opacity: 0.8 }}
            transition={{ duration: 0.25 }}
          >
            Connect
          </motion.a>

          {/* Hamburger */}
          <button
            className="md:hidden bg-transparent border-0 p-1 cursor-pointer flex flex-col gap-[5px]"
            onClick={() => setOpen(o => !o)}
            aria-label="Menu"
          >
            <motion.span className="block w-[22px] h-px bg-on-surface"
              animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }} />
            <motion.span className="block w-[22px] h-px bg-on-surface"
              animate={{ opacity: open ? 0 : 1 }} />
            <motion.span className="block w-[22px] h-px bg-on-surface"
              animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-surface flex flex-col items-center justify-center gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {LINKS.map(({ href, label }, i) => (
              <motion.a
                key={href}
                href={href}
                className="font-headline italic text-5xl text-on-surface hover:text-secondary transition-colors no-underline"
                onClick={() => { setOpen(false); setActive(href) }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
              >
                {label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
