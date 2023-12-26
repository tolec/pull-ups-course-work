import { observer } from 'mobx-react-lite'
import { globalState } from '../../data/global-state'
import './PlanScreen.scss'
import { PlanRow } from '../PlanRow/PlanRow'

export const PlanScreen = observer(() => {
  const plan = globalState.plan
  const currentWeek = globalState.currentWeek

  return (
    <div>
      <h1>Pull ups</h1>

      <div className="plan-list">
        {plan.planList.map((weekPlan, index) => {
          const mode =
            index < currentWeek.weekIndex
              ? 'done'
              : index === currentWeek.weekIndex
                ? 'current'
                : 'default'
          return (
            <PlanRow
              key={index}
              weekIndex={index}
              reps={weekPlan}
              mode={mode}
              onClickRow={() => {
                currentWeek.setCurrentWeekIndex(index)
              }}
            />
          )
        })}
      </div>
    </div>
  )
})
