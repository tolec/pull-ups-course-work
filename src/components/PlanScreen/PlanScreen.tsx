import { observer } from 'mobx-react-lite'
import { globalState } from '../../data/globalState'
import './PlanScreen.scss'
import { PlanRow } from '../PlanRow/PlanRow'

export const PlanScreen = observer(() => {
  const plan = globalState.plan
  const currentWeek = globalState.currentWeek
  const currentWeekIndex = currentWeek.currentWeekIndex

  return (
    <div>
      <h1>Pull ups</h1>

      <div className="plan-list">
        {plan.planList.map((weekPlan, index) => {
          const mode =
            index < currentWeekIndex
              ? 'done'
              : index === currentWeekIndex
                ? 'current'
                : 'default'
          return (
            <PlanRow
              key={index}
              weekIndex={index}
              reps={weekPlan}
              mode={mode}
              onClickRow={() => {
                currentWeek.setSelectedWeekIndex(index)
                globalState.currentScreen.goto('training')
              }}
            />
          )
        })}
      </div>
    </div>
  )
})
