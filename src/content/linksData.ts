import { images, isabella } from './isabella'

/** Nome do ícone (ver mapa em LinksSection.tsx) — mantém a camada de dados livre de JSX/imports de ícone. */
export type LinkIconName = 'instagram' | 'whatsapp' | 'handshake' | 'file'

export type LinkItem = {
  title: string
  subtitle?: string
  image: string
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
    url: isabella.instagramHref,
    ctaLabel: 'Ver Instagram',
    icon: 'instagram',
  },
  {
    title: 'Parcerias',
    subtitle: 'Propostas de campanha e collabs de marca.',
    image: images.v06Portrait,
    url: isabella.contactHref,
    ctaLabel: 'Falar sobre Parcerias',
    icon: 'handshake',
  },
  {
    title: 'WhatsApp',
    subtitle: isabella.responseTime,
    image: images.v08Portrait,
    url: 'https://wa.me/5511999999999',
    ctaLabel: 'Chamar no WhatsApp',
    icon: 'whatsapp',
  },
  {
    title: 'Mídia Kit',
    subtitle: 'Book completo e tabela de valores.',
    image: images.v07Portrait,
    url: isabella.contactHref,
    ctaLabel: 'Baixar Mídia Kit',
    icon: 'file',
  },
]
