export type SkillGroup = {
  id: string
  title: string
  tone: 'tech' | 'personal' | 'accent'
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    title: 'Languages',
    tone: 'tech',
    items: ['TypeScript', 'JavaScript', 'Python', 'SQL'],
  },
  {
    id: 'craft',
    title: 'Craft',
    tone: 'accent',
    items: ['React', 'Node.js', 'UI systems', 'Technical writing'],
  },
  {
    id: 'teaching',
    title: 'Teaching',
    tone: 'personal',
    items: ['Mentoring', 'Curriculum design', 'Workshops'],
  },
]
