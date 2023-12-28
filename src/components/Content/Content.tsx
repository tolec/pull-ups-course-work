import { observer } from 'mobx-react-lite'
import { HomeScreen } from '../HomeScreen/HomeScreen'
import { PlanScreen } from '../PlanScreen/PlanScreen'
import { TrainingScreen } from '../TrainingScreen/TrainingScreen'
import { appState } from '../../data/appState'

export const Content = observer(() => {
  const { currentScreen } = appState

  switch (currentScreen) {
    case 'home':
      return <HomeScreen />
    case 'plan':
      return <PlanScreen />
    case 'training':
      return <TrainingScreen />
    default:
      return <div>Error screen: {currentScreen}</div>
  }
})
