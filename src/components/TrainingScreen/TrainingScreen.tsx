import { observer } from 'mobx-react-lite'
import { Reps } from '../Reps/Reps'
import './TrainingScreen.scss'
import classNames from 'classnames'
import { useCallback } from 'react'
import { Button } from '../Button/Button'
import { appState } from '../../data/appState'
import { plan } from '../../data/plan'

export const TrainingScreen = observer(() => {
  const { currentWeekIndex, selectedWeekIndex } = appState
  const weekPlan = plan.getWeekPlan(selectedWeekIndex)
  const isAnotherWeek = selectedWeekIndex !== currentWeekIndex
  const finished = appState.isFinished

  const handleDoneRep = useCallback(() => {
    appState.setCurrentRepDone()
  }, [])

  const handleComplete = useCallback(() => {
    appState.resetCurrentTraining()
    appState.goto('home')
  }, [])

  return (
    <div className="training-screen">
      <h2>Тренировка</h2>
      <div className={isAnotherWeek ? 'training-screen__mute-section' : ''}>
        <Reps
          reps={weekPlan}
          currentRepIndex={isAnotherWeek ? 0 : appState.currentRep}
        />
      </div>
      <div
        className={classNames('training-screen__current-rep', {
          'training-screen__current-rep--finished': finished,
          'training-screen__mute-section': isAnotherWeek,
        })}
      >
        {finished ? '✓' : weekPlan[isAnotherWeek ? 0 : appState.currentRep]}
      </div>
      <div>
        {isAnotherWeek ? (
          <AnotherWeek />
        ) : finished ? (
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
  const { currentWeekIndex, selectedWeekIndex } = appState
  const { planList } = plan

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
            appState.resetCurrentTraining()
            appState.setCurrentWeekIndex(selectedWeekIndex)
          }}
        >
          Перейти к {selectedWeekIndex + 1} неделе
        </Button>
      </div>
    </div>
  )
})
