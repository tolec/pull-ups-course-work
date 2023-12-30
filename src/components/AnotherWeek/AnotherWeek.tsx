import { observer } from 'mobx-react-lite'
import { appState } from '../../data/appState'
import { plan } from '../../data/plan'
import { Button } from '../Button/Button'

export const AnotherWeek = observer<{
  weekIndex: number
  onConfirm: () => void
}>(({ weekIndex, onConfirm }) => {
  const { currentWeekIndex } = appState
  const { planList } = plan

  return (
    <div className="training-screen__another-week">
      <h2>Другая неделя</h2>
      <div>
        <p>
          Сейчас вы занимаетесь по программе <strong>{currentWeekIndex + 1}</strong> недели (
          {planList[currentWeekIndex].join(', ')}).
        </p>
        <p>
          Хотите теперь заниматься по программе <strong>{weekIndex + 1}</strong> недели (
          {planList[weekIndex].join(', ')})?
        </p>
      </div>
      <div>
        <Button color={'secondary'} onClick={() => onConfirm()}>
          Перейти к {weekIndex + 1} неделе
        </Button>
      </div>
    </div>
  )
})
