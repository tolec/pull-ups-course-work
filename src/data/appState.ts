import { makeAutoObservable } from 'mobx'

/**
 * Для курсовой.
 * Есть несколько способов хранения локальных данных - localStorage, indexDB, cookie.
 * Есть несколько способов хранения состояния приложения. Mobx - один из них.
 */

export type ScreenType = 'home' | 'plan' | 'training'

const REPS_COUNT = 5

export class AppState {
  currentScreen: ScreenType = 'home'
  currentWeekIndex: number = 0
  selectedWeekIndex: number = 0
  currentRep: number = 0

  constructor() {
    makeAutoObservable(this)
    this.loadFromLocalStorage()
  }

  private loadFromLocalStorage() {
    try {
      const savedState = localStorage.getItem('appState')
      if (savedState) {
        const parsedState = JSON.parse(savedState)
        this.currentScreen = parsedState.currentScreen || 'home'
        this.currentWeekIndex = parsedState.currentWeekIndex || 0
        this.selectedWeekIndex = parsedState.selectedWeekIndex || 0
        this.currentRep = parsedState.currentRep || 0
      }
    } catch (error) {
      console.error('Failed to load state from localStorage', error)
    }
  }

  private saveToLocalStorage() {
    try {
      const state = JSON.stringify({
        currentScreen: this.currentScreen,
        currentWeekIndex: this.currentWeekIndex,
        selectedWeekIndex: this.selectedWeekIndex,
        currentRep: this.currentRep,
      })
      localStorage.setItem('appState', state)
    } catch (error) {
      console.error('Failed to save state to localStorage', error)
    }
  }

  goto(screen: ScreenType) {
    this.currentScreen = screen
    this.saveToLocalStorage()
  }

  setCurrentWeekIndex(weekIndex: number) {
    this.currentWeekIndex = weekIndex
    this.saveToLocalStorage()
  }

  setSelectedWeekIndex(weekIndex: number) {
    this.selectedWeekIndex = weekIndex
    this.saveToLocalStorage()
  }

  resetCurrentTraining() {
    this.currentRep = 0
    this.saveToLocalStorage()
  }

  setCurrentRepDone() {
    if (this.currentRep < REPS_COUNT) {
      this.currentRep = this.currentRep + 1
    }
  }

  get isFinished() {
    return this.currentRep >= REPS_COUNT
  }
}

export const appState = new AppState()
