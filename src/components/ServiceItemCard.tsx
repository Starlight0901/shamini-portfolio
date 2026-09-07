import type { ServiceAccent, ServiceItem } from '../data/services'
import { cn } from '../lib/cn'
import { serviceIcons } from './serviceIcons'
import { Card } from './ui/Card'
import { Heading, Text } from './ui/Typography'

const iconStyles: Record<ServiceAccent, string> = {
  accent: 'bg-accent-soft text-accent',
  tech: 'bg-tech-soft text-tech',
  personal: 'bg-personal-soft text-personal',
}

export type ServiceItemCardProps = {
  item: ServiceItem
  accent: ServiceAccent
}

export function ServiceItemCard({ item, accent }: ServiceItemCardProps) {
  const Icon = serviceIcons[item.icon]

  return (
    <Card
      as="article"
      className={cn(
        'card-lift flex h-full flex-col gap-4',
        accent === 'tech'
          ? 'hover:border-tech-border'
          : accent === 'personal'
            ? 'hover:border-personal-border'
            : 'hover:border-accent-border',
      )}
    >
      <div
        className={cn(
          'inline-flex h-8 w-8 items-center justify-center rounded-md',
          iconStyles[accent],
        )}
      >
        <Icon size={15} strokeWidth={1.75} aria-hidden="true" />
      </div>
      <div className="space-y-2">
        <Heading as="h3" size="heading" className="text-lg">
          {item.title}
        </Heading>
        <Text className="text-[0.95rem]">{item.summary}</Text>
      </div>
    </Card>
  )
}
