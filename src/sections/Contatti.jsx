import Reveal from '../components/Reveal'

const IMG_CTA = `${import.meta.env.BASE_URL}assets/images/contatti-cta.webp`

const MINI_STEPS = [
  { n: '01', title: 'Analisi conoscitiva',  sub: 'Valutiamo insieme lo stato attuale e gli obiettivi di crescita.' },
  { n: '02', title: 'Proposta sartoriale', sub: "Definiamo il piano d'azione e il modello di commissione ideale." },
  { n: '03', title: 'Onboarding',          sub: 'Inizio della trasformazione estetica e operativa entro 10 giorni.' },
]

export default function Contatti() {
  return (
    <section id="contatti" className="py-32 px-8 bg-primary text-on-primary">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* Left */}
        <div>
          <Reveal>
            <h2
              className="font-headline italic mb-8 text-white"
              style={{ fontSize: 'clamp(36px, 4.5vw, 60px)' }}
            >
              Pronti per il prossimo capitolo?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-on-primary-container text-lg mb-12 font-light leading-relaxed">
              Il percorso verso l&apos;eccellenza digitale inizia con un semplice incontro conoscitivo.
              Valutiamo insieme lo stato attuale, gli obiettivi e il piano d&apos;azione ideale.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="space-y-8 mb-12">
              {MINI_STEPS.map((s, i) => (
                <div key={i} className="flex items-start gap-6">
                  <span className="font-headline text-3xl text-secondary flex-shrink-0 leading-none">{s.n}</span>
                  <div>
                    <h5 className="font-bold text-sm mb-1 text-white">{s.title}</h5>
                    <p className="text-sm text-on-primary-container">{s.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="space-y-3 mb-10 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              {[
                { label: 'Email',         val: 'info@moorentpm.it',    href: 'mailto:info@moorentpm.it' },
                { label: 'Sito Web',      val: 'moorentpm.it',         href: 'https://moorentpm.it' },
                { label: 'Link & Social', val: 'linktr.ee/moorentpm',  href: 'https://linktr.ee/moorentpm' },
              ].map((c, i) => (
                <div key={i}>
                  <p className="font-label text-xs uppercase tracking-widest text-on-primary-container mb-0.5">{c.label}</p>
                  <a
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-secondary-fixed-dim transition-colors no-underline text-sm"
                  >
                    {c.val}
                  </a>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right — image with CTA button */}
        <Reveal delay={0.3} direction="right">
          <div className="relative">
            <img
              src={IMG_CTA}
              alt="Hotel vista panoramica"
              className="rounded-xl shadow-2xl w-full object-cover"
              style={{ height: 520, filter: 'brightness(0.75)' }}
              draggable={false}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <a
                href="mailto:info@moorentpm.it"
                className="bg-white text-primary px-12 py-5 rounded-full font-label text-xs uppercase tracking-widest transition-all duration-300 hover:bg-secondary hover:text-white shadow-xl no-underline"
              >
                Fissa un Incontro
              </a>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
