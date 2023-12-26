import { globalState } from '../../data/globalState'

export const Header = () => {
  return (
    <div>
      <button onClick={() => globalState.currentScreen.goto('home')}>
        Главная
      </button>
    </div>
  )
}
