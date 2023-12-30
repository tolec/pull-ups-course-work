import { observer } from 'mobx-react-lite'
import { Button } from '../Button/Button'
import { appState } from '../../data/appState'
import { NumberBox } from '../NumberBox/NumberBox'
import { Reps } from '../Reps/Reps'
import { plan } from '../../data/plan'
import './HomeScreen.scss'

export const HomeScreen = observer(() => {
  return (
    <div className="home-screen">
      <div className="home-screen__current-week">
        <NumberBox number={appState.currentWeekIndex + 1} word={'неделя'} color={'current'} />
      </div>

      <div className="home-screen__plan">
        <div>
          Программа повторений для тренировок {appState.currentWeekIndex + 1}
          -й недели
        </div>
        <Reps reps={plan.getWeekPlan(appState.currentWeekIndex)} />
      </div>

      <div className="home-screen__buttons">
        {appState.currentRep > 0 && (
          <div>
            <Button className="home-screen__button" color={'secondary'} href={'/training'}>
              Продолжить тренировку
            </Button>
          </div>
        )}

        <div>
          <Button className="home-screen__button" href={'/training?new=1'}>
            Начать тренировку
          </Button>
        </div>

        <div>
          <Button className="home-screen__button" style={'link'} href={'/plan'}>
            План тренировок
          </Button>
        </div>
      </div>
    </div>
  )
})
