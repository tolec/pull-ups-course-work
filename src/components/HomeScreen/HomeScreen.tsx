import { observer } from 'mobx-react-lite'
import { globalState } from '../../data/globalState'
import { Button } from '../Button/Button'

export const HomeScreen = observer(() => {
  return (
    <div>
      <h1>Подтягивания</h1>
      <div>
        <Button onClick={() => globalState.currentScreen.goto('plan')}>
          План тренировок
        </Button>
      </div>
      <div>
        <Button onClick={() => globalState.currentScreen.goto('training')}>
          Начать тренировку
        </Button>
      </div>
      <div>
        <Button
          color={'secondary'}
          onClick={() => globalState.currentScreen.goto('training')}
        >
          Продолжить тренировку
        </Button>
      </div>
    </div>
  )
})
