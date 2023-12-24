import { observer } from 'mobx-react-lite'
import { globalState } from '../../data/global-state'
import classNames from 'classnames'
import './PlanScreen.scss'

export const PlanScreen = observer(() => {
  const plan = globalState.plan
  const currentWeek = globalState.currentWeek

  return (
    <div>
      <h1>Pull ups</h1>

      <div className="plan-list">
        {plan.planList.map((weekPlan, index) => (
          <div
            key={index}
            className={classNames('plan-list__item', {
              'plan-list__done': index < currentWeek.weekIndex,
              'plan-list__current': index === currentWeek.weekIndex,
            })}
            onClick={() => currentWeek.setCurrentWeekIndex(index)}
          >
            {index + 1}: {weekPlan.join(', ')}
          </div>
        ))}
      </div>
    </div>
  )
})
