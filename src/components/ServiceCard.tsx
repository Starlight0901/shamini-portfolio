import { categoryIcons } from './categoryIcons'
import type { Service, ServiceAccent } from '../data/services'
import { cn } from '../lib/cn'
import { Card } from './ui/Card'
import { Heading, Text } from './ui/Typography'

const iconStyles: Record<ServiceAccent, string> = {
  accent: 'bg-accent-soft text-accent',
  tech: 'bg-tech-soft text-tech',
  personal: 'bg-personal-soft text-personal',
}

const hoverStyles: Record<ServiceAccent, string> = {
  accent: 'hover:border-accent-border',
  tech: 'hover:border-tech-border',
  personal: 'hover:border-personal-border',
}

const edgeStyles: Record<ServiceAccent, string> = {
  accent: 'border-t-accent-border',
  tech: 'border-t-tech-border',
  personal: 'border-t-personal-border',
}

export type ServiceCardProps = {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = categoryIcons[service.icon as keyof typeof categoryIcons]

  return (
    <Card
      as="article"
      className={cn(
        'card-lift flex h-full flex-col gap-5',
        hoverStyles[service.accent],
        edgeStyles[service.accent],
      )}
    >
      {Icon ? (
        <div
          className={cn(
            'inline-flex h-9 w-9 items-center justify-center rounded-md',
            iconStyles[service.accent],
          )}
        >
          <Icon size={16} strokeWidth={1.75} aria-hidden="true" />
        </div>
      ) : null}

      <div className="space-y-3">
        <Heading as="h3" size="heading">
          {service.title}
        </Heading>
        <Text className="text-[0.95rem]">{service.summary}</Text>
      </div>
    </Card>
  )
}
