import { observer } from 'mobx-react-lite'
import { globalState } from '../../data/globalState'
import { HomeScreen } from '../HomeScreen/HomeScreen'
import { PlanScreen } from '../PlanScreen/PlanScreen'
import { ErrorScreen } from '../ErrorScreen/ErrorScreen'
import { TrainingScreen } from '../TrainingScreen/TrainingScreen'

export const Content = observer(() => {
  const { currentScreen } = globalState

  switch (currentScreen.currentScreen) {
    case 'home':
      return <HomeScreen />
    case 'plan':
      return <PlanScreen />
    case 'training':
      return <TrainingScreen />
    default:
      return <ErrorScreen />
  }
})
