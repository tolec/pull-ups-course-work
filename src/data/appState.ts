import { makeAutoObservable } from 'mobx'

const REPS_COUNT = 5

export class AppState {
  currentWeekIndex: number = 0
  currentRep: number = 0
  timerStartTime?: number

  constructor() {
    makeAutoObservable(this)
    this.loadFromLocalStorage()
  }

  private loadFromLocalStorage() {
    try {
      const savedState = localStorage.getItem('appState')
      if (savedState) {
        const parsedState = JSON.parse(savedState)
        this.currentWeekIndex = parsedState.currentWeekIndex || 0
        this.currentRep = parsedState.currentRep || 0
        this.timerStartTime = parsedState.timerStartTime
      }
    } catch (error) {
      console.error('Failed to load state from localStorage', error)
    }
  }

  private saveToLocalStorage() {
    try {
      const state = JSON.stringify({
        currentWeekIndex: this.currentWeekIndex,
        currentRep: this.currentRep,
        timerStartTime: this.timerStartTime,
      })
      localStorage.setItem('appState', state)
    } catch (error) {
      console.error('Failed to save state to localStorage', error)
    }
  }

  switchToWeek(weekIndex: number) {
    if (this.currentWeekIndex === weekIndex) {
      return
    }
    this.currentWeekIndex = weekIndex
    this.resetCurrentTraining()
    this.saveToLocalStorage()
  }

  resetCurrentTraining() {
    this.currentRep = 0
    this.clearTimer()
    this.saveToLocalStorage()
  }

  setCurrentRepDone() {
    if (this.currentRep < REPS_COUNT) {
      this.currentRep = this.currentRep + 1
    }

    if (this.currentRep < REPS_COUNT) {
      this.startTimer()
    }

    this.saveToLocalStorage()
  }

  startTimer() {
    this.timerStartTime = Date.now()
    this.saveToLocalStorage()
  }

  clearTimer() {
    this.timerStartTime = undefined
    this.saveToLocalStorage()
  }

  get isFinished() {
    return this.currentRep >= REPS_COUNT
  }
}

export const appState = new AppState()
