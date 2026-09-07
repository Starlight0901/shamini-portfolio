import { whenEducation, withoutEducationContent } from '../config/features'

export type ProjectStatus =
  | 'completed'
  | 'in-development'
  | 'planned'
  | 'concept'

export type ProjectCategoryTone = 'accent' | 'tech' | 'personal' | 'default'

export type Project = {
  id: string
  title: string
  summary: string
  category: string
  categoryTone: ProjectCategoryTone
  status: ProjectStatus
  stack: string[]
  kind: 'project' | 'product'
  featured?: boolean
  image?: string
  problem: string
  solution: string
  features: string[]
  role: string
  demoUrl?: string
  githubUrl?: string
  educationContent?: boolean
}

export const projectStatusLabel: Record<ProjectStatus, string> = {
  completed: 'Completed',
  'in-development': 'In Development',
  planned: 'Planned',
  concept: 'Concept / Demo',
}

export const projectStatusTone: Record<
  ProjectStatus,
  'accent' | 'tech' | 'muted'
> = {
  completed: 'accent',
  'in-development': 'tech',
  planned: 'muted',
  concept: 'muted',
}

export const isBuiltStatus = (status: ProjectStatus) =>
  status === 'completed' || status === 'in-development'

export const projectsIntro = {
  kicker: 'Featured projects',
  title: 'Work in motion',
  description:
    'These projects are in development or planned. I will share case studies and links when there is something ready to view.',
}

export const projectsPage = {
  kicker: 'Projects',
  title: 'Case studies, at the stage they are in.',
  description:
    'This is a working log, not a finished gallery. Planned and concept work is labelled as such — it has not been built yet.',
}

export const projectStatusGroups: {
  status: ProjectStatus
  title: string
  description: string
}[] = [
  {
    status: 'completed',
    title: 'Completed',
    description: 'Work that is finished and ready to look at.',
  },
  {
    status: 'in-development',
    title: 'In development',
    description: 'Active builds. The problem is defined; the product is not finished.',
  },
  {
    status: 'planned',
    title: 'Planned',
    description: 'Intended projects. They are not underway and should not be read as shipped work.',
  },
  {
    status: 'concept',
    title: 'Concept / Demo',
    description: 'Ideas being shaped. Scope, data, and approach are still open.',
  },
]

export const projects: Project[] = [
  {
    id: 'business-platform',
    title: 'Small Business Management & Analytics Platform',
    summary:
      'A platform in development to help small businesses track operations, reporting, and day-to-day decisions in one place.',
    category: 'Software & Systems',
    categoryTone: 'accent',
    status: 'in-development',
    stack: ['TypeScript', 'React', 'Node.js', 'SQL'],
    kind: 'project',
    featured: true,
    problem:
      'Small businesses often keep sales, stock, and customer notes in separate spreadsheets and chats, so it is hard to see the whole picture.',
    solution:
      'I am building a single system for records, simple reporting, and everyday decisions — designed to stay readable rather than crowded.',
    features: [
      'Shared records for day-to-day operations',
      'Straightforward reports and summaries',
      'A dashboard for the numbers that matter',
    ],
    role: 'Design and development',
  },
  {
    id: 'tutor-progress',
    educationContent: true,
    title: 'Tutor Management & Student Progress System',
    summary:
      'An education system in development for managing tutors, learners, and progress without unnecessary complexity.',
    category: 'Education Technology',
    categoryTone: 'personal',
    status: 'in-development',
    stack: ['TypeScript', 'React', 'Node.js'],
    kind: 'project',
    featured: true,
    problem:
      'Tutors often juggle schedules, student notes, and progress across too many tools, which makes follow-up harder than it needs to be.',
    solution:
      'I am building one place to manage tutors, learners, and progress, with a calm structure that a small teaching practice can actually keep up.',
    features: [
      'Student and tutor records',
      'Progress notes over time',
      'A clear view of upcoming sessions',
    ],
    role: 'Design and development',
  },
  {
    id: 'business-website',
    title: 'Small Business Website',
    summary:
      'A planned website for a small business — clear structure, practical content, and a professional public presence.',
    category: 'Web Development',
    categoryTone: 'accent',
    status: 'planned',
    stack: ['TypeScript', 'React'],
    kind: 'project',
    featured: true,
    problem:
      'Many small businesses need a public site that explains what they do, without looking busy or generic.',
    solution:
      'A planned marketing site with a simple structure, practical copy, and a professional presence. This has not been built yet.',
    features: [
      'Clear service and contact pages',
      'Content that a visitor can scan quickly',
      'A layout that stays tidy on a phone',
    ],
    role: 'Design and development (planned)',
  },
  {
    id: 'education-website',
    educationContent: true,
    title: 'Tutor / Education Website',
    summary:
      'A planned website for tutoring and education services, made to explain the offering and make enquiry straightforward.',
    category: 'Web Development',
    categoryTone: 'accent',
    status: 'planned',
    stack: ['TypeScript', 'React'],
    kind: 'project',
    featured: true,
    problem:
      'Education services often need a public page that is warm and clear, so a parent or student knows what is offered and how to ask.',
    solution:
      'A planned website for tutoring and education, focused on explanation and enquiry. This has not been built yet.',
    features: [
      'An overview of teaching and tutoring',
      'Straightforward enquiry path',
      'A calm, readable layout',
    ],
    role: 'Design and development (planned)',
  },
  {
    id: 'ml-project',
    title: 'AI / Machine Learning Project',
    summary:
      'A concept for an applied machine learning project. The problem, data, and approach are not fixed yet.',
    category: 'AI & Technology',
    categoryTone: 'tech',
    status: 'concept',
    stack: ['Python', 'Machine Learning'],
    kind: 'project',
    featured: true,
    problem:
      'I want the next applied ML piece to start from a real question and a suitable dataset — not from a model chosen in advance.',
    solution:
      'This is a concept: frame the problem, explore the data, and only then decide what is worth building. There is no demo and no finished model.',
    features: [
      'Problem framing in plain language',
      'Data exploration before any model work',
      'A small experiment if the question supports it',
    ],
    role: 'Research and development (concept)',
  },
]

export const visibleProjects = withoutEducationContent(projects)

export const digitalProductsPage = {
  title: whenEducation(
    'Small tools and learning resources.',
    'Practical templates and tools.',
  ),
  description: whenEducation(
    'Reusable templates and learning resources. Items appear here when they are ready to share.',
    'Reusable templates and tools for everyday work. Items appear here when they are ready to share.',
  ),
}
