import classNames from 'classnames'
import './PlanRow.scss'
import { Reps } from '../Reps/Reps'
import { NumberBox } from '../NumberBox/NumberBox'

export const PlanRow = ({
  weekIndex,
  reps,
  mode,
  onClickRow,
}: {
  weekIndex: number
  reps: number[]
  mode: 'default' | 'done' | 'current'
  onClickRow: () => void
}) => {
  const repsSum = reps.reduce((s, x) => s + x)
  return (
    <div
      className={classNames('plan-row', {
        'plan-row--default': mode === 'default',
        'plan-row--done': mode === 'done',
        'plan-row--current': mode === 'current',
      })}
      onClick={() => onClickRow()}
    >
      <div className="plan-row__number-box">
        <NumberBox number={weekIndex + 1} word={'неделя'} color={mode} />
      </div>
      <div>
        <Reps reps={reps} />
      </div>
      <div className="plan-row__number-box">
        <NumberBox number={repsSum} word={'всего'} />
      </div>
    </div>
  )
}
