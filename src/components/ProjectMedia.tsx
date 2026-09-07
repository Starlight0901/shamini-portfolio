import type { Project } from '../data/projects'
import { isBuiltStatus, projectStatusLabel } from '../data/projects'
import { cn } from '../lib/cn'

export type ProjectMediaProps = {
  project: Project
}

export function ProjectMedia({ project }: ProjectMediaProps) {
  const built = isBuiltStatus(project.status)
  const caption =
    project.status === 'completed'
      ? 'Screenshot to be added.'
      : project.status === 'in-development'
        ? 'Screenshots will be added as the build takes shape.'
        : 'No screenshot — this work has not been built yet.'

  return (
    <figure
      className={cn(
        'relative m-0 aspect-[4/3] overflow-hidden border border-border bg-surface sm:aspect-[16/9]',
        built ? 'rounded-lg' : 'rounded-md',
      )}
    >
      {project.image ? (
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          loading="lazy"
          decoding="async"
          className={cn(
            'h-full w-full object-cover',
            project.status === 'planned' || project.status === 'concept'
              ? 'opacity-40 grayscale'
              : undefined,
          )}
        />
      ) : (
        <>
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgb(167_139_250_/_0.08),transparent_55%),radial-gradient(ellipse_at_80%_70%,rgb(103_232_249_/_0.05),transparent_50%)]"
            aria-hidden="true"
          />
          <figcaption className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center sm:px-6">
            <p className="font-mono text-[0.68rem] tracking-[0.08em] text-muted uppercase">
              {projectStatusLabel[project.status]}
            </p>
            <p className="max-w-sm text-sm text-muted">{caption}</p>
          </figcaption>
        </>
      )}
    </figure>
  )
}
