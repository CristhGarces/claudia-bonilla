import { motion } from 'framer-motion'
import whatsappIcon from '../assets/WhatsApp_icon.png'

function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/573172308051"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-25 h-25" />
    </motion.a>
  )
}

export default WhatsAppButton   