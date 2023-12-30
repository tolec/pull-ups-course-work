import { FC, PropsWithChildren } from 'react'
import './Button.scss'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'

export const Button: FC<
  PropsWithChildren<{
    className?: string
    color?: 'primary' | 'secondary'
    style?: 'button' | 'link'
    href?: string
    onClick?: () => void
  }>
> = ({
  color = 'primary',
  style = 'button',
  className,
  href,
  onClick,
  children,
}) => {
  const cls = classNames(className, 'button', {
    'button--link': style === 'link',
    'button--secondary': color === 'secondary',
  })

  if (href) {
    return (
      <NavLink to={href} className={cls} onClick={onClick}>
        {children}
      </NavLink>
    )
  }

  return (
    <button className={cls} onClick={onClick}>
      {children}
    </button>
  )
}
