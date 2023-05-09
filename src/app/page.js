
//style
import './style.css'

//Sections
import Hero from './sections/hero'
import WhoAreUs from './sections/who-are-us'
import Steps from './sections/steps'
import Promotion from './sections/promotion'
import Asked from './sections/asked'
import Depositions from './sections/depositions'
import Footer from './sections/footer'
import Statitics from './sections/statitics'
import Portifolio from './sections/portifolio'


export default function Home() {
  return (
    <>
      <Hero/>
      <WhoAreUs/>
      <Steps />
      <Depositions />
      <Statitics />
      <Portifolio />
      <Promotion />
      <Asked />
      <Footer />
    </>
  )
}
