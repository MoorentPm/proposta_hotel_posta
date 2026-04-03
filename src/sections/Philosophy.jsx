import Reveal from '../components/Reveal'

const STEPS = [
  { n: '①', title: 'Foto e Annunci',       text: 'Prima impressione digitale. Base di tutto il funnel di prenotazione.' },
  { n: '②', title: 'Pricing e Revenue',    text: 'Ottimizzazione continua di occupazione e tariffa media per ogni unità.' },
  { n: '③', title: 'Staging e Spazi',      text: 'Valorizzazione fisica di ogni camera per sostenere tariffe crescenti.' },
  { n: '④', title: 'Prenotazioni Dirette', text: "Sito web e brand propri per ridurre la dipendenza dalle OTA nel tempo." },
]

export default function Philosophy() {
  return (
    <section className="py-32 px-8 bg-surface-container-highest">
      <div className="max-w-screen-xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-20">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="font-label text-secondary uppercase tracking-widest mb-4 text-sm">
                02 / Filosofia di Lavoro
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                className="font-headline text-primary leading-tight mb-8"
                style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
              >
                Valorizzazione{' '}
                <span className="italic text-secondary">progressiva.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="space-y-5 text-on-surface-variant text-lg leading-relaxed font-light max-w-xl">
                <p>
                  La nostra collaborazione non si misura solo sulle prenotazioni del mese. Ogni
                  intervento che facciamo — una foto migliore, un annuncio ottimizzato, una camera
                  ristrutturata, un sito web diretto — si somma al precedente e aumenta il valore
                  complessivo della struttura nel tempo.
                </p>
                <p>
                  Trattiamo ogni camera come un asset da far crescere, non come un&apos;unità da
                  riempire. È questa differenza che rende la collaborazione con Moorent Pm un
                  investimento, non solo un costo.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Quote */}
          <Reveal delay={0.3} direction="right" className="lg:col-span-5">
            <div className="bg-surface rounded-xl p-10 shadow-sm" style={{ borderLeft: '3px solid #6d5a52' }}>
              <p className="font-headline text-2xl italic leading-relaxed text-primary mb-5">
                &ldquo;Ogni miglioramento che facciamo oggi sul vostro immobile vale il doppio domani.&rdquo;
              </p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Il posizionamento tariffario, la reputazione sulle piattaforme e il valore percepito
                dagli ospiti si costruiscono con azioni continue e coerenti.
              </p>
            </div>
          </Reveal>
        </div>

        {/* 4-step flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div
                className="bg-surface rounded-xl p-8 h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-default"
              >
                <div className="font-headline text-4xl text-secondary leading-none mb-4">{s.n}</div>
                <h5 className="font-label text-xs font-semibold tracking-widest uppercase text-on-surface mb-2">{s.title}</h5>
                <p className="text-sm text-on-surface-variant leading-relaxed">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
