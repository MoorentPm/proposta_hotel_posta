import { useRef, useState, useCallback } from 'react'
import Reveal from '../components/Reveal'

const BASE = import.meta.env.BASE_URL
const SLIDES = [
  {
    label: 'Camera',
    before: `${BASE}assets/images/camera-before.webp`,
    after:  `${BASE}assets/images/camera-after.webp`,
  },
  {
    label: 'Bagno',
    before: `${BASE}assets/images/bagno-before.webp`,
    after:  `${BASE}assets/images/bagno-after.webp`,
  },
  {
    label: 'Sala Ristorante',
    before: `${BASE}assets/images/sala-before.webp`,
    after:  `${BASE}assets/images/sala-after.webp`,
  },
]

function ComparisonSlider({ before, after }) {
  const [pos, setPos] = useState(50)
  const sliderRef     = useRef(null)
  const dragging      = useRef(false)

  const getPercent = useCallback((clientX) => {
    const rect = sliderRef.current.getBoundingClientRect()
    return Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100))
  }, [])

  return (
    <div
      ref={sliderRef}
      className="relative w-full rounded-xl overflow-hidden shadow-2xl cursor-ew-resize select-none"
      style={{ aspectRatio: '3/4', touchAction: 'pan-y' }}
      onPointerDown={(e) => {
        dragging.current = true
        sliderRef.current.setPointerCapture(e.pointerId)
        setPos(getPercent(e.clientX))
      }}
      onPointerMove={(e) => {
        if (!dragging.current) return
        setPos(getPercent(e.clientX))
      }}
      onPointerUp={() => { dragging.current = false }}
    >
      <div className="absolute inset-0">
        <img src={before} alt="Prima" className="w-full h-full object-cover" draggable={false} />
      </div>
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
        <img src={after} alt="Dopo" className="w-full h-full object-cover" draggable={false} />
      </div>
      <div
        className="absolute inset-y-0 w-0.5 z-20 pointer-events-none"
        style={{ left: `${pos}%`, background: 'rgba(255,255,255,0.5)', transform: 'translateX(-50%)', backdropFilter: 'blur(2px)' }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center"
          style={{ border: '1px solid rgba(255,255,255,0.5)', background: 'rgba(0,0,0,0.2)', backdropFilter: 'blur(12px)' }}
        >
          <span className="material-symbols-outlined text-white" style={{ fontSize: 18 }}>unfold_more</span>
        </div>
      </div>
      <div className="absolute bottom-4 left-4 z-30 font-label text-xs uppercase tracking-widest text-white bg-black/30 px-3 py-1.5 backdrop-blur-md rounded-full pointer-events-none">
        Prima
      </div>
      <div className="absolute bottom-4 right-4 z-30 font-label text-xs uppercase tracking-widest text-white px-3 py-1.5 backdrop-blur-md rounded-full pointer-events-none" style={{ background: 'rgba(109,90,82,0.8)' }}>
        Dopo
      </div>
    </div>
  )
}

export default function Metamorfosi() {
  return (
    <section id="metamorfosi" className="py-32 bg-surface-container-low">
      <div className="max-w-screen-xl mx-auto px-8">

        <div className="text-center mb-16">
          <Reveal>
            <p className="font-label text-secondary uppercase tracking-widest mb-4 text-sm">
              03 / La Metamorfosi
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="font-headline italic mb-4"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
            >
              Dalla Realtà alla Visione
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-on-surface-variant max-w-2xl mx-auto font-light">
              Attraverso l&apos;AI Room Rendering e un home staging curato, anticipiamo il futuro della vostra struttura.
            </p>
          </Reveal>
        </div>

        {/* Griglia 3 slider affiancati */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SLIDES.map((slide, i) => (
            <Reveal key={slide.label} delay={i * 0.1}>
              <div>
                <p className="font-label text-xs uppercase tracking-widest text-center text-on-surface-variant mb-4">
                  {slide.label}
                </p>
                <ComparisonSlider before={slide.before} after={slide.after} />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Info row */}
        <div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 pt-12"
          style={{ borderTop: '1px solid rgba(196,199,199,0.3)' }}
        >
          <Reveal>
            <div className="flex items-start gap-6">
              <span
                className="font-headline italic shrink-0 leading-none"
                style={{ fontSize: 48, color: 'rgba(109,90,82,0.18)' }}
              >01</span>
              <div>
                <h4 className="font-label font-bold text-sm mb-2">AI Room Rendering</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Rendiamo visibile il potenziale di ogni spazio prima ancora di toccare un mobile.
                  Il cliente vede il futuro dell&apos;hotel e prende decisioni in modo informato.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex items-start gap-6">
              <span
                className="font-headline italic shrink-0 leading-none"
                style={{ fontSize: 48, color: 'rgba(109,90,82,0.18)' }}
              >02</span>
              <div>
                <h4 className="font-label font-bold text-sm mb-2">Staging Professionale</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Interventi mirati senza ristrutturazioni invasive: arredi, luci e dettagli calibrati
                  per aumentare ADR e tasso di conversione già dalle prime prenotazioni.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  )
}
