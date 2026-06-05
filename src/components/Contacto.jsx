import { motion } from 'framer-motion'

function Contacto() {
  return (
    <section id="contacto" className="bg-military min-h-screen py-32 flex flex-col justify-center relative overflow-hidden">

      {/* Marquee de fondo */}
      <div className="absolute top-0 left-0 w-full overflow-hidden opacity-5 whitespace-nowrap pointer-events-none">
        <motion.p
          className="text-beige font-display italic inline-block"
          style={{ fontSize: 'clamp(4rem, 10vw, 8rem)' }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        >
          Claudia Bonilla — Diseño a medida — Claudia Bonilla — Diseño a medida —&nbsp;
          Claudia Bonilla — Diseño a medida — Claudia Bonilla — Diseño a medida —&nbsp;
        </motion.p>
      </div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32">

        {/* Texto */}
        <div className="flex flex-col gap-8 w-full md:max-w-lg">
          <motion.p
            className="font-body text-pink text-xs tracking-[0.2em] uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Hablemos
          </motion.p>

          <motion.h2
            className="font-display text-beige leading-tight"
            style={{ fontSize: 'clamp(2rem, 7vw, 6rem)' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Creamos algo <br /> <em className="text-pink">juntos?</em>
          </motion.h2>

          <motion.p
            className="font-body text-beige/50 text-sm md:text-base leading-loose"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Cada pieza comienza con una conversacion. Cuentame tu idea, tu ocasion,
            tu historia — y lo convertimos en algo que puedas vestir.
          </motion.p>
        </div>

        {/* Chat */}
        <motion.div
          className="w-full md:w-[480px] rounded-lg overflow-hidden shadow-2xl flex-shrink-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-beige/20 flex items-center justify-center flex-shrink-0">
              <span className="font-display text-beige text-sm italic">C</span>
            </div>
            <div>
              <p className="font-body text-beige text-sm">Claudia Bonilla</p>
              <p className="font-body text-beige/60 text-xs">Diseñadora de moda</p>
            </div>
          </div>

          <div className="bg-[#ECE5DD] px-4 py-4 flex flex-col gap-3">
            <div className="bg-white rounded-lg rounded-tl-none px-4 py-2 self-start max-w-[85%] shadow-sm">
              <p className="font-body text-[#303030] text-sm leading-relaxed">Hola, me encantaria disenar algo contigo.</p>
              <p className="font-body text-[#999] text-xs text-right mt-1">10:32</p>
            </div>
            <div className="bg-white rounded-lg rounded-tl-none px-4 py-2 self-start max-w-[85%] shadow-sm">
              <p className="font-body text-[#303030] text-sm leading-relaxed">Tengo una ocasion especial y quiero algo unico.</p>
              <p className="font-body text-[#999] text-xs text-right mt-1">10:33</p>
            </div>
            <motion.div
              className="bg-white rounded-lg rounded-tl-none px-4 py-2 self-start shadow-sm flex items-center gap-2"
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="w-2 h-2 rounded-full bg-[#999] inline-block"></span>
              <span className="w-2 h-2 rounded-full bg-[#999] inline-block"></span>
              <span className="w-2 h-2 rounded-full bg-[#999] inline-block"></span>
            </motion.div>
          </div>

          <div className="bg-[#F0F0F0] px-4 py-3 flex items-center gap-3">
            <div className="flex-1 bg-white rounded-full px-4 py-2">
              <p className="font-body text-[#999] text-sm">Escribe un mensaje</p>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Footer */}
      <motion.div
        className="absolute bottom-10 left-8 md:left-20 right-8 md:right-20 flex justify-between items-center border-t border-beige/10 pt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <p className="font-display text-beige/40 italic text-lg">Claudia Bonilla</p>
        <p className="font-body text-beige/20 text-xs tracking-[0.2em] uppercase">Diseno a medida — Colombia</p>
      </motion.div>

    </section>
  )
}

export default Contacto