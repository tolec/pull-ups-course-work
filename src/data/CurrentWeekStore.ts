import { makeAutoObservable } from 'mobx'
import { getStorageValue, Keys, setStorageValue } from './storage'

export class CurrentWeekStore {
  private _currentWeekIndex: number
  private _selectedWeekIndex: number

  constructor() {
    makeAutoObservable(this)
    this._currentWeekIndex = this.readCurrentWeekIndex()
    this._selectedWeekIndex = this.readSelectedWeekIndex()
  }

  private readCurrentWeekIndex(): number {
    return Number(getStorageValue(Keys.currentWeek) || 0)
  }

  private readSelectedWeekIndex(): number {
    return Number(getStorageValue(Keys.selectedWeek) || 0)
  }

  get currentWeekIndex() {
    return this._currentWeekIndex
  }

  get selectedWeekIndex() {
    return this._selectedWeekIndex
  }

  setCurrentWeekIndex(weekIndex: number) {
    this._currentWeekIndex = weekIndex
    setStorageValue(Keys.currentWeek, weekIndex.toString())
  }

  setSelectedWeekIndex(weekIndex: number) {
    this._selectedWeekIndex = weekIndex
    setStorageValue(Keys.selectedWeek, weekIndex.toString())
  }
}
