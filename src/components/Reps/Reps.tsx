import './Reps.scss'
import { Rep } from '../Rep/Rep'

export interface RepsProps {
  reps: number[]
}

export type RepMode = 'default' | 'done' | 'current'

export const Reps = ({ reps }: RepsProps) => {
  return (
    <div className="reps">
      {reps.map((rep, index) => {
        const mode: RepMode =
          index < 2 ? 'done' : index === 2 ? 'current' : 'default'

        return <Rep rep={rep} mode={mode} />
      })}
    </div>
  )
}
