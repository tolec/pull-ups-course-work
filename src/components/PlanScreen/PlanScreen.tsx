import { observer } from 'mobx-react-lite'
import './PlanScreen.scss'
import { PlanRow } from '../PlanRow/PlanRow'
import { appState } from '../../data/appState'
import { plan } from '../../data/plan'

export const PlanScreen = observer(() => {
  const currentWeekIndex = appState.currentWeekIndex

  return (
    <div className="plan-screen">
      <h2>План тренировок</h2>

      <div className="plan-screen__plan-list">
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
