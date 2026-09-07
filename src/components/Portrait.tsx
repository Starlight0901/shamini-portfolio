import professionalPhoto from '../assets/professional_photo.png'
import { site } from '../data/site'
import { cn } from '../lib/cn'
import './Portrait.css'

export type PortraitProps = {
  className?: string
  priority?: boolean
}

export function Portrait({ className, priority = false }: PortraitProps) {
  return (
    <figure className={cn('portrait', className)}>
      <div className="portrait-glow" aria-hidden="true" />
      <div className="portrait-shell">
        <div className="portrait-frame">
          <img
            src={professionalPhoto}
            alt={`Portrait of ${site.name}`}
            width={720}
            height={900}
            decoding="async"
            fetchPriority={priority ? 'high' : 'auto'}
            loading={priority ? 'eager' : 'lazy'}
          />
          <div className="portrait-fade" aria-hidden="true" />
        </div>
      </div>
      <span className="portrait-spark portrait-spark-tl" aria-hidden="true" />
      <span className="portrait-spark portrait-spark-br" aria-hidden="true" />
    </figure>
  )
}
