import { CurrentScreenStore, CurrentWeekStore, Plan } from './plan'

const currentScreen = new CurrentScreenStore()
const plan = new Plan()
const currentWeek = new CurrentWeekStore()

export const globalState = {
  currentScreen,
  plan,
  currentWeek,
}
