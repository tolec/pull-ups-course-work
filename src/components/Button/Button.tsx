import { FC, PropsWithChildren } from 'react'
import './Button.scss'
import classNames from 'classnames'

export const Button: FC<
  PropsWithChildren<{
    color?: 'primary' | 'secondary'
    onClick: () => void
  }>
> = ({ color = 'primary', onClick, children }) => {
  return (
    <button
      className={classNames('button', {
        'button--secondary': color === 'secondary',
      })}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
