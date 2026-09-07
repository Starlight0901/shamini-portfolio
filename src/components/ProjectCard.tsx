import type { Project, ProjectCategoryTone } from '../data/projects'
import { projectStatusLabel, projectStatusTone } from '../data/projects'
import { cn } from '../lib/cn'
import { Button } from './Button'
import { TechBadge } from './TechBadge'
import { Badge } from './ui/Badge'
import { Card } from './ui/Card'
import { Heading, Label, Text } from './ui/Typography'

const categoryTone: Record<
  ProjectCategoryTone,
  'accent' | 'tech' | 'personal' | 'default'
> = {
  accent: 'accent',
  tech: 'tech',
  personal: 'personal',
  default: 'default',
}

export type ProjectCardProps = {
  project: Project
  headingAs?: 'h2' | 'h3'
}

export function ProjectCard({ project, headingAs = 'h3' }: ProjectCardProps) {
  const quiet =
    project.status === 'planned' || project.status === 'concept'

  return (
    <Card
      as="article"
      tone={quiet ? 'panel' : 'default'}
      className={cn(
        'flex h-full flex-col gap-5',
        quiet
          ? 'border-dashed'
          : 'card-lift hover:border-accent-border',
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Label as="span" tone={categoryTone[project.categoryTone]}>
          {project.category}
        </Label>
        <Badge variant={projectStatusTone[project.status]}>
          {projectStatusLabel[project.status]}
        </Badge>
      </div>

      <div className="space-y-3">
        <Heading as={headingAs} size="heading">
          {project.title}
        </Heading>
        <Text className="text-[0.95rem]">{project.summary}</Text>
      </div>

      <div className="mt-auto flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <TechBadge key={item}>{item}</TechBadge>
        ))}
      </div>

      {project.status === 'completed' && project.demoUrl ? (
        <Button
          href={project.demoUrl}
          variant="secondary"
          size="sm"
          className="w-full sm:w-auto sm:self-start"
        >
          View Project
        </Button>
      ) : null}
    </Card>
  )
}
