import { observer } from 'mobx-react-lite'
import { Reps } from '../Reps/Reps'
import './TrainingScreen.scss'
import classNames from 'classnames'
import { useCallback, useEffect, useState } from 'react'
import { Button } from '../Button/Button'
import { appState } from '../../data/appState'
import { plan } from '../../data/plan'
import { getTimeElapsed } from '../../helpers/getTimeElapsed'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { AnotherWeek } from '../AnotherWeek/AnotherWeek'

export const TrainingScreen = observer(() => {
  const { currentWeekIndex, timerStartTime, currentRep } = appState

  const navigate = useNavigate()
  const [params] = useSearchParams()

  const selectedWeek = params.get('week')
  const selectedWeekIndex = selectedWeek ? Number(selectedWeek) : -1
  const weekIndex = selectedWeekIndex >= 0 ? selectedWeekIndex : currentWeekIndex
  const weekPlan = plan.getWeekPlan(weekIndex)

  const isAnotherWeek = weekIndex !== currentWeekIndex
  const isFinished = !isAnotherWeek && appState.isFinished

  const [isNewTraining, setIsNewTraining] = useState(() => Boolean(params.get('new')))

  useEffect(() => {
    if (isNewTraining) {
      appState.resetCurrentTraining()
      setIsNewTraining(false)
    }
  })

  const repIndex = isNewTraining ? 0 : currentRep

  const calcCounter = useCallback(() => {
    return timerStartTime ? getTimeElapsed(timerStartTime) : '00:00'
  }, [timerStartTime])

  const handleDoneRep = useCallback(() => {
    appState.setCurrentRepDone()
    setCounter('00:00')
  }, [calcCounter])

  const handleComplete = useCallback(() => {
    appState.resetCurrentTraining()
    navigate('/')
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
        <Reps reps={weekPlan} currentRepIndex={isAnotherWeek ? 0 : repIndex} />
      </div>
      <div
        className={classNames('training-screen__current-rep', {
          'training-screen__current-rep--finished': isFinished,
          'training-screen__mute-section': isAnotherWeek,
        })}
      >
        {isFinished ? '✓' : weekPlan[isAnotherWeek ? 0 : repIndex]}
      </div>
      <div
        className={classNames('training-screen__counter', {
          'training-screen__mute-section': isAnotherWeek,
        })}
      >
        {isFinished ? 'Тренировка окончена' : repIndex === 0 || isAnotherWeek ? 'Выполните первый подход' : counter}
      </div>
      <div>
        {isAnotherWeek ? (
          <AnotherWeek weekIndex={weekIndex} onConfirm={() => appState.switchToWeek(weekIndex)} />
        ) : isFinished ? (
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
