import { globalState } from '../../data/globalState'

export const ErrorScreen = () => {
  return <div>Error screen: {globalState.currentScreen.screen}</div>
}
