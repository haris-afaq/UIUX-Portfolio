import { forwardRef } from 'react'
import type { HTMLAttributes, ReactNode } from 'react'

const spacingMap = {
  tight: 'clamp(28px, 4vw, 40px) 0',
  default: 'clamp(40px, 5vw, 64px) 0',
  loose: 'clamp(56px, 6vw, 80px) 0',
} as const

type SectionSpacing = keyof typeof spacingMap

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  spacing?: SectionSpacing
}

const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  { children, spacing = 'default', style, ...rest },
  ref,
) {
  return (
    <section
      ref={ref}
      {...rest}
      style={{
        padding: spacingMap[spacing],
        ...style,
      }}
    >
      {children}
    </section>
  )
})

export default Section
