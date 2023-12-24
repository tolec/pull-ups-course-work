import { observer } from 'mobx-react-lite'
import { globalState } from '../../data/global-state'
import { Reps } from '../Reps/Reps'
import './TrainingScreen.scss'

export const TrainingScreen = observer(() => {
  const currentWeek = globalState.currentWeek
  const plan = globalState.plan
  const weekPlan = plan.getWeekPlan(currentWeek.weekIndex)

  return (
    <div className="trainingScreen">
      Тренировка
      <div>
        <Reps reps={weekPlan} />
      </div>
      <div className="trainingScreen__current-rep">
        <div className="trainingScreen__current-rep-value">4</div>
      </div>
      <div>
        <button>Готово</button>
      </div>
    </div>
  )
})
