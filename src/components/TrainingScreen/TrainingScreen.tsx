import { observer } from 'mobx-react-lite'
import { globalState } from '../../data/globalState'
import { Reps } from '../Reps/Reps'
import './TrainingScreen.scss'
import classNames from 'classnames'
import { useCallback } from 'react'

export const TrainingScreen = observer(() => {
  const { currentWeekIndex, selectedWeekIndex } = globalState.currentWeek
  const plan = globalState.plan
  const weekPlan = plan.getWeekPlan(selectedWeekIndex)
  const { trainingStore, currentScreen } = globalState

  const handleDone = useCallback(() => {
    trainingStore.setRepDone()
  }, [])

  const handleComplete = useCallback(() => {
    trainingStore.setCurrentRep(0)
    currentScreen.goto('home')
  }, [])

  return (
    <div className="trainingScreen">
      Тренировка
      <div>
        <Reps reps={weekPlan} currentRepIndex={trainingStore.currentRep} />
      </div>
      <div
        className={classNames('trainingScreen__current-rep', {
          'trainingScreen__current-rep--finished': trainingStore.isFinished,
        })}
      >
        {trainingStore.isFinished ? '✓' : weekPlan[trainingStore.currentRep]}
      </div>
      <div>
        {selectedWeekIndex !== currentWeekIndex ? (
          <AnotherWeek />
        ) : trainingStore.isFinished ? (
          <button onClick={handleComplete}>Завершить</button>
        ) : (
          <button onClick={handleDone}>Готово</button>
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
