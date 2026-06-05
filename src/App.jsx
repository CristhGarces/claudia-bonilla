import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Showroom from './components/Showroom'
import Contacto from './components/Contacto'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Showroom />
      <Contacto />
      <WhatsAppButton />
    </div>
  )
}

export default App