import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { AmbientBackground } from './atmosphere/AmbientBackground'
import { DocumentMeta } from './DocumentMeta'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { SkipLink } from './SkipLink'

function RouteFallback() {
  return (
    <div className="section-space" aria-busy="true">
      <span className="sr-only">Loading</span>
    </div>
  )
}

export function Layout() {
  return (
    <AmbientBackground>
      <SkipLink />
      <DocumentMeta />
      <div className="flex min-h-svh min-w-0 flex-col">
        <Navbar />
        <main id="main-content" className="min-w-0 flex-1" tabIndex={-1}>
          <Suspense fallback={<RouteFallback />}>
            <Outlet />
          </Suspense>
        </main>
        <Footer />
      </div>
    </AmbientBackground>
  )
}
