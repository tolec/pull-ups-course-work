import { makeAutoObservable } from 'mobx'
import { getStorageValue, Keys, setStorageValue } from './storage'

export type ScreenType = 'home' | 'plan' | 'training'

export class CurrentScreenStore {
  private _currentScreen: ScreenType

  constructor() {
    makeAutoObservable(this)
    this._currentScreen = this.readCurrentScreen()
  }

  private readCurrentScreen(): ScreenType {
    return (getStorageValue(Keys.currentScreen) as ScreenType) || 'home'
  }

  get currentScreen() {
    return this._currentScreen
  }

  goto(screen: ScreenType) {
    this._currentScreen = screen
    setStorageValue(Keys.currentScreen, screen)
  }
}
