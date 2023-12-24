import { globalState } from '../../data/global-state'

export const ErrorScreen = () => {
  return <div>Error screen: {globalState.currentScreen.screen}</div>
}
