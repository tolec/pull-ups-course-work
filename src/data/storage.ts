export enum Keys {
  currentScreen = 'currentScreen',
  currentWeek = 'currentWeek',
  selectedWeek = 'selectedWeek',
  currentRep = 'currentRep',
}

const PREFIX = 'pull-ups--'

/**
 * Для курсовой.
 * Есть несколько способов хранения локальных данных - localStorage, indexDB, cookie.
 * Есть несколько способов хранения состояния приложения. Mobx - один из них.
 */

export const setStorageValue = (key: Keys, value: string) => {
  localStorage.setItem(`${PREFIX}${key}`, value)
}

export const getStorageValue = (key: Keys) => {
  return localStorage.getItem(`${PREFIX}${key}`)
}
