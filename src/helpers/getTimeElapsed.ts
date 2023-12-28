export const getTimeElapsed = (startDate: number) => {
  let elapsed = Math.floor((Date.now() - startDate) / 1000)

  const minutes = Math.floor(elapsed / 60)
  const seconds = elapsed % 60

  if (minutes >= 10) {
    return '10:00+'
  }

  return `${padZero(minutes)}:${padZero(seconds)}`
}

const padZero = (num: number) => {
  return num < 10 ? `0${num}` : num.toString()
}
