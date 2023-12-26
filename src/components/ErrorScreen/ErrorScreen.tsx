import { globalState } from '../../data/globalState'
import { observer } from 'mobx-react-lite'

export const ErrorScreen = observer(() => {
  return <div>Error screen: {globalState.currentScreen.currentScreen}</div>
})
