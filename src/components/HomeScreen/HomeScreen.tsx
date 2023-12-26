import { observer } from 'mobx-react-lite'
import { globalState } from '../../data/globalState'

export const HomeScreen = observer(() => {
  return (
    <div>
      <h1>Подтягивания</h1>
      <div>
        <button
          className="button"
          onClick={() => globalState.currentScreen.goto('plan')}
        >
          План тренировок
        </button>
      </div>
      <div>
        <button
          className="button"
          onClick={() => globalState.currentScreen.goto('training')}
        >
          Начать тренировку
        </button>
      </div>
      <div>
        <button
          className="button"
          onClick={() => globalState.currentScreen.goto('training')}
        >
          Продолжить тренировку
        </button>
      </div>
    </div>
  )
})
