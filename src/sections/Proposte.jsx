import Reveal from '../components/Reveal'
import { motion } from 'framer-motion'

const LIST_A = [
  { icon: 'check_circle', text: '5 camere a scelta per testare il modello' },
  { icon: 'check_circle', text: 'Revenue management e pricing dinamico' },
  { icon: 'check_circle', text: 'Apertura annunci su tutti i canali' },
  { icon: 'check_circle', text: 'Gestione completa comunicazione ospiti' },
  { icon: 'check_circle', text: 'Alloggiati Web · ROSS 1000 · Tassa soggiorno' },
  { icon: 'check_circle', text: 'Reportistica mensile performance' },
]
const LIST_B = [
  { icon: 'verified', text: 'Intero portfolio in gestione dal giorno 1' },
  { icon: 'verified', text: 'Commissione ridotta per scala del portfolio' },
  { icon: 'verified', text: 'Revenue management avanzato per tipologia' },
  { icon: 'verified', text: 'Full Digital Concierge · Comunicazione ospiti' },
  { icon: 'verified', text: 'Sito Web Premium (0% Commissioni)' },
  { icon: 'verified', text: 'Shooting fotografico e Home Staging inclusi' },
]

export default function Proposte() {
  return (
    <section id="partnership" className="py-32 px-8 bg-surface">
      <div className="max-w-screen-xl mx-auto">

        <div className="text-center mb-16">
          <Reveal>
            <p className="font-label text-secondary uppercase tracking-widest mb-4 text-sm">
              04 / Le Nostre Proposte
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="font-headline text-primary leading-tight mb-6"
              style={{ fontSize: 'clamp(36px, 4.5vw, 60px)' }}
            >
              Due percorsi,{' '}
              <span className="italic text-secondary">un obiettivo.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-on-surface-variant max-w-2xl mx-auto font-light">
              La commissione si calcola sempre al netto delle commissioni OTA e dei costi di pulizia — nessuna voce nascosta.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Option A — Glass card */}
          <Reveal>
            <motion.div
              className="glass-card p-12 rounded-xl flex flex-col justify-between h-full"
              style={{ border: '1px solid rgba(196,199,199,0.2)' }}
              whileHover={{ y: -8, boxShadow: '0 32px 80px rgba(0,0,0,0.12)' }}
              transition={{ duration: 0.45 }}
            >
              <div>
                <p className="font-label text-xs tracking-widest text-secondary mb-6 uppercase">Opzione 01</p>
                <h3 className="font-headline text-4xl mb-4">Percorso Pilota</h3>
                <p className="text-on-surface-variant mb-8 leading-relaxed font-light text-sm">
                  Un ingresso graduale nella gestione digitale. Testiamo il mercato con 5 camere selezionate,
                  ottimizziamo i flussi e iniziamo a costruire la vostra nuova identità sul mercato.
                </p>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-headline text-6xl text-primary">10%</span>
                  <span className="font-label text-xs uppercase tracking-widest text-secondary">Commissione</span>
                </div>
                <p className="text-xs text-on-surface-variant mb-10 font-light">
                  Netto commissioni OTA · Netto costo pulizie
                </p>
              </div>
              <ul className="space-y-3 mb-10">
                {LIST_A.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-secondary" style={{ fontSize: 18, fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                    {item.text}
                  </li>
                ))}
                <li className="text-xs text-on-surface-variant italic pt-2 pl-7">
                  Espandibile a tutto il portfolio in qualsiasi momento
                </li>
              </ul>
              <button
                className="w-full py-4 rounded-full border border-primary font-label text-xs uppercase tracking-widest transition-all duration-300 hover:bg-primary hover:text-white bg-transparent text-primary"
              >
                Scegli Percorso Pilota
              </button>
            </motion.div>
          </Reveal>

          {/* Option B — Black card */}
          <Reveal delay={0.15}>
            <motion.div
              className="bg-primary p-12 rounded-xl text-on-primary flex flex-col justify-between h-full relative overflow-hidden"
              whileHover={{ y: -8, boxShadow: '0 32px 80px rgba(0,0,0,0.25)' }}
              transition={{ duration: 0.45 }}
            >
              <div className="absolute top-0 right-0 p-4">
                <span className="bg-secondary text-white text-xs font-label px-3 py-1.5 rounded-full uppercase tracking-widest">
                  Consigliata
                </span>
              </div>
              <div>
                <p className="font-label text-xs tracking-widest text-on-primary-container mb-6 uppercase">Opzione 02</p>
                <h3 className="font-headline text-4xl mb-4 text-white">Partnership Completa</h3>
                <p className="text-on-primary-container mb-8 leading-relaxed font-light text-sm">
                  L&apos;ecosistema Moorent al servizio del vostro Hotel. Massima integrazione, commissione
                  ridotta e trasformazione totale del brand digitale della struttura.
                </p>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-headline text-6xl text-white">8%</span>
                  <span className="font-label text-xs uppercase tracking-widest text-on-primary-container">Commissione</span>
                </div>
                <p className="text-xs text-on-primary-container mb-10 font-light">
                  Netto commissioni OTA · Netto costo pulizie
                </p>
              </div>
              <ul className="space-y-3 mb-10">
                {LIST_B.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-on-primary-container">
                    <span className="material-symbols-outlined text-secondary-fixed-dim" style={{ fontSize: 18, fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
              <button
                className="w-full py-4 rounded-full bg-white text-primary font-label text-xs uppercase tracking-widest transition-all duration-300 hover:bg-secondary hover:text-white"
              >
                Inizia la Trasformazione
              </button>
            </motion.div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
