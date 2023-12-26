import { makeAutoObservable } from 'mobx'
import { planData } from './planData'

/**
 * Для курсовой.
 * Есть несколько способов хранения локальных данных - localStorage, indexDB
 * Есть несколько способов хранения состояния приложения. Mobx - один из них.
 */

enum Keys {
  currentScreen = 'currentScreen',
  currentWeek = 'currentWeek',
  selectedWeek = 'selectedWeek',
}

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

export class CurrentWeekStore {
  private _currentWeekIndex: number
  private _selectedWeekIndex: number

  constructor() {
    makeAutoObservable(this)
    this._currentWeekIndex = this.readCurrentWeekIndex()
    this._selectedWeekIndex = this.readSelectedWeekIndex()
  }

  private readCurrentWeekIndex(): number {
    return Number(localStorage.getItem(Keys.currentWeek) || 0)
  }

  private readSelectedWeekIndex(): number {
    return Number(localStorage.getItem(Keys.selectedWeek) || 0)
  }

  get currentWeekIndex() {
    return this._currentWeekIndex
  }

  get selectedWeekIndex() {
    return this._selectedWeekIndex
  }

  setCurrentWeekIndex(weekIndex: number) {
    this._currentWeekIndex = weekIndex
    localStorage.setItem(Keys.currentWeek, weekIndex.toString())
  }

  setSelectedWeekIndex(weekIndex: number) {
    this._selectedWeekIndex = weekIndex
    localStorage.setItem(Keys.selectedWeek, weekIndex.toString())
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
