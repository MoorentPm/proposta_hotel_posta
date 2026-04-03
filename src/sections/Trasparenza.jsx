import Reveal from '../components/Reveal'

export default function Trasparenza() {
  return (
    <section className="py-32 px-8 bg-surface-container-highest">
      <div className="max-w-screen-xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left */}
          <div className="lg:col-span-4">
            <Reveal>
              <p className="font-label text-secondary uppercase tracking-widest mb-4 text-sm">
                05 / Trasparenza Economica
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-headline mb-8" style={{ fontSize: 'clamp(32px, 3.5vw, 48px)' }}>
                Risparmio Strategico
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-on-surface-variant font-light mb-8 leading-relaxed text-sm">
                Riduciamo progressivamente la dipendenza dalle OTA. Il sito web della vostra struttura
                non sarà solo una vetrina — sarà il vostro miglior venditore, senza commissioni.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="p-8 bg-surface rounded-xl shadow-sm">
                <p className="font-label text-xs uppercase tracking-widest text-secondary mb-2">Obiettivo Diretto</p>
                <p className="font-headline text-3xl text-primary">€ 0.00</p>
                <p className="text-xs text-on-surface-variant mt-2">Commissioni su prenotazioni dirette</p>
              </div>
            </Reveal>
            <Reveal delay={0.35}>
              <div className="mt-4 p-8 bg-surface rounded-xl shadow-sm">
                <p className="font-label text-xs uppercase tracking-widest text-secondary mb-4">Formula di calcolo</p>
                <div className="text-sm text-on-surface-variant leading-loose font-light">
                  <span className="text-on-surface font-medium">Prenotazione lorda</span><br />
                  − Commissione OTA (se presente)<br />
                  − Costo pulizie (€ 20)<br />
                  <span className="block h-px my-2" style={{ background: 'rgba(196,199,199,0.4)' }} />
                  = Base commissione Moorent Pm<br />
                  × <span className="text-secondary font-medium">8%</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right — Table */}
          <div className="lg:col-span-8">
            <Reveal delay={0.2}>
              <div className="overflow-x-auto">
                <table className="w-full text-left font-body" style={{ borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid #747878' }}>
                      <th className="py-6 font-label text-xs uppercase tracking-widest text-on-surface-variant">Scenario</th>
                      <th className="py-6 font-label text-xs uppercase tracking-widest text-on-surface-variant">Commissione</th>
                      <th className="py-6 font-label text-xs uppercase tracking-widest text-on-surface-variant">Incasso netto (su €500)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { canale: 'Booking.com / Expedia', comm: '18% - 25%', netto: '€ 358,80', accent: false },
                      { canale: 'Sito Web Proprietario', comm: '0%',         netto: '€ 441,60', accent: true },
                      { canale: 'Moorent Ecosystem',     comm: '8% netto',   netto: 'Prezzo Dinamico & Revenue', accent: false },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        style={{ borderBottom: '1px solid rgba(196,199,199,0.3)' }}
                      >
                        <td className="py-6 font-medium text-sm text-on-surface">{row.canale}</td>
                        <td className="py-6 text-sm text-on-surface-variant">{row.comm}</td>
                        <td
                          className="py-6 font-medium text-sm"
                          style={{ color: row.accent ? '#000' : '#444748' }}
                        >
                          {row.accent ? (
                            <span className="inline-flex items-center gap-2">
                              {row.netto}
                              <span className="text-xs text-secondary font-label tracking-wide bg-secondary-container px-2 py-0.5 rounded-full">
                                +€ 82,80
                              </span>
                            </span>
                          ) : row.netto}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

            {/* Savings breakdown */}
            <Reveal delay={0.3}>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: 'OTA risparmiata (18%)',     val: '+ € 90,00',  sub: 'per prenotazione da €500' },
                  { label: 'Incasso aggiuntivo',         val: '+ € 82,80',  sub: 'rispetto a Booking.com' },
                  { label: 'Su 10 prenotazioni simili', val: '+ € 828,00', sub: 'rientro immediato' },
                ].map((item, i) => (
                  <div key={i} className="bg-surface rounded-xl p-6 shadow-sm text-center">
                    <p className="font-label text-xs uppercase tracking-widest text-secondary mb-2">{item.label}</p>
                    <p className="font-headline text-2xl text-primary mb-1">{item.val}</p>
                    <p className="text-xs text-on-surface-variant">{item.sub}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  )
}
