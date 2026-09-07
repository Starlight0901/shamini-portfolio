import type { ServiceCategory } from '../data/services'
import { Button } from './Button'
import { ServiceItemCard } from './ServiceItemCard'
import { serviceIcons } from './serviceIcons'
import { cn } from '../lib/cn'
import { Heading, Text } from './ui/Typography'

const iconStyles = {
  accent: 'bg-accent-soft text-accent',
  tech: 'bg-tech-soft text-tech',
  personal: 'bg-personal-soft text-personal',
} as const

export type ServiceCategoryBlockProps = {
  category: ServiceCategory
}

export function ServiceCategoryBlock({ category }: ServiceCategoryBlockProps) {
  const Icon = serviceIcons[category.icon]

  return (
    <section className="space-y-8" aria-labelledby={`${category.id}-heading`}>
      <header className="max-w-2xl space-y-4">
        <div
          className={cn(
            'inline-flex h-9 w-9 items-center justify-center rounded-md',
            iconStyles[category.accent],
          )}
        >
          <Icon size={16} strokeWidth={1.75} aria-hidden="true" />
        </div>
        <Heading as="h2" size="title" id={`${category.id}-heading`}>
          {category.title}
        </Heading>
        <Text>{category.explanation}</Text>
        {category.idealFor ? (
          <p className="text-[0.95rem] leading-[1.7] text-muted">
            <span
              className={cn(
                'font-medium',
                category.accent === 'personal'
                  ? 'text-personal'
                  : category.accent === 'tech'
                    ? 'text-tech'
                    : 'text-accent',
              )}
            >
              Ideal for.{' '}
            </span>
            {category.idealFor}
          </p>
        ) : null}
      </header>

      <div className="grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {category.items.map((item) => (
          <ServiceItemCard
            key={item.id}
            item={item}
            accent={category.accent}
          />
        ))}
      </div>

      <Button to="/contact" variant="secondary" className="w-full sm:w-auto">
        {category.ctaLabel}
      </Button>
    </section>
  )
}
