import { globalState } from '../../data/globalState'
import { Button } from '../Button/Button'

export const Header = () => {
  return (
    <div>
      <Button onClick={() => globalState.currentScreen.goto('home')}>
        Главная
      </Button>
    </div>
  )
}
