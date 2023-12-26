import { FC, PropsWithChildren } from 'react'
import './Button.scss'
import classNames from 'classnames'

export const Button: FC<
  PropsWithChildren<{
    cls?: string
    color?: 'primary' | 'secondary'
    style?: 'button' | 'link'
    onClick: () => void
  }>
> = ({ color = 'primary', style = 'button', cls, onClick, children }) => {
  return (
    <button
      className={classNames(cls, 'button', {
        'button--link': style === 'link',
        'button--secondary': color === 'secondary',
      })}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
