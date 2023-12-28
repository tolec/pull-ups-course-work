import { Button } from '../Button/Button'
import { appState } from '../../data/appState'

export const Header = () => {
  return (
    <div>
      <Button onClick={() => appState.goto('home')}>Главная</Button>
    </div>
  )
}
