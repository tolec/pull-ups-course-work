import { observer } from 'mobx-react-lite'
import { Reps } from '../Reps/Reps'
import './TrainingScreen.scss'
import classNames from 'classnames'
import { useCallback, useEffect, useState } from 'react'
import { Button } from '../Button/Button'
import { appState } from '../../data/appState'
import { plan } from '../../data/plan'
import { getTimeElapsed } from '../../helpers/getTimeElapsed'

export const TrainingScreen = observer(() => {
  const { currentWeekIndex, selectedWeekIndex, timerStartTime, currentRep } =
    appState
  const weekPlan = plan.getWeekPlan(selectedWeekIndex)
  const isAnotherWeek = selectedWeekIndex !== currentWeekIndex
  const finished = appState.isFinished

  const calcCounter = useCallback(() => {
    return timerStartTime ? getTimeElapsed(timerStartTime) : '00:00'
  }, [timerStartTime])

  const handleDoneRep = useCallback(() => {
    appState.setCurrentRepDone()
    setCounter('00:00')
  }, [calcCounter])

  const handleComplete = useCallback(() => {
    appState.resetCurrentTraining()
    appState.goto('home')
  }, [])

  const [counter, setCounter] = useState(() => calcCounter())

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter(calcCounter())
    }, 1000)

    return () => clearInterval(timer)
  }, [calcCounter, setCounter])

  return (
    <div className="training-screen">
      <h2>Тренировка</h2>
      <div className={isAnotherWeek ? 'training-screen__mute-section' : ''}>
        <Reps
          reps={weekPlan}
          currentRepIndex={isAnotherWeek ? 0 : currentRep}
        />
      </div>
      <div
        className={classNames('training-screen__current-rep', {
          'training-screen__current-rep--finished': finished,
          'training-screen__mute-section': isAnotherWeek,
        })}
      >
        {finished ? '✓' : weekPlan[isAnotherWeek ? 0 : currentRep]}
      </div>
      <div
        className={classNames('training-screen__counter', {
          'training-screen__mute-section': isAnotherWeek,
        })}
      >
        {finished
          ? 'Тренировка окончена'
          : currentRep === 0 || isAnotherWeek
            ? 'Выполните первый подход'
            : counter}
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
