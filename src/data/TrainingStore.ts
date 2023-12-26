import { makeAutoObservable } from 'mobx'
import { getStorageValue, Keys, setStorageValue } from './storage'

const REPS_COUNT = 5

export class TrainingStore {
  private _currentRep: number

  constructor() {
    makeAutoObservable(this)
    this._currentRep = this.readCurrentRep()
  }

  private readCurrentRep(): number {
    return Number(getStorageValue(Keys.currentRep) || 0)
  }

  get currentRep() {
    return this._currentRep
  }

  setCurrentRep(rep: number) {
    this._currentRep = rep
    setStorageValue(Keys.currentRep, rep.toString())
  }

  setRepDone() {
    if (this.currentRep < REPS_COUNT) {
      this.setCurrentRep(this.currentRep + 1)
    }
  }

  get isFinished() {
    return this.currentRep >= REPS_COUNT
  }
}
