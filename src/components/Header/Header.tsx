import { appState } from '../../data/appState'
import { Logo } from '../Logo/Logo'
import './Header.scss'
import { Link } from '../Link/Link'

export const Header = () => {
  const handleClickLogo = () => appState.goto('home')

  return (
    <div className="header">
      <Link onClick={handleClickLogo}>
        <Logo />
      </Link>
      <Link
        cls={'header__logo-text'}
        color={'secondary'}
        onClick={handleClickLogo}
      >
        Подтягивания
      </Link>
    </div>
  )
}
