import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { images } from '../content/isabella'

const directions = [
  {
    to: '/base',
    name: 'Base — Vinho Editorial',
    desc: 'Marrom quase preto + dourado + vinho, Playfair Display, barra fixa no topo. Estrutura de referência validada — ponto de partida seguro pra toda cliente nova.',
    img: images.dress10,
    bg: '#1A1310',
  },
  {
    to: '/v1',
    name: 'V1 — Bold Cover',
    desc: 'Verde-oliva escuro + dourado, DM Serif itálico gigante, capa de revista. Proposta de liberdade criativa.',
    img: images.color06,
    bg: '#14150F',
  },
  {
    to: '/v2',
    name: 'V2 — Riviera Gold',
    desc: 'Areia + bronze, Cormorant Garamond, régua pontilhada de alfaiataria. Proposta de liberdade criativa.',
    img: images.fashion02,
    bg: '#EFE6D3',
  },
  {
    to: '/v3',
    name: 'V3 — Influencer com Links',
    desc: 'Mesma paleta Vinho da Base — Hero com bio incorporada (sem seção Sobre) e uma seção "Links" estilo link-na-bio logo em seguida. Proposta de estrutura.',
    img: images.v04Portrait,
    bg: '#1A1310',
  },
]

export function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-16 text-neutral-100 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-2 text-xs uppercase tracking-[0.2em] text-neutral-400"
        >
          Isabella Marques — base + liberdade criativa
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="mb-12 text-3xl font-medium sm:text-4xl"
        >
          Base validada + 2 propostas de liberdade criativa
        </motion.h1>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {directions.map((d, i) => (
            <motion.div
              key={d.to}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.06, ease: 'easeOut' }}
            >
              <Link
                to={d.to}
                className="group block overflow-hidden rounded-lg border border-neutral-800 transition-colors hover:border-neutral-600"
              >
                <div
                  className="relative aspect-[4/5] overflow-hidden"
                  style={{ backgroundColor: d.bg }}
                >
                  <img
                    src={d.img}
                    alt={d.name}
                    className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-4">
                  <h2 className="mb-1 text-lg font-medium">{d.name}</h2>
                  <p className="text-sm text-neutral-400">{d.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
