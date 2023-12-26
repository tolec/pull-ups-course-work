import { observer } from 'mobx-react-lite'
import { globalState } from '../../data/globalState'
import { Reps } from '../Reps/Reps'
import './TrainingScreen.scss'

export const TrainingScreen = observer(() => {
  const { currentWeekIndex, selectedWeekIndex } = globalState.currentWeek
  const plan = globalState.plan
  const weekPlan = plan.getWeekPlan(selectedWeekIndex)

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
        {selectedWeekIndex !== currentWeekIndex ? (
          <AnotherWeek />
        ) : (
          <button>Готово</button>
        )}
      </div>
    </div>
  )
})

export const AnotherWeek = observer(() => {
  const { currentWeekIndex, selectedWeekIndex } = globalState.currentWeek

  return (
    <div className="trainingScreen__another-week">
      <h2>Другая неделя</h2>
      <div>
        <p>
          Сейчас вы занимаетесь по программе{' '}
          <strong>{currentWeekIndex + 1}</strong> недели.
        </p>
        <p>
          Хотите теперь заниматься по программе{' '}
          <strong>{selectedWeekIndex + 1}</strong> недели?
        </p>
      </div>
      <div>
        <button
          onClick={() => {
            globalState.currentWeek.setCurrentWeekIndex(selectedWeekIndex)
          }}
        >
          Перейти к {selectedWeekIndex + 1} неделе
        </button>
      </div>
    </div>
  )
})
