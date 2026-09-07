import { withoutEducationContent } from '../config/features'

export type SkillGroup = {
  id: string
  title: string
  tone: 'tech' | 'personal' | 'accent' | 'muted'
  items: string[]
  educationContent?: boolean
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'data-science',
    title: 'Data Science',
    tone: 'tech',
    items: [
      'Python',
      'Pandas',
      'NumPy',
      'Data Analysis',
      'Data Visualization',
      'Statistical Analysis',
      'Data Processing',
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI / Machine Learning',
    tone: 'tech',
    items: [
      'Machine Learning',
      'Deep Learning',
      'Natural Language Processing',
      'Computer Vision',
      'TensorFlow / Keras',
      'YOLO',
      'Model Development & Evaluation',
    ],
  },
  {
    id: 'software',
    title: 'Software & Web Development',
    tone: 'accent',
    items: [
      'React',
      'TypeScript',
      'JavaScript',
      'HTML / CSS',
      'Node.js',
      'REST APIs',
      'Firebase',
      'Database-driven Applications',
    ],
  },
  {
    id: 'data-systems',
    title: 'Data & Systems',
    tone: 'accent',
    items: [
      'SQL',
      'MongoDB',
      'Power BI',
      'Grafana',
      'Real-time Data Visualization',
      'Dashboard Development',
      'System Integration',
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Technologies',
    tone: 'muted',
    items: ['Excel', 'Google Sheets', 'Apps Script', 'GitHub'],
  },
  {
    id: 'teaching',
    educationContent: true,
    title: 'Teaching',
    tone: 'personal',
    items: ['Mentoring', 'Curriculum design', 'Workshops'],
  },
]

export const visibleSkillGroups = withoutEducationContent(skillGroups)
