import { BarChart3, BookOpen, BrainCircuit, GraduationCap, LayoutDashboard, LayoutTemplate, type LucideIcon } from 'lucide-react'
import type { ServiceIcon } from '../data/services'

export const categoryIcons: Record<
  Extract<
    ServiceIcon,
    'systems' | 'data' | 'ai' | 'research' | 'education' | 'products'
  >,
  LucideIcon
> = {
  systems: LayoutDashboard,
  data: BarChart3,
  ai: BrainCircuit,
  research: GraduationCap,
  education: BookOpen,
  products: LayoutTemplate,
}
