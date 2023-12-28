import { observer } from 'mobx-react-lite'
import { Button } from '../Button/Button'
import './HomeScreen.scss'
import { appState } from '../../data/appState'

export const HomeScreen = observer(() => {
  return (
    <div className="home-screen">
      <h1>Подтягивания</h1>

      <div className="home-screen__buttons">
        {appState.currentRep > 0 && (
          <div>
            <Button
              cls="home-screen__button"
              color={'secondary'}
              onClick={() => {
                appState.setSelectedWeekIndex(appState.currentWeekIndex)
                appState.goto('training')
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
              appState.setSelectedWeekIndex(appState.currentWeekIndex)
              appState.resetCurrentTraining()
              appState.goto('training')
            }}
          >
            Начать тренировку
          </Button>
        </div>

        <div>
          <Button
            cls="home-screen__button"
            style={'link'}
            onClick={() => appState.goto('plan')}
          >
            План тренировок
          </Button>
        </div>
      </div>
    </div>
  )
})
