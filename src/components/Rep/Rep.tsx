import classNames from 'classnames'
import './Rep.scss'

export interface RepProps {
  rep: number
  mode: 'default' | 'done' | 'current'
}

export const Rep = ({ rep, mode }: RepProps) => {
  return (
    <div
      className={classNames('rep', {
        'rep--done': mode === 'done',
        'rep--current': mode === 'current',
      })}
    >
      {rep}
    </div>
  )
}
