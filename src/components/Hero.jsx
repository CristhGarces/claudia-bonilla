import { motion } from 'framer-motion'
import Boton from './Boton'

function Hero() {
  return (
    <section className="min-h-screen bg-beige flex items-center relative overflow-hidden">

      {/* Marquee de fondo */}
      <div className="absolute top-20 md:top-24 left-0 w-full overflow-hidden opacity-10 pointer-events-none whitespace-nowrap">
        <motion.p
          className="text-military font-display inline-block"
          style={{ fontSize: 'clamp(2rem, 8vw, 8rem)' }}
          animate={{ x: [0, -2000] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
        >
          Claudia Bonilla — Diseño a medida — Claudia Bonilla — Diseño a medida —
          Claudia Bonilla — Diseño a medida — Claudia Bonilla — Diseño a medida —
        </motion.p>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 w-full">

        <motion.p
          className="text-military font-body text-xs tracking-[0.2em] uppercase mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Diseñadora de moda — Colombia
        </motion.p>

        <motion.h1
          className="font-display text-military leading-none mb-8"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 9rem)' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Moda que <br />
          <em>te define.</em>
        </motion.h1>

        <motion.p
          className="font-body text-military/60 text-sm md:text-lg max-w-xl mb-10 leading-loose"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Cada prenda nace de una conversacion, una historia y una silueta unica.
          Piezas hechas a mano, pensadas para durar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Boton href="https://wa.me/573172308051" variante="solido">
            Cotizar ahora
          </Boton>
        </motion.div>

      </div>

    </section>
  )
}

export default Hero