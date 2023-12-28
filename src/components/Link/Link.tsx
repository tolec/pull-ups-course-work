import { FC, MouseEvent, PropsWithChildren, useCallback } from 'react'
import classNames from 'classnames'
import './Link.scss'

export const Link: FC<
  PropsWithChildren<{
    cls?: string
    href?: string
    onClick?: () => void
    color?: 'default' | 'done' | 'current' | 'secondary'
  }>
> = ({ cls, href = '#', color, onClick, children }) => {
  const handleClick = useCallback((event: MouseEvent) => {
    if (onClick) {
      event.preventDefault()
      onClick()
    }
  }, [])

  return (
    <a
      className={classNames(cls, 'link', {
        'link--done': color === 'done',
        'link--current': color === 'current',
        'link--secondary': color === 'secondary',
      })}
      href={href}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}
