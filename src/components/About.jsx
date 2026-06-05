import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9 } }
}

function About() {
  return (
    <section id="nosotros" className="bg-beige min-h-screen py-24 flex flex-col md:flex-row gap-12 md:gap-20 items-center">

      <motion.div
        className="w-full md:w-2/5 h-[350px] md:h-[500px] bg-military/10 flex items-center justify-center flex-shrink-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <p className="font-body text-military/30 text-xs tracking-[0.2em] uppercase">Foto de la diseñadora</p>
      </motion.div>

      <div className="flex flex-col gap-6 px-6 md:px-0 md:pr-20">

        <motion.p
          className="text-military font-body text-xs tracking-[0.2em] uppercase"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          La diseñadora
        </motion.p>

        <motion.h2
          className="font-display text-military leading-tight"
          style={{ fontSize: 'clamp(1.8rem, 6vw, 4rem)' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Detras de cada <br /> <em>pieza, hay una historia.</em>
        </motion.h2>

        <motion.p
          className="font-body text-military/60 text-sm md:text-base leading-loose"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Claudia Bonilla es diseñadora de moda con anos de experiencia creando
          prendas que van mas alla de la tela. Su proceso nace en el dialogo,
          crece en el boceto y se consolida en cada costura hecha a mano.
        </motion.p>

        <motion.p
          className="font-body text-military/60 text-sm md:text-base leading-loose"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Cada cliente llega con una idea y se va con una prenda que la representa.
          Eso es lo que impulsa cada coleccion: convertir lo que sientes en algo
          que puedes vestir.
        </motion.p>

      </div>
    </section>
  )
}

export default About