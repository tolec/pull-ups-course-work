import classNames from 'classnames'
import './PlanRow.scss'
import { Reps } from '../Reps/Reps'

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
  return (
    <div
      className={classNames('plan-row', {
        'plan-row--default': mode === 'default',
        'plan-row--done': mode === 'done',
        'plan-row--current': mode === 'current',
      })}
      onClick={() => onClickRow()}
    >
      <div className="plan-row__week-info">
        <div className="plan-row__week-number">{weekIndex + 1}</div>
        <div className="plan-row__week_word">неделя</div>
      </div>
      <div className="plan-row__reps">
        <Reps reps={reps} />
      </div>
      <div className="plan-row__total-info">
        <div className="plan-row__total-number">
          {reps.reduce((s, x) => s + x)}
        </div>
        <div className="plan-row__total-word">всего</div>
      </div>
    </div>
  )
}
