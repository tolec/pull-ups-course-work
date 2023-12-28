import { planData } from './planData'

const planList = planData

const getWeekPlan = (weekIndex: number) => {
  return planList[weekIndex]
}

export const plan = {
  planList,
  getWeekPlan,
}
