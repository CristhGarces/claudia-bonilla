function Boton({ children, href, variante = 'solido', className = '' }) {
  const base = 'inline-block font-body text-xs tracking-[0.2em] uppercase transition-all duration-300 px-10 py-4'

  const variantes = {
    solido: 'bg-military text-beige hover:bg-pink hover:text-military',
    contorno: 'border border-military text-military hover:bg-military hover:text-beige',
    contorno_claro: 'border border-beige text-beige hover:bg-beige hover:text-military',
  }

  const clases = base + ' ' + variantes[variante] + ' ' + className

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={clases}>
      {children}
    </a>
  )
}

export default Boton