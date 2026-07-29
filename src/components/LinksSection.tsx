import type { CSSProperties } from 'react'
import { useEffect, useRef, useState } from 'react'
import { FaInstagram, FaWhatsapp, FaHandshake, FaFilePdf } from 'react-icons/fa6'
import { hexToRgba } from '../lib/color'
import type { LinkItem, LinkIconName } from '../content/linksData'

const linkIcons: Record<LinkIconName, typeof FaInstagram> = {
  instagram: FaInstagram,
  whatsapp: FaWhatsapp,
  handshake: FaHandshake,
  file: FaFilePdf,
}

type LinksSectionColors = {
  ink: string
  muted: string
  accent: string
  line: string
  bg: string
}

type LinksSectionProps = {
  links: LinkItem[]
  eyebrow: string
  eyebrowStyle: CSSProperties
  bodyStyle: CSSProperties
  displayFont: CSSProperties
  colors: LinksSectionColors
}

/** Atraso entre a revelação de um banner e o próximo, em ms — mesmo padrão do ProcessSection. */
const ITEM_DELAY_MS = 550
/** Duração da transição de cada banner (fade + subida), em ms — lenta e fluida, mesmo padrão do ProcessSection. */
const ITEM_DURATION_MS = 900

/**
 * Banners premium estilo "link na bio" (baixos e largos, não cards altos) —
 * os 4 cabem numa tela só, empilhados no mobile e em grid 2 colunas no
 * desktop. Reveal via IntersectionObserver + transição CSS de duração fixa
 * (não GSAP ScrollTrigger) — mesmo padrão do ProcessSection/AboutSection:
 * um ScrollTrigger "play once" pode pular direto pro estado final quando a
 * seção chega pronta por um snap do scroll.
 */
export function LinksSection({ links, eyebrow, eyebrowStyle, bodyStyle, displayFont, colors }: LinksSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.3 })
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full snap-start snap-always overflow-hidden">
      <div className="pointer-events-none sticky top-6 z-50 flex justify-center sm:top-8">
        <span
          className="text-sm uppercase tracking-[0.3em] sm:text-base"
          style={{ ...eyebrowStyle, textShadow: '0 1px 16px rgba(0,0,0,0.7)' }}
        >
          {eyebrow}
        </span>
      </div>

      <div
        className="-mt-6 flex min-h-dvh w-full flex-col justify-center px-6 py-8 sm:-mt-8 sm:px-10 sm:py-10 md:px-16"
        style={{ backgroundColor: colors.bg }}
      >
        <div className="mx-auto grid w-full max-w-md grid-cols-1 gap-7 sm:max-w-xl sm:gap-6 md:max-w-4xl md:grid-cols-2 md:gap-6">
          {links.map((link, i) => {
            const Icon = linkIcons[link.icon]
            return (
              <div
                key={link.title}
                className="transition-[opacity,transform] ease-out"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: `translateY(${isVisible ? 0 : 28}px)`,
                  transitionDuration: `${ITEM_DURATION_MS}ms`,
                  transitionDelay: isVisible ? `${i * ITEM_DELAY_MS}ms` : '0ms',
                }}
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex h-[18vh] max-h-[160px] min-h-[108px] w-full items-center justify-center overflow-hidden rounded-xl border transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_18px_40px_-14px_var(--link-glow)] active:-translate-y-1 active:shadow-[0_18px_40px_-14px_var(--link-glow)] md:h-40 md:max-h-none"
                  style={
                    {
                      borderColor: colors.line,
                      '--link-glow': hexToRgba(colors.accent, 0.45),
                    } as CSSProperties
                  }
                >
                  {/* Foto renderizada mais larga que o banner (130%) e deslocada via `left` — só assim o deslocamento horizontal tem efeito de verdade: num banner bem mais largo que alto, `object-position` X sozinho não move nada, porque a largura já cobre 100% do frame sem sobra. */}
                  <img
                    src={link.image}
                    alt=""
                    aria-hidden
                    className="absolute top-0 h-full max-w-none object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-active:scale-105"
                    style={{
                      width: '130%',
                      left: `${link.imageOffsetX ?? -18}%`,
                      objectPosition: `center ${link.imagePosition ?? '16%'}`,
                    }}
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-80 group-active:opacity-80"
                    style={{ backgroundColor: hexToRgba(colors.bg, 0.62) }}
                  />
                  {/* Anel de contorno na cor accent — some/aparece suavemente por cima da imagem, reforçando o hover sem depender de trocar a cor da borda estática via classe. */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-xl opacity-0 shadow-[inset_0_0_0_1.5px_var(--link-glow)] transition-opacity duration-500 group-hover:opacity-100 group-active:opacity-100"
                  />

                  <div className="relative z-10 flex flex-col items-center gap-1 px-4 text-center transition-transform duration-500 ease-out group-hover:-translate-y-0.5 group-active:-translate-y-0.5 sm:gap-1.5">
                    <h3
                      className="flex items-center gap-2 text-lg leading-none sm:text-xl"
                      style={{ ...displayFont, color: colors.ink }}
                    >
                      <Icon className="h-6 w-6 shrink-0 sm:h-7 sm:w-7" style={{ color: colors.accent }} aria-hidden />
                      {link.title}
                    </h3>
                    {link.subtitle ? (
                      <p
                        className="whitespace-nowrap text-[11px] leading-snug sm:text-xs"
                        style={{ ...bodyStyle, color: colors.muted }}
                      >
                        {link.subtitle}
                      </p>
                    ) : null}
                    <span
                      className="mt-1 inline-flex w-fit items-center rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.08em] transition-transform duration-300 group-hover:scale-[1.05] group-active:scale-[1.05] sm:text-[11px]"
                      style={{ ...bodyStyle, backgroundColor: colors.accent, color: colors.bg }}
                    >
                      {link.ctaLabel}
                    </span>
                  </div>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
