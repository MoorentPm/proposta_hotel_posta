import Reveal from '../components/Reveal'

const FEATURES = [
  'Progettazione grafica personalizzata e allineata al brand della struttura',
  'Design moderno, mobile-first e ottimizzato per la velocità',
  'SEO locale per intercettare ricerche organiche su Abano Terme',
  'Integrazione con sistema di prenotazione diretta (booking engine)',
  'Gestione autonoma dei contenuti senza competenze tecniche',
  'Galleria fotografica delle camere e degli spazi comuni',
  "Sezione servizi futuri (colazione, wellness) pronta all'attivazione",
  "Consegna completa con formazione all'uso inclusa",
  'Piena proprietà del sito — nessun canone mensile obbligatorio',
]

export default function SitoWeb() {
  return (
    <section className="py-32 px-8 bg-surface-container-low">
      <div className="max-w-screen-xl mx-auto">

        <div className="text-center mb-16">
          <Reveal>
            <p className="font-label text-secondary uppercase tracking-widest mb-4 text-sm">
              06 / Investimento Strategico
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="font-headline text-primary leading-tight"
              style={{ fontSize: 'clamp(36px, 4.5vw, 60px)' }}
            >
              Il vostro sito web,{' '}
              <span className="italic text-secondary">rifatto da zero.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left: text */}
          <div>
            <Reveal>
              <div className="space-y-5 text-on-surface-variant text-lg leading-relaxed font-light mb-10">
                <p>
                  Un sito web professionale non è un costo — è l&apos;unico asset digitale che lavora per
                  voi ogni giorno, senza commissioni, senza intermediari. Ogni prenotazione diretta
                  che genera vi fa risparmiare il 18% di commissione OTA.
                </p>
                <p>
                  Progettiamo siti moderni, veloci, ottimizzati per i motori di ricerca e pensati per
                  convertire i visitatori in ospiti.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xs italic text-on-surface-variant font-light">
                Il sito si propone come servizio separato a prezzo fisso concordato — distinto dalla
                commissione di gestione. Un&apos;unica fee, nessuna sorpresa, piena proprietà.
              </p>
            </Reveal>
          </div>

          {/* Right: feature card */}
          <Reveal delay={0.2}>
            <div className="glass-card rounded-xl p-10" style={{ border: '1px solid rgba(196,199,199,0.2)' }}>
              <p className="font-label text-xs tracking-widest text-secondary mb-4 uppercase">Proposta Separata · Prezzo Fisso</p>
              <h3 className="font-headline text-3xl text-primary mb-1">Sito Web Professionale</h3>
              <p className="font-headline text-5xl text-primary mb-1">€ <em className="italic">——</em></p>
              <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-8">Prezzo fisso concordato · Pagamento unico</p>
              <ul className="space-y-3" style={{ borderTop: '1px solid rgba(196,199,199,0.3)', paddingTop: 24 }}>
                {FEATURES.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-secondary flex-shrink-0" style={{ fontSize: 16, fontVariationSettings: "'FILL' 1", marginTop: 2 }}>check_circle</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
