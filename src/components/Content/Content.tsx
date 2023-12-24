import { observer } from 'mobx-react-lite'
import { globalState } from '../../data/global-state'
import { HomeScreen } from '../HomeScreen/HomeScreen'
import { PlanScreen } from '../PlanScreen/PlanScreen'
import { ErrorScreen } from '../ErrorScreen/ErrorScreen'
import { TrainingScreen } from '../TrainingScreen/TrainingScreen'

export const Content = observer(() => {
  switch (globalState.currentScreen.screen) {
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
