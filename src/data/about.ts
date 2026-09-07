import { features, whenEducation } from '../config/features'

export const aboutPage = {
  kicker: 'About',
  kickerTone: whenEducation('personal', 'accent') as 'personal' | 'accent',
  title: 'Who I am, and how I work.',
  paragraphs: [
    'I am Shamini Fernando, a software and AI professional. I build websites, business systems, and practical digital tools — and I work with data, machine learning, and research when the problem actually needs them.',
    'My training is in Artificial Intelligence and Data Science. Professionally I have worked as a data scientist and as an AI/ML solutions engineer. That mix matters: I can shape a product, look after the data behind it, and keep the result clear enough for someone to use.',
    ...(features.education
      ? [
          'I also care about knowledge sharing — helping others learn clearly, not just collect tools.',
        ]
      : []),
  ],
  experience: {
    kicker: 'Background',
    title: 'Experience',
    description: 'Roles that shaped how I work with data, AI, and software.',
    items: [
      {
        id: 'arrogance',
        role: 'Associate Solutions Engineer – AI/ML',
        organisation: 'Arrogance Technologies Pvt (Ltd)',
        period: null,
      },
      {
        id: 'sqrr',
        role: 'Intern Data Scientist',
        organisation: 'SQRR',
        period: '2024 – 2025',
      },
    ],
  },
  education: {
    kicker: 'Study',
    title: 'Education & Qualifications',
    award: 'BSc Hons in Artificial Intelligence and Data Science',
    institution: 'IIT, affiliated to Robert Gordon University',
    detail: 'Second Upper Division',
  },
  publication: {
    kicker: 'Research',
    title: 'Publication',
    name: 'Lawkey – Law Constitution Chatbot',
    venue: 'IEEE Xplore',
    href: 'https://ieeexplore.ieee.org/document/10844946',
    cta: 'View Publication',
  },
  skills: {
    kicker: 'Capabilities',
    title: 'Skills & Expertise',
    description:
      'A concise view of the tools and methods I use — enough to judge fit, not a full inventory.',
  },
}
