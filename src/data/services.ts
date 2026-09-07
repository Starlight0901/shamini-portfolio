export type ServiceAccent = 'accent' | 'tech' | 'personal'

export type ServiceIcon =
  | 'systems'
  | 'data'
  | 'ai'
  | 'research'
  | 'education'
  | 'products'
  | 'website'
  | 'app'
  | 'dashboard'
  | 'spreadsheet'
  | 'automation'
  | 'reporting'
  | 'charts'
  | 'ml'
  | 'vision'
  | 'datascience'
  | 'support'
  | 'analysis'
  | 'docs'
  | 'tutoring'
  | 'walkthrough'
  | 'materials'
  | 'tools'
  | 'tracker'
  | 'template'

export type ServiceItem = {
  id: string
  title: string
  summary: string
  icon: ServiceIcon
}

export type ServiceCategory = {
  id: string
  title: string
  summary: string
  explanation: string
  idealFor?: string
  icon: ServiceIcon
  accent: ServiceAccent
  ctaLabel: string
  items: ServiceItem[]
}

export type Service = Pick<
  ServiceCategory,
  'id' | 'title' | 'summary' | 'icon' | 'accent'
>

export const servicesIntro = {
  kicker: 'What I do',
  title: 'Practical capabilities for real work.',
  description:
    'Software, data, research support, teaching, and small digital products — explained in plain language.',
}

export const servicesPage = {
  kicker: 'Services',
  title: 'How I can help.',
  description:
    'Each area lists the work I actually take on. If something here fits, a short note is enough to start.',
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'software',
    title: 'Software & Systems',
    summary:
      'Websites, management systems, custom web applications and dashboards.',
    explanation:
      'I design and build websites and internal tools that are straightforward to use. The aim is software that supports the work you already do — not a system you have to fight.',
    idealFor:
      'Small businesses that need a clear website, a simple internal system, or a better view of day-to-day activity.',
    icon: 'systems',
    accent: 'accent',
    ctaLabel: 'Ask about software',
    items: [
      {
        id: 'websites',
        title: 'Business websites',
        summary:
          'A clear site that explains what you do and how people can reach you.',
        icon: 'website',
      },
      {
        id: 'management-systems',
        title: 'Management systems',
        summary:
          'Internal tools for records, tasks, and everyday operations.',
        icon: 'systems',
      },
      {
        id: 'web-apps',
        title: 'Custom web applications',
        summary:
          'Software shaped around how your team actually works.',
        icon: 'app',
      },
      {
        id: 'dashboards',
        title: 'Dashboards',
        summary:
          'Simple screens for the numbers and activity that matter.',
        icon: 'dashboard',
      },
    ],
  },
  {
    id: 'automation',
    title: 'Automation & Data',
    summary:
      'Excel, Google Sheets, Apps Script, reporting and data visualisation.',
    explanation:
      'If a lot of your work lives in spreadsheets, I can help make that work cleaner, faster, and easier to trust — including repeating tasks handled with Google Apps Script.',
    idealFor:
      'Owners and teams who already use Excel or Google Sheets and want less copy-paste, and reports they can actually use.',
    icon: 'data',
    accent: 'tech',
    ctaLabel: 'Ask about data & automation',
    items: [
      {
        id: 'spreadsheets',
        title: 'Spreadsheet setup',
        summary:
          'Clearer Excel and Google Sheets workbooks that are easier to maintain.',
        icon: 'spreadsheet',
      },
      {
        id: 'sheet-automation',
        title: 'Spreadsheet automation',
        summary:
          'Repeating jobs handled with Apps Script, so less time is spent on the same steps.',
        icon: 'automation',
      },
      {
        id: 'reporting',
        title: 'Reporting',
        summary:
          'Regular summaries that are readable and ready to act on.',
        icon: 'reporting',
      },
      {
        id: 'visuals',
        title: 'Charts and visuals',
        summary:
          'Charts that make the story in the numbers easier to see.',
        icon: 'charts',
      },
    ],
  },
  {
    id: 'ai',
    title: 'AI & Technology',
    summary:
      'Applied AI, computer vision, machine learning and data science.',
    explanation:
      'I have a BSc (Hons) in Artificial Intelligence & Data Science and professional experience in AI/ML and software development. I help with applied problems — and I will say so when a fashionable tool is not the right fit.',
    idealFor:
      'People with a specific question involving data, images, or prediction, who want a realistic view of what is possible.',
    icon: 'ai',
    accent: 'tech',
    ctaLabel: 'Ask about AI work',
    items: [
      {
        id: 'applied-ml',
        title: 'Applied machine learning',
        summary:
          'Models aimed at a real question, with the results explained in plain language.',
        icon: 'ml',
      },
      {
        id: 'computer-vision',
        title: 'Computer vision',
        summary:
          'Projects that work with images — including an honest view of when this helps.',
        icon: 'vision',
      },
      {
        id: 'data-science',
        title: 'Data science support',
        summary:
          'Exploring data, finding patterns, and presenting what they mean.',
        icon: 'datascience',
      },
    ],
  },
  {
    id: 'research',
    title: 'Academic & Research',
    summary:
      'Research support, data analysis, technical documentation and related help.',
    explanation:
      'Support for the technical side of study and research: organising the work, analysing data, and writing methods and results clearly. I do not write assessed work on someone else’s behalf.',
    idealFor:
      'Students and researchers who need help with data, documentation, or structuring a technical piece of work.',
    icon: 'research',
    accent: 'personal',
    ctaLabel: 'Ask about research support',
    items: [
      {
        id: 'research-support',
        title: 'Research support',
        summary:
          'Help planning the technical side of a study and keeping the work organised.',
        icon: 'support',
      },
      {
        id: 'research-analysis',
        title: 'Data analysis',
        summary:
          'Cleaning, analysing, and presenting research data clearly.',
        icon: 'analysis',
      },
      {
        id: 'technical-docs',
        title: 'Technical documentation',
        summary:
          'Clear write-ups of methods, results, and how a system works.',
        icon: 'docs',
      },
    ],
  },
  {
    id: 'education',
    title: 'Education & Tutoring',
    summary:
      'Patient help with software, data, and AI topics, plus learning materials.',
    explanation:
      'I am interested in teaching and knowledge sharing. I explain technical ideas at a steady pace, with practice — not a rush to the answer. This is tutoring and learning support, not a school or exam-board service.',
    idealFor:
      'Learners who want to understand software, data, or AI more clearly, including alongside their own study or work.',
    icon: 'education',
    accent: 'personal',
    ctaLabel: 'Ask about tutoring',
    items: [
      {
        id: 'tutoring',
        title: 'Technical tutoring',
        summary:
          'One-to-one or small-group help with software, data, and AI topics.',
        icon: 'tutoring',
      },
      {
        id: 'walkthroughs',
        title: 'Concept walkthroughs',
        summary:
          'Breaking a difficult idea into steps you can follow.',
        icon: 'walkthrough',
      },
      {
        id: 'learning-materials',
        title: 'Learning materials',
        summary:
          'Notes and exercises that support practice, not just theory.',
        icon: 'materials',
      },
    ],
  },
  {
    id: 'products',
    title: 'Digital Products & Templates',
    summary:
      'Business tools, trackers, templates and productivity products.',
    explanation:
      'Small, reusable tools and templates for everyday work. These are useful when you need a starting point, not a full custom system.',
    idealFor:
      'If you need a tracker, template, or simple tool without commissioning a whole application.',
    icon: 'products',
    accent: 'accent',
    ctaLabel: 'Ask about products',
    items: [
      {
        id: 'business-tools',
        title: 'Business tools',
        summary:
          'Lightweight tools for common tasks such as records and follow-up.',
        icon: 'tools',
      },
      {
        id: 'trackers',
        title: 'Trackers',
        summary:
          'Simple ways to keep progress, tasks, or students in view.',
        icon: 'tracker',
      },
      {
        id: 'templates',
        title: 'Templates',
        summary:
          'Reusable starting points you can adapt to your own work.',
        icon: 'template',
      },
    ],
  },
]

export const services: Service[] = serviceCategories.map(
  ({ id, title, summary, icon, accent }) => ({
    id,
    title,
    summary,
    icon,
    accent,
  }),
)
