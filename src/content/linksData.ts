import { images, isabella } from './isabella'

/** Nome do ícone (ver mapa em LinksSection.tsx) — mantém a camada de dados livre de JSX/imports de ícone. */
export type LinkIconName = 'instagram' | 'whatsapp' | 'handshake' | 'file'

export type LinkItem = {
  title: string
  subtitle?: string
  image: string
  /** Componente vertical do `object-position` (CSS) do banner — os banners são baixos e largos (ver LinksSection), então um recorte padrão centralizado corta o rosto de uma foto em pé. Ajustar por foto até o rosto ficar visível. */
  imagePosition?: string
  /** Deslocamento horizontal da foto dentro do banner, em % (ver LinksSection) — a foto é renderizada mais larga que o banner só pra isso ter efeito de verdade (object-position X sozinho não move nada num banner bem mais largo que alto). Negativo desloca a foto pra esquerda, revelando mais do lado direito da imagem original. */
  imageOffsetX?: number
  url: string
  ctaLabel: string
  icon: LinkIconName
}

// Dados da V3 (variação "Influencer/Criadora de Conteúdo com Links") — reaproveita
// a persona fictícia da Isabella (ver isabella.ts). O número de WhatsApp é
// placeholder de demonstração, sem correspondência real.
export const linksData: LinkItem[] = [
  {
    title: 'Instagram',
    subtitle: 'Bastidores e campanhas do dia a dia.',
    image: images.v04Portrait,
    imagePosition: '16%',
    url: isabella.instagramHref,
    ctaLabel: 'Ver Instagram',
    icon: 'instagram',
  },
  {
    title: 'Parcerias',
    subtitle: 'Propostas de campanha e collabs de marca.',
    image: images.v06Portrait,
    imagePosition: '14%',
    url: isabella.contactHref,
    ctaLabel: 'Falar sobre Parcerias',
    icon: 'handshake',
  },
  {
    title: 'WhatsApp',
    subtitle: isabella.responseTime,
    image: images.beauty09,
    imagePosition: '20%',
    imageOffsetX: 0,
    url: 'https://wa.me/5511999999999',
    ctaLabel: 'Chamar no WhatsApp',
    icon: 'whatsapp',
  },
  {
    title: 'Mídia Kit',
    subtitle: 'Book completo e tabela de valores.',
    image: images.v07Portrait,
    imagePosition: '18%',
    url: isabella.contactHref,
    ctaLabel: 'Baixar Mídia Kit',
    icon: 'file',
  },
]
