import Reveal from '../components/Reveal'

const SERVICES = [
  { icon: 'hotel',         title: 'Apertura e Ottimizzazione Annunci',    text: 'Creazione professionale dei profili su Airbnb, Booking.com e canali aggiuntivi. Tutto calibrato per massimizzare visibilità e conversione.' },
  { icon: 'payments',      title: 'Revenue Management e Pricing Dinamico',text: 'Tariffe aggiornate in tempo reale su domanda, stagionalità, eventi locali e benchmark di mercato. Obiettivo: massimizzare ADR e RevPAR.' },
  { icon: 'support_agent', title: 'Comunicazione Ospiti — 360°',          text: 'Gestione completa dei messaggi in tutte le fasi: pre-arrivo, soggiorno e post-checkout. Raccolta attiva di recensioni positive.' },
  { icon: 'assignment',    title: 'Schedine Alloggiati Web e ROSS 1000',  text: 'Invio automatizzato per ogni ospite. Adempimento puntuale di ogni obbligo comunicativo senza carico sulla struttura.' },
  { icon: 'receipt_long',  title: 'Gestione Tassa di Soggiorno',          text: 'Calcolo, raccolta e rendicontazione della tassa di soggiorno per ogni prenotazione, con documentazione completa e trasparente.' },
  { icon: 'monitoring',    title: 'Reportistica Mensile',                  text: 'Report con occupazione, tariffa media, ricavo per unità, performance per canale e benchmark locali del mercato di Abano Terme.' },
]

export default function Servizi() {
  return (
    <section id="servizi" className="py-32 px-8 bg-surface">
      <div className="max-w-screen-xl mx-auto">

        <div className="text-center mb-20">
          <Reveal>
            <p className="font-label text-secondary uppercase tracking-widest mb-4 text-sm">
              07 / Gestione Inclusa
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="font-headline italic mb-6"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
            >
              L&apos;Arte della Gestione Quotidiana
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-on-surface-variant max-w-2xl mx-auto font-light">
              Ci occupiamo di ogni dettaglio per permettervi di concentrarvi solo sull&apos;accoglienza.
              Dal momento in cui l&apos;ospite cerca online fino alla recensione finale.
            </p>
          </Reveal>
        </div>

        {/* Services grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 rounded-xl overflow-hidden"
          style={{ border: '1px solid rgba(196,199,199,0.2)' }}
        >
          {SERVICES.map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div
                className="p-12 bg-surface transition-colors duration-300 cursor-default"
                style={{
                  borderRight:  (i + 1) % 3 !== 0 ? '1px solid rgba(196,199,199,0.2)' : 'none',
                  borderBottom: i < 3              ? '1px solid rgba(196,199,199,0.2)' : 'none',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#f5f3f2' }}
                onMouseLeave={e => { e.currentTarget.style.background = '' }}
              >
                <span
                  className="material-symbols-outlined text-4xl mb-6 text-secondary block"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {s.icon}
                </span>
                <h4 className="font-headline text-xl mb-4">{s.title}</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Not included */}
        <Reveal delay={0.2}>
          <div className="mt-8 flex gap-4 items-start p-6 rounded-xl bg-surface-container-low" style={{ border: '1px solid rgba(196,199,199,0.2)' }}>
            <span className="material-symbols-outlined text-secondary flex-shrink-0" style={{ fontSize: 20 }}>info</span>
            <p className="text-sm text-on-surface-variant font-light leading-relaxed">
              <span className="font-medium text-on-surface">Non incluso: </span>
              Pulizie e cambio biancheria, check-in e check-out fisico, gestione dei costi operativi
              interni. Queste attività restano in carico al vostro team, con il quale ci coordiniamo
              costantemente su ogni arrivo.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
