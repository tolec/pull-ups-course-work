import { CurrentScreenStore, CurrentWeekStore, PlanStore } from './PlanStore'

const currentScreen = new CurrentScreenStore()
const plan = new PlanStore()
const currentWeek = new CurrentWeekStore()

export const globalState = {
  currentScreen,
  plan,
  currentWeek,
}
