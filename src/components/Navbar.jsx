import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const secciones = ['nosotros', 'showroom', 'contacto']

function Navbar() {
  const [activa, setActiva] = useState('')
  const [menuAbierto, setMenuAbierto] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiva(entry.target.id)
        })
      },
      { threshold: 0.4 }
    )
    secciones.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const irA = (id) => {
    setMenuAbierto(false)
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) {
        const offset = el.getBoundingClientRect().top + window.scrollY - 96
        window.scrollTo({ top: offset, behavior: 'smooth' })
      }
    }, 300)
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-beige border-b border-military/10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="px-6 md:px-20 h-20 md:h-24 flex justify-between items-center relative">
        <p className="font-display text-military text-2xl md:text-3xl italic">Claudia Bonilla</p>

        <div className="hidden md:flex items-stretch absolute left-1/2 -translate-x-1/2 h-full border-x border-military/20">
          {secciones.map((id, index) => {
            const esActiva = activa === id
            const clases = 'transition-all duration-300 font-body text-sm tracking-[0.2em] uppercase flex items-center w-52 justify-center h-full ' + (esActiva ? 'text-beige bg-military' : 'text-military hover:text-beige hover:bg-military')
            return (
              <div key={id} className={'flex items-center h-full ' + (index !== 0 ? 'border-l border-military/20' : '')}>
                <button onClick={() => irA(id)} className={clases}>{id}</button>
              </div>
            )
          })}
        </div>

        <button
          className="md:hidden flex flex-col justify-center gap-1.5 p-2 w-8 h-8"
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          <span className={'block w-6 h-px bg-military transition-all duration-300 origin-center ' + (menuAbierto ? 'rotate-45 translate-y-[7px]' : '')} />
          <span className={'block w-6 h-px bg-military transition-all duration-300 ' + (menuAbierto ? 'opacity-0' : '')} />
          <span className={'block w-6 h-px bg-military transition-all duration-300 origin-center ' + (menuAbierto ? '-rotate-45 -translate-y-[7px]' : '')} />
        </button>
      </div>

      <AnimatePresence>
        {menuAbierto && (
          <motion.div
            className="md:hidden bg-beige border-t border-military/10 overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {secciones.map((id) => {
              const esActiva = activa === id
              const clases = 'block w-full text-left px-8 py-8 font-body text-xl tracking-[0.3em] uppercase border-b border-military/10 transition-all duration-300 ' + (esActiva ? 'text-beige bg-military' : 'text-military')
              return (
                <button key={id} onClick={() => irA(id)} className={clases}>{id}</button>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar