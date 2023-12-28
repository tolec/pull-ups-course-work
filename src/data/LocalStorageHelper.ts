export class LocalStorageHelper {
  static setItem(key: string, value: any): void {
    try {
      const serializedValue = JSON.stringify(value)
      localStorage.setItem(key, serializedValue)
    } catch (error) {
      console.error(`Error saving data to Local Storage: ${error}`)
    }
  }

  static getItem<T>(key: string): T | null {
    try {
      const serializedValue = localStorage.getItem(key)
      if (serializedValue !== null) {
        return JSON.parse(serializedValue)
      }
      return null
    } catch (error) {
      console.error(`Error retrieving data from Local Storage: ${error}`)
      return null
    }
  }

  static removeItem(key: string): void {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.error(`Error removing data from Local Storage: ${error}`)
    }
  }
}
