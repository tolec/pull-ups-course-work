import { planData } from './planData'

export class PlanStore {
  constructor() {
    // makeAutoObservable(this)
  }

  get planList() {
    return planData
  }

  getWeekPlan(weekIndex: number) {
    return this.planList[weekIndex]
  }
}
