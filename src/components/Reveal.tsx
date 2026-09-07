import { useEffect, useRef, useState, type HTMLAttributes } from 'react'
import { cn } from '../lib/cn'

export type RevealProps = HTMLAttributes<HTMLElement>

export function Reveal({ className, ...props }: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false,
  )

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')

    function show() {
      setVisible(true)
    }

    if (motion.matches) {
      show()
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        show()
        observer.disconnect()
      },
      { threshold: 0, rootMargin: '0px 0px -12% 0px' },
    )

    observer.observe(node)
    const onMotionChange = (event: MediaQueryListEvent) => {
      if (event.matches) show()
    }
    motion.addEventListener('change', onMotionChange)

    return () => {
      observer.disconnect()
      motion.removeEventListener('change', onMotionChange)
    }
  }, [])

  return (
    <section
      ref={ref}
      className={cn('reveal', visible && 'is-visible', className)}
      {...props}
    />
  )
}
