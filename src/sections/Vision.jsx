import Reveal from '../components/Reveal'

const IMG_MAIN  = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYxy4_55aNe3-9_-XuuEKBJhNYyd22BkK_5tLMZ2BfAJIYDB2kQzKDBluY5xIcc2FH_d7i9rJOdt93mGWaPfhF_rSblpztDiQjNS8QjRtl40yqan410U8V3Sxl4wdoYmCM9Fjak590YNZDXencndpbaBffJtkK8K5trOXYbSYg-DJ9ZLiE9py9yv1jPPWctEwEdg_fbysAmWqvcwNVNKMm4tzumyejb8MQenJo9azKupRY5iTogDd43zb8-AOnUuujcOdcGb3uIaKG'
const IMG_FLOAT = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBodcbteXdaGREZxjzdns_CUTyq4kXHHLhLp_2sB-4ffcbgc-uJaNpBSS1W3OxkE_4Z5LSljlil1VIgz4O418Go2IlL9k41MZ5vtUbXlovXsE4sL4_e5IMfq7J8x0cs7j8Cn3XUXJ2NLByFBFVUowubyvT-Yk-qE4i95aGdkF4i8Qqh6nEmbVgmH_Kwrh-bCKoHDkNcM9hsNZi8GIiRCqt6tmzB6FiSh-9laMe9zmaOg3IJU7slDLfZP8Y66r41fWtjVfC5KFJQwXet'

const PILLARS = [
  { n: '01', title: 'Selezione e Cura Diretta',   text: "Scegliamo con cura le strutture con cui collaborare — chi sceglie noi sa che non sarà mai un numero in un portafoglio. Dietro ogni proprietà c'è una persona, un progetto, un patrimonio." },
  { n: '02', title: 'Revenue Management',          text: 'Pricing dinamico basato su dati di mercato in tempo reale. ADR e RevPAR monitorati giorno per giorno su ogni unità del portfolio.' },
  { n: '03', title: 'Piattaforme e Burocrazia',    text: 'Gestione integrata di Airbnb, Booking.com e tutti i canali rilevanti, con Alloggiati Web, ROSS 1000 e tassa di soggiorno. Zero incombenze per la struttura.' },
  { n: '04', title: 'Visione a Lungo Termine',     text: 'Non gestiamo solo prenotazioni — costruiamo valore nel tempo. Ogni azione sulla vostra struttura aumenta il posizionamento e il rendimento progressivo.' },
]

export default function Vision() {
  return (
    <section id="vision" className="py-32 px-8 bg-surface">
      <div className="max-w-screen-xl mx-auto">

        {/* Top editorial grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center mb-24">
          <div className="md:col-span-7">
            <Reveal>
              <p className="font-label text-secondary uppercase tracking-widest mb-4 text-sm">
                01 / L&apos;Evoluzione
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                className="font-headline text-primary leading-tight mb-12"
                style={{ fontSize: 'clamp(40px, 5vw, 72px)' }}
              >
                Un team selettivo per un&apos;eccellenza{' '}
                <span className="italic text-secondary">senza tempo.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="max-w-xl space-y-6 text-on-surface-variant font-body text-lg leading-relaxed font-light">
                <p>
                  Moorent Pm è specializzato nella gestione professionale degli affitti brevi nel
                  Triveneto. Non siamo un grande network: siamo un team selettivo che segue ogni
                  struttura con attenzione diretta e competenza in revenue management.
                </p>
                <p>
                  In Abano Terme, il lusso non è solo fango e acqua termale: è l&apos;emozione di
                  riscoprirsi in un ambiente che anticipa ogni desiderio. La vostra struttura merita
                  di essere raccontata — e noi sappiamo come farlo.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Images */}
          <Reveal delay={0.25} direction="right" className="md:col-span-5 relative hidden md:block">
            <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-2xl">
              <img src={IMG_MAIN} alt="Suite di lusso" className="w-full h-full object-cover" draggable={false} />
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-64 overflow-hidden rounded-lg shadow-xl border-4 border-white">
              <img src={IMG_FLOAT} alt="Dettagli premium" className="w-full h-full object-cover" draggable={false} />
            </div>
          </Reveal>
        </div>

        {/* Pillars 2×2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-outline-variant/30 rounded-lg overflow-hidden">
          {PILLARS.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.1}>
              <div
                className="p-12 h-full transition-colors duration-300 cursor-default"
                style={{
                  borderRight:  i % 2 === 0 ? '1px solid rgba(196,199,199,0.3)' : 'none',
                  borderBottom: i < 2       ? '1px solid rgba(196,199,199,0.3)' : 'none',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#f5f3f2' }}
                onMouseLeave={e => { e.currentTarget.style.background = '' }}
              >
                <div className="font-headline text-5xl text-secondary-fixed-dim leading-none mb-4">{p.n}</div>
                <h4 className="font-label text-xs font-semibold tracking-widest uppercase text-on-surface mb-3">{p.title}</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
