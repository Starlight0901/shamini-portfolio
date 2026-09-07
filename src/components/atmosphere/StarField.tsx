import { memo } from 'react'
import { tokens } from '../../styles/tokens'

const stars = [
  [8, 12, 1.1, 0.28],
  [18, 38, 0.8, 0.18],
  [27, 8, 0.7, 0.16],
  [41, 22, 1.2, 0.32],
  [52, 6, 0.6, 0.14],
  [63, 31, 0.9, 0.22],
  [74, 14, 1, 0.26],
  [86, 28, 0.7, 0.15],
  [93, 9, 0.8, 0.2],
  [12, 68, 0.7, 0.14],
  [31, 54, 0.9, 0.2],
  [48, 72, 0.6, 0.12],
  [67, 61, 1.1, 0.24],
  [81, 78, 0.7, 0.16],
  [94, 58, 0.8, 0.18],
  [6, 88, 0.6, 0.12],
  [22, 92, 0.9, 0.2],
  [58, 90, 0.7, 0.14],
  [77, 94, 0.6, 0.12],
] as const

const constellation = [
  [18, 38],
  [31, 54],
  [41, 22],
  [52, 6],
] as const

const points = constellation.map(([x, y]) => `${x},${y}`).join(' ')

export const StarField = memo(function StarField() {
  return (
    <div className="star-layer" aria-hidden="true">
      <svg
        className="h-full w-full opacity-70"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        aria-hidden="true"
      >
        <polyline
          fill="none"
          points={points}
          stroke={tokens.color.accent}
          strokeOpacity="0.12"
          strokeWidth="0.12"
        />
        {stars.map(([x, y, r, opacity], index) => (
          <circle
            key={`${x}-${y}-${index}`}
            cx={x}
            cy={y}
            r={r * 0.18}
            fill={tokens.color.foreground}
            opacity={opacity}
          />
        ))}
      </svg>
    </div>
  )
})
