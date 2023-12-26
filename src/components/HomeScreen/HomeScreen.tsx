import { observer } from 'mobx-react-lite'
import { globalState } from '../../data/globalState'
import { Button } from '../Button/Button'
import './HomeScreen.scss'

export const HomeScreen = observer(() => {
  const { currentScreen, currentWeek, trainingStore } = globalState

  return (
    <div className="home-screen">
      <h1>Подтягивания</h1>

      <div className="home-screen__buttons">
        {trainingStore.currentRep > 0 && (
          <div>
            <Button
              cls="home-screen__button"
              color={'secondary'}
              onClick={() => {
                currentWeek.setSelectedWeekIndex(currentWeek.currentWeekIndex)
                currentScreen.goto('training')
              }}
            >
              Продолжить тренировку
            </Button>
          </div>
        )}

        <div>
          <Button
            cls="home-screen__button"
            onClick={() => {
              currentWeek.setSelectedWeekIndex(currentWeek.currentWeekIndex)
              trainingStore.setCurrentRep(0)
              currentScreen.goto('training')
            }}
          >
            Начать тренировку
          </Button>
        </div>

        <div>
          <Button
            cls="home-screen__button"
            style={'link'}
            onClick={() => currentScreen.goto('plan')}
          >
            План тренировок
          </Button>
        </div>
      </div>
    </div>
  )
})
