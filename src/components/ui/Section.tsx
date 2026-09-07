import { cn } from '../../lib/cn'
import { Reveal, type RevealProps } from '../Reveal'

export type SectionProps = RevealProps

export function Section({ className, ...props }: SectionProps) {
  return <Reveal className={cn('section-space', className)} {...props} />
}
