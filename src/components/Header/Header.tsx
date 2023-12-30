import { Logo } from '../Logo/Logo'
import './Header.scss'
import { Link } from '../Link/Link'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <div className="header">
      <NavLink to={'/'}>
        <Logo />
      </NavLink>

      <Link to="/" className="header__logo-text" color={'secondary'}>
        Подтягивания
      </Link>
    </div>
  )
}
