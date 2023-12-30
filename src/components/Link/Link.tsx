import { FC, PropsWithChildren } from 'react'
import classNames from 'classnames'
import './Link.scss'
import { NavLink } from 'react-router-dom'

export const Link: FC<
  PropsWithChildren<{
    className?: string
    to: string
    color?: 'default' | 'done' | 'current' | 'secondary'
  }>
> = ({ className, to, color, children }) => {
  return (
    <NavLink
      className={classNames(className, 'link', {
        'link--done': color === 'done',
        'link--current': color === 'current',
        'link--secondary': color === 'secondary',
      })}
      to={to}
    >
      {children}
    </NavLink>
  )
}
