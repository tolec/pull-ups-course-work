import { observer } from 'mobx-react-lite'
import './PlanScreen.scss'
import { PlanRow } from '../PlanRow/PlanRow'
import { appState } from '../../data/appState'
import { plan } from '../../data/plan'

export const PlanScreen = observer(() => {
  const currentWeekIndex = appState.currentWeekIndex

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
                appState.setSelectedWeekIndex(index)
                appState.goto('training')
              }}
            />
          )
        })}
      </div>
    </div>
  )
})
