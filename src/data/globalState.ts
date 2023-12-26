import { PlanStore } from './PlanStore'
import { CurrentWeekStore } from './CurrentWeekStore'
import { CurrentScreenStore } from './CurrentScreenStore'
import { TrainingStore } from './TrainingStore'

const currentScreen = new CurrentScreenStore()
const plan = new PlanStore()
const currentWeek = new CurrentWeekStore()
const trainingStore = new TrainingStore()

export const globalState = {
  currentScreen,
  plan,
  currentWeek,
  trainingStore,
}
