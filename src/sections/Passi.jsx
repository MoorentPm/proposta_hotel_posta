import Reveal from '../components/Reveal'
import { motion } from 'framer-motion'

const STEPS = [
  { n: '01', title: 'Revisione Legale e Commerciale',  text: 'Condivisione con il vostro consulente legale. Forniamo bozza contrattuale su richiesta per accelerare i tempi.' },
  { n: '02', title: "Call o Incontro di Approfondimento", text: 'Una videochiamata o incontro diretto per rispondere a ogni domanda e chiarire i dettagli operativi.' },
  { n: '03', title: "Scelta dell'Opzione e dei Servizi",  text: "Definizione dell'opzione preferita (A o B), delle unità da includere e dei servizi aggiuntivi da attivare." },
  { n: '04', title: "Firma dell'Accordo",                text: 'Contratto chiaro, senza clausole nascoste, progettato per tutelare entrambe le parti in modo equilibrato.' },
  { n: '05', title: 'Onboarding e Avvio Operativo',    text: 'Sopralluogo, shooting, apertura e configurazione degli annunci. Operativi entro 7–10 giorni lavorativi dalla firma.' },
]

export default function Passi() {
  return (
    <section className="py-32 px-8 bg-surface-container-highest">
      <div className="max-w-screen-xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="font-label text-secondary uppercase tracking-widest mb-4 text-sm">
                09 / Come Procedere
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                className="font-headline leading-tight mb-6"
                style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}
              >
                Prossimi <span className="italic text-secondary">passi.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-on-surface-variant font-light leading-relaxed text-sm">
                La presente proposta è redatta per essere condivisa con i vostri consulenti. Siamo
                disponibili per qualsiasi approfondimento prima della firma.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <motion.div
                  className="flex items-start gap-8 py-8 cursor-default"
                  style={{ borderBottom: i < STEPS.length - 1 ? '1px solid rgba(196,199,199,0.3)' : 'none' }}
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="font-headline text-3xl text-secondary flex-shrink-0 leading-none">{s.n}</span>
                  <div>
                    <h4 className="font-label font-bold text-sm uppercase tracking-widest text-on-surface mb-2">{s.title}</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{s.text}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
