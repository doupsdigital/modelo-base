import { VideoHero } from '../components/VideoHero'
import { PinnedPortfolio } from '../components/PinnedPortfolio'
import { LinksSection } from '../components/LinksSection'
import { CampaignsSection } from '../components/CampaignsSection'
import type { CampaignCategory } from '../components/CampaignsSection'
import { ProcessSection } from '../components/ProcessSection'
import type { ProcessStep } from '../components/ProcessSection'
import { ContactSection } from '../components/ContactSection'
import { isabella, images, portfolio, videos } from '../content/isabella'
import { linksData } from '../content/linksData'
import logoGucci from '../assets/images/logos/01 - Gucci_logo.png'
import logoVersace from '../assets/images/logos/02 - versace-primary-logo.png'
import logoChanel from '../assets/images/logos/03 - Chanel_logo.png'
import logoDolceGabbana from '../assets/images/logos/04 - Dolce-Gabbana-Logo.png'
import logoLouisVuitton from '../assets/images/logos/05 Louis-Vuitton-logo.png'
import logoZara from '../assets/images/logos/06 - ZARA-logo.png'

const partnerLogos = [
  { src: logoGucci, alt: 'Gucci' },
  { src: logoVersace, alt: 'Versace' },
  { src: logoChanel, alt: 'Chanel' },
  { src: logoDolceGabbana, alt: 'Dolce & Gabbana' },
  { src: logoLouisVuitton, alt: 'Louis Vuitton' },
  { src: logoZara, alt: 'Zara' },
]

// Mesmos tokens de design da Base (paleta Vinho, ver CLAUDE.md "Direções de
// partida") — a V3 é uma variação de estrutura (Influencer/Criadora de
// Conteúdo com Links), não uma nova proposta visual.
const bg = '#1A1310'
const ink = '#F3ECE4'
const muted = '#B9A99A'
const accent = '#C9A66B'
const line = '#3A2C27'
const vinho = '#6E1F2A'

const display = { fontFamily: "'Fraunces', serif", fontStyle: 'italic' as const, color: ink }
const body = { fontFamily: "'Inter', sans-serif" }

const SCROLL_ROOT_ID = 'v3-scroll-root'

const campaignCategories: CampaignCategory[] = [
  { label: 'Moda feminina', icon: 'dress', image: images.fashion02 },
  { label: 'Beleza & skincare', icon: 'sparkle', image: images.beauty09 },
  { label: 'Fitness & wellness', icon: 'dumbbell', image: images.fitness },
  { label: 'Joias & acessórios', icon: 'gem', image: images.skirt11 },
]

const processSteps: ProcessStep[] = [
  {
    number: '1',
    title: 'Briefing',
    description: 'Compartilhe os objetivos da campanha, o público e o estilo desejado.',
  },
  {
    number: '2',
    title: 'Alinhamento',
    description: 'Definimos disponibilidade, formato do conteúdo, cronograma e detalhes da produção.',
  },
  {
    number: '3',
    title: 'Produção',
    description: 'Realizamos a sessão de fotos ou vídeos seguindo o briefing aprovado.',
  },
  {
    number: '4',
    title: 'Entrega',
    description: 'Você recebe todo o material pronto para usar em campanhas, redes sociais e ações de marketing.',
  },
]

/**
 * Variação "Influencer/Criadora de Conteúdo com Links" (ver CLAUDE.md
 * "Múltiplas propostas por cliente"): mesma estrutura de conteúdo, mesmo
 * motor de scroll/animação da Base, mas o Hero incorpora a bio (sem a
 * seção "Sobre" separada) e uma seção "Links" estilo link-na-bio substitui
 * a posição da segunda tela.
 */
export function V3Page() {
  return (
    <div
      id={SCROLL_ROOT_ID}
      style={{ backgroundColor: bg, color: ink, ...body }}
      className="h-dvh w-full snap-y snap-mandatory overflow-y-auto"
    >
      <VideoHero
        videoSrc={videos.v01Portrait}
        desktopVideoSrc={videos.v01Landscape}
        eyebrow="Modelo Comercial — São Paulo"
        title={isabella.name}
        titleClassName="text-[clamp(2.75rem,9vw,4.75rem)] leading-[0.98]"
        lead={isabella.bioLong}
        location={isabella.location.split(',')[0]}
        locationLabel={isabella.locationLabel}
        stats={[]}
        ctaLabel="Contato Comercial"
        ctaHref={isabella.contactHref}
        ctaTagline="Collabs e Campanhas"
        colors={{
          overlayTint: bg,
          text: ink,
          mutedText: muted,
          accent,
          ctaBg: vinho,
          ctaText: ink,
        }}
        displayFont={display}
        bodyFont={body}
        replayOnScroll
      />

      {/* Links — estilo link-na-bio, substitui a posição da seção Sobre */}
      <LinksSection
        links={linksData}
        eyebrow="Links"
        eyebrowStyle={{ ...body, color: accent }}
        bodyStyle={body}
        displayFont={display}
        colors={{ ink, muted, accent, line, bg }}
      />

      {/* Portfólio — pinado */}
      <PinnedPortfolio
        items={portfolio}
        eyebrow="Especialidades"
        eyebrowStyle={{ ...body, color: accent }}
        captionStyle={{ ...display }}
        descriptionStyle={{ ...body, color: ink }}
        overlayColor={bg}
        mediaBrightness={0.4}
      />

      {/* Campanhas ideais */}
      <CampaignsSection
        categories={campaignCategories}
        intro="Um perfil versátil o suficiente pra transitar entre esses universos sem perder consistência."
        eyebrow="Campanhas"
        eyebrowStyle={{ ...body, color: accent }}
        bodyStyle={body}
        colors={{ ink, muted, accent, line, bg }}
        scroller={`#${SCROLL_ROOT_ID}`}
        partnersLogos={partnerLogos}
        partnersTitle="Marcas Parceiras"
        desktopEnlarged
      />

      {/* Como funciona */}
      <ProcessSection
        image={images.v08Portrait}
        desktopImage={images.v08Landscape}
        steps={processSteps}
        eyebrow="Da ideia à campanha"
        eyebrowStyle={{ ...body, color: accent }}
        bodyStyle={body}
        displayFont={display}
        colors={{ ink, muted, accent, line, bg }}
      />

      {/* Contato final */}
      <ContactSection
        image={images.v07Portrait}
        desktopImage={images.v07Landscape}
        title="A presença que sua marca precisa."
        ctaPrimaryLabel="Solicitar Disponibilidade"
        ctaHref={isabella.contactHref}
        ctaTagline="Parcerias"
        mediaKitDescription="Reúne formatos de conteúdo, métricas e disponibilidade para propostas de parceria."
        mediaKitCtaLabel="Solicitar Mídia Kit"
        instagramHandle={isabella.instagramHandle}
        instagramHref={isabella.instagramHref}
        emailLabel={isabella.contactLabel}
        emailHref={isabella.contactHref}
        locationLine={`${isabella.location.split(',')[0]} · Atuação nacional`}
        eyebrow="Contato"
        eyebrowStyle={{ ...body, color: accent }}
        displayFont={display}
        bodyStyle={body}
        colors={{ ink, muted, accent, line, bg, ctaBg: vinho, ctaText: ink }}
      />

      <footer className="border-t px-6 py-8 text-[11px] sm:px-10" style={{ borderColor: line, color: muted }}>
        {isabella.name} · {isabella.location} · {isabella.contactLabel}
      </footer>
    </div>
  )
}
