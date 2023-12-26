import './Reps.scss'
import { Rep } from '../Rep/Rep'

export interface RepsProps {
  reps: number[]
  currentRepIndex?: number
}

export type RepMode = 'default' | 'done' | 'current'

export const Reps = ({ reps, currentRepIndex }: RepsProps) => {
  const showCurrent = currentRepIndex !== undefined

  return (
    <div className="reps">
      {reps.map((rep, index) => {
        const mode: RepMode =
          showCurrent && index < currentRepIndex
            ? 'done'
            : showCurrent && index === currentRepIndex
              ? 'current'
              : 'default'

        return <Rep rep={rep} mode={mode} />
      })}
    </div>
  )
}
