import { FolderGit2, Globe } from 'lucide-react'
import type { Project } from '../data/projects'
import {
  isBuiltStatus,
  projectStatusLabel,
  projectStatusTone,
} from '../data/projects'
import { cn } from '../lib/cn'
import { Button } from './Button'
import { ProjectMedia } from './ProjectMedia'
import { TechBadge } from './TechBadge'
import { Badge } from './ui/Badge'
import { Card } from './ui/Card'
import { Heading, Label, Text } from './ui/Typography'

const categoryTone = {
  accent: 'accent',
  tech: 'tech',
  personal: 'personal',
  default: 'default',
} as const

export type ProjectCaseStudyProps = {
  project: Project
}

export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  const planned = !isBuiltStatus(project.status)
  const featuresLabel = planned ? 'Intended features' : 'Key features'
  const solutionLabel = planned ? 'Intended approach' : 'Solution'
  const showDemo = Boolean(project.demoUrl) && project.status !== 'planned'
  const showGithub = Boolean(project.githubUrl)

  return (
    <article className="space-y-8" aria-labelledby={`${project.id}-title`}>
      <ProjectMedia project={project} />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <Label as="span" tone={categoryTone[project.categoryTone]}>
          {project.category}
        </Label>
        <Badge variant={projectStatusTone[project.status]}>
          {projectStatusLabel[project.status]}
        </Badge>
      </div>

      <header className="max-w-3xl space-y-4">
        <Heading as="h3" size="title" id={`${project.id}-title`}>
          {project.title}
        </Heading>
        <Text>{project.summary}</Text>
      </header>

      {planned ? (
        <p className="max-w-3xl text-sm text-muted">
          This entry is not a finished product. Treat the notes below as intent,
          not as a record of shipped work.
        </p>
      ) : null}

      <div className="grid min-w-0 gap-5 sm:gap-6 md:grid-cols-2">
        <Card tone={planned ? 'panel' : 'default'} className="space-y-3">
          <Label>Problem</Label>
          <Text className="text-[0.95rem]">{project.problem}</Text>
        </Card>
        <Card tone={planned ? 'panel' : 'default'} className="space-y-3">
          <Label>{solutionLabel}</Label>
          <Text className="text-[0.95rem]">{project.solution}</Text>
        </Card>
      </div>

      <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <div className="space-y-4">
          <Label>{featuresLabel}</Label>
          <ul className="space-y-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-muted">
                <span
                  className={cn(
                    'mt-1.5 h-1 w-1 shrink-0 rounded-full',
                    planned ? 'bg-subtle' : 'bg-accent',
                  )}
                  aria-hidden="true"
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <Label>My role</Label>
            <Text className="text-[0.95rem]">{project.role}</Text>
          </div>
          <div className="space-y-3">
            <Label tone="tech">Technologies</Label>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <TechBadge key={item}>{item}</TechBadge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showDemo || showGithub ? (
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
          {showDemo ? (
            <Button href={project.demoUrl} size="sm" className="w-full sm:w-auto">
              <Globe size={14} strokeWidth={1.75} aria-hidden="true" />
              View demo
            </Button>
          ) : null}
          {showGithub ? (
            <Button
              href={project.githubUrl}
              variant="secondary"
              size="sm"
              className="w-full sm:w-auto"
            >
              <FolderGit2 size={14} strokeWidth={1.75} aria-hidden="true" />
              GitHub
            </Button>
          ) : null}
        </div>
      ) : (
        <p className="text-sm text-muted">
          {planned
            ? 'No demo or repository yet — this project has not been built.'
            : 'Demo and GitHub links will appear here when there is something to open.'}
        </p>
      )}
    </article>
  )
}
