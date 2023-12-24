import { globalState } from '../../data/global-state'

export const Header = () => {
  return (
    <div>
      <button onClick={() => globalState.currentScreen.goto('home')}>
        Главная
      </button>
    </div>
  )
}
