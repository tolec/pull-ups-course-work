import { observer } from 'mobx-react-lite'
import { globalState } from '../../data/globalState'
import { Reps } from '../Reps/Reps'
import './TrainingScreen.scss'
import classNames from 'classnames'
import { useCallback } from 'react'
import { Button } from '../Button/Button'

export const TrainingScreen = observer(() => {
  const { currentWeekIndex, selectedWeekIndex } = globalState.currentWeek
  const plan = globalState.plan
  const weekPlan = plan.getWeekPlan(selectedWeekIndex)
  const { trainingStore, currentScreen } = globalState

  const handleDoneRep = useCallback(() => {
    trainingStore.setRepDone()
  }, [])

  const handleComplete = useCallback(() => {
    trainingStore.setCurrentRep(0)
    currentScreen.goto('home')
  }, [])

  const isAnotherWeek = selectedWeekIndex !== currentWeekIndex

  return (
    <div className="training-screen">
      <h1>Тренировка</h1>
      <div className={isAnotherWeek ? 'training-screen__mute-section' : ''}>
        <Reps reps={weekPlan} currentRepIndex={trainingStore.currentRep} />
      </div>
      <div
        className={classNames('training-screen__current-rep', {
          'training-screen__current-rep--finished': trainingStore.isFinished,
          'training-screen__mute-section': isAnotherWeek,
        })}
      >
        {trainingStore.isFinished ? '✓' : weekPlan[trainingStore.currentRep]}
      </div>
      <div>
        {isAnotherWeek ? (
          <AnotherWeek />
        ) : trainingStore.isFinished ? (
          <Button color={'secondary'} onClick={handleComplete}>
            Завершить
          </Button>
        ) : (
          <Button onClick={handleDoneRep}>Готово</Button>
        )}
      </div>
    </div>
  )
})

export const AnotherWeek = observer(() => {
  const { currentWeekIndex, selectedWeekIndex } = globalState.currentWeek
  const { planList } = globalState.plan

  return (
    <div className="training-screen__another-week">
      <h2>Другая неделя</h2>
      <div>
        <p>
          Сейчас вы занимаетесь по программе{' '}
          <strong>{currentWeekIndex + 1}</strong> недели (
          {planList[currentWeekIndex].join(', ')}).
        </p>
        <p>
          Хотите теперь заниматься по программе{' '}
          <strong>{selectedWeekIndex + 1}</strong> недели (
          {planList[selectedWeekIndex].join(', ')})?
        </p>
      </div>
      <div>
        <Button
          color={'secondary'}
          onClick={() => {
            globalState.currentWeek.setCurrentWeekIndex(selectedWeekIndex)
          }}
        >
          Перейти к {selectedWeekIndex + 1} неделе
        </Button>
      </div>
    </div>
  )
})
