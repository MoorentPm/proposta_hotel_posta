import Reveal from '../components/Reveal'

const EXTRAS = [
  { icon: 'phone_iphone',  n: '①', title: 'Welcome App Personalizzata',     text: "App digitale via QR code in camera o reception. Informazioni sui servizi, mappa della zona, suggerimenti su ristoranti e attrazioni termali. Eleva l'esperienza ospite e riduce le richieste allo staff." },
  { icon: 'hotel_class',   n: '②', title: 'Attivazione Hotel su Airbnb',    text: "Airbnb dispone di un percorso dedicato per strutture ricettive professionali con visibilità e condizioni differenziate. Vi supportiamo nell'attivazione di questo canale specifico — spesso non presidiato dagli hotel tradizionali." },
  { icon: 'camera',        n: '③', title: 'Servizio Fotografico Pro',       text: "Shooting fotografico dedicato a tutte le unità del portfolio. Fotografie professionali aumentano il tasso di conversione degli annunci e supportano tariffe più elevate." },
  { icon: 'design_services',n: '④', title: 'Home Staging e Consulenza Spazi', text: "La nostra designer analizza le camere e propone interventi mirati senza ristrutturazioni invasive. Supporto anche per la pianificazione dei servizi futuri — colazione, wellness, ecc." },
  { icon: 'trending_up',   n: '⑤', title: 'Consulenza Sviluppo Servizi',   text: "Analisi delle opportunità di espansione: colazione, servizi termali, esperienze locali. Ogni nuovo servizio attivato aumenta l'ADR e rafforza il posizionamento nel mercato di Abano Terme." },
  { icon: 'gavel',         n: '⑥', title: 'Adempimenti Burocratici',       text: 'Alloggiati Web, ROSS 1000, comunicazioni ISTAT, tassa di soggiorno. Tutto a carico di Moorent Pm — zero burocrazia per la struttura.' },
]

export default function ServiziExtra() {
  return (
    <section className="py-32 px-8 bg-surface-container-low">
      <div className="max-w-screen-xl mx-auto">

        <div className="text-center mb-16">
          <Reveal>
            <p className="font-label text-secondary uppercase tracking-widest mb-4 text-sm">
              08 / Valore Aggiunto
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="font-headline italic text-primary leading-tight mb-6"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
            >
              Servizi aggiuntivi per crescere insieme.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-on-surface-variant max-w-2xl mx-auto font-light">
              Da attivare in base alle priorità concordate — un ecosistema di competenze per valorizzare
              progressivamente la struttura nel tempo.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {EXTRAS.map((ex, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div
                className="bg-surface p-10 rounded-xl h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-default"
                style={{ border: '1px solid rgba(196,199,199,0.2)' }}
              >
                <span
                  className="material-symbols-outlined text-3xl mb-5 text-secondary block"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {ex.icon}
                </span>
                <h4 className="font-label font-bold text-sm uppercase tracking-widest mb-3 text-on-surface">{ex.title}</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">{ex.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
