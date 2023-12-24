import { makeAutoObservable } from 'mobx'
import { planData } from './plan-data'

/**
 * Для курсовой.
 * Есть несколько способов хранения локальных данных - localStorage, indexDB
 * Есть несколько способов хранения состояния приложения. Mobx - один из них.
 */

enum Keys {
  currentScreen = 'currentScreen',
  currentWeek = 'currentWeek',
}

export class Plan {
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

export class CurrentWeekStore {
  weekIndex: number

  constructor() {
    makeAutoObservable(this)
    this.weekIndex = this.readCurrentWeekIndex()
  }

  private readCurrentWeekIndex(): number {
    return Number(localStorage.getItem(Keys.currentWeek) || 0)
  }

  get currentWeekIndex() {
    return this.weekIndex
  }

  setCurrentWeekIndex(weekIndex: number) {
    this.weekIndex = weekIndex
    localStorage.setItem(Keys.currentWeek, weekIndex.toString())
  }
}

export type ScreenType = 'home' | 'plan' | 'training'

export class CurrentScreenStore {
  screen: ScreenType

  constructor() {
    makeAutoObservable(this)
    this.screen = this.readCurrentScreen()
  }

  private readCurrentScreen(): ScreenType {
    return (localStorage.getItem(Keys.currentScreen) as ScreenType) || 'home'
  }

  get currentScreen() {
    return this.screen
  }

  goto(screen: ScreenType) {
    this.screen = screen
    localStorage.setItem(Keys.currentScreen, screen)
  }
}
