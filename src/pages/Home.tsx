import { AboutPreview } from '../sections/AboutPreview'
import { FeaturedProjects } from '../sections/FeaturedProjects'
import { Hero } from '../sections/Hero'
import { HomeCta } from '../sections/HomeCta'
import { WhatIDo } from '../sections/WhatIDo'

export function Home() {
  return (
    <>
      <Hero />
      <WhatIDo />
      <FeaturedProjects />
      <AboutPreview />
      <HomeCta />
    </>
  )
}
