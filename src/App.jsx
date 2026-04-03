import Nav            from './components/Nav'
import Hero           from './components/Hero'
import Footer         from './components/Footer'

import Vision       from './sections/Vision'
import Philosophy   from './sections/Philosophy'
import Metamorfosi  from './sections/Metamorfosi'
import Proposte     from './sections/Proposte'
import Trasparenza  from './sections/Trasparenza'
import SitoWeb      from './sections/SitoWeb'
import Servizi      from './sections/Servizi'
import ServiziExtra from './sections/ServiziExtra'
import Passi        from './sections/Passi'
import Contatti     from './sections/Contatti'

export default function App() {
  return (
    <div className="bg-background text-on-surface font-body">
      <Nav />
      <Hero />
      <Vision />
      <Philosophy />
      <Metamorfosi />
      <Proposte />
      <Trasparenza />
      <SitoWeb />
      <Servizi />
      <ServiziExtra />
      <Passi />
      <Contatti />
      <Footer />
    </div>
  )
}
