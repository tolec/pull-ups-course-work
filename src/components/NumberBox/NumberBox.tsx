import { FC } from 'react'
import './NumberBox.scss'
import classNames from 'classnames'

export const NumberBox: FC<{
  number: number
  word: string
  color?: 'default' | 'done' | 'current'
}> = ({ number, word, color = 'default' }) => {
  return (
    <div
      className={classNames('number-box', {
        'number-box--done': color === 'done',
        'number-box--current': color === 'current',
      })}
    >
      <div className="number-box__number">{number}</div>
      <div className="number-box__word">{word}</div>
    </div>
  )
}
