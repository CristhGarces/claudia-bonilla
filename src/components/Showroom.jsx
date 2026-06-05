import { motion } from 'framer-motion'
import Boton from './Boton'

const prendas = [
  { id: 1, titulo: 'Pieza 01', descripcion: 'Vestido a medida' },
  { id: 2, titulo: 'Pieza 02', descripcion: 'Conjunto de temporada' },
  { id: 3, titulo: 'Pieza 03', descripcion: 'Blusa artesanal' },
  { id: 4, titulo: 'Pieza 04', descripcion: 'Falda plisada' },
  { id: 5, titulo: 'Pieza 05', descripcion: 'Vestido de noche' },
]

function TarjetaPrenda({ prenda, className, delay }) {
  const link = 'https://wa.me/573172308051?text=' + encodeURIComponent('Hola Claudia, me interesa cotizar: ' + prenda.titulo)

  return (
    <motion.div
      className={'group relative overflow-hidden bg-military/10 ' + className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: delay }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="font-body text-military/30 text-xs tracking-[0.2em] uppercase">Foto {prenda.id}</p>
      </div>

      {/* Overlay hover para desktop */}
      <div className="absolute inset-0 bg-military/0 group-hover:bg-military/70 transition-all duration-500 hidden md:flex flex-col items-center justify-center gap-6 opacity-0 group-hover:opacity-100">
        <p className="font-display text-beige text-2xl italic">{prenda.titulo}</p>
        <p className="font-body text-beige/70 text-xs tracking-[0.2em] uppercase">{prenda.descripcion}</p>
        <Boton href={link} variante="contorno_claro">Cotizar</Boton>
      </div>

      {/* Info visible siempre en móvil */}
      <div className="absolute bottom-0 left-0 right-0 bg-military/80 px-4 py-4 flex justify-between items-center md:hidden">
          <p className="font-display text-beige text-base italic">{prenda.titulo}</p>
          <p className="font-body text-beige/70 text-xs tracking-[0.15em] uppercase mt-1">{prenda.descripcion}</p>
      </div>
    </motion.div>
  )
}

function Showroom() {
  return (
    <section id="showroom" className="bg-beige py-24">
      <motion.div
        className="mb-12 md:mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <p className="font-body text-military text-xs tracking-[0.2em] uppercase mb-4">Coleccion</p>
        <h2 className="font-display text-military leading-tight" style={{ fontSize: 'clamp(1.8rem, 6vw, 4rem)' }}>
          El <em>Showroom</em>
        </h2>
      </motion.div>

      <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-4">
        <TarjetaPrenda prenda={prendas[0]} className="h-[300px] md:row-span-2 md:h-auto" delay={0.1} />
        <TarjetaPrenda prenda={prendas[1]} className="h-[250px] md:h-[280px]" delay={0.2} />
        <TarjetaPrenda prenda={prendas[2]} className="h-[250px] md:h-[280px]" delay={0.3} />
        <TarjetaPrenda prenda={prendas[3]} className="h-[250px] md:h-[280px]" delay={0.4} />
        <TarjetaPrenda prenda={prendas[4]} className="h-[250px] md:h-[280px]" delay={0.5} />
      </div>
    </section>
  )
}

export default Showroom