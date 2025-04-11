export function calculateDailyPoints(): number {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth()
  const day = today.getDate()

  const seasonMap = {
    spring: {
      isActive: (m: number, d: number) =>
        (m === 2 && d >= 20) || m === 3 || m === 4 || (m === 5 && d <= 20),
      startDate: new Date(year, 2, 20), // March 20
    },
    summer: {
      isActive: (m: number, d: number) =>
        (m === 5 && d >= 21) || m === 6 || m === 7 || (m === 8 && d <= 22),
      startDate: new Date(year, 5, 21), // June 21
    },
    fall: {
      isActive: (m: number, d: number) =>
        (m === 8 && d >= 23) || m === 9 || m === 10 || (m === 11 && d <= 21),
      startDate: new Date(year, 8, 23), // September 23
    },
    winter: {
      isActive: (m: number, d: number) =>
        (m === 11 && d >= 22) || m === 0 || m === 1 || (m === 2 && d <= 19),
      startDate: (m: number, d: number) =>
        m === 11 && d >= 22
          ? new Date(year, 11, 22) // December 22
          : new Date(year - 1, 11, 22), // December 22 of previous year
    },
  }

  // Default to winter's start date as a fallback
  let seasonStartDate: Date = new Date(year - 1, 11, 22)

  // Find the current season and set the start date
  Object.entries(seasonMap).some(([_, season]) => {
    if (season.isActive(month, day)) {
      seasonStartDate =
        typeof season.startDate === 'function'
          ? season.startDate(month, day)
          : season.startDate
      return true
    }
    return false
  })

  // Calculate day of season
  const timeDiff = today.getTime() - seasonStartDate.getTime()
  const dayOfSeason = Math.floor(timeDiff / (1000 * 3600 * 24)) + 1

  // Calculate points based on day of season
  const pointsByDay: Record<number, number> = {
    1: 2,
    2: 3,
  }

  let points =
    pointsByDay[dayOfSeason] || calculateProgressivePoints(dayOfSeason)

  // Scale points for demonstration purposes
  return points * 1000
}

function calculateProgressivePoints(dayOfSeason: number): number {
  let dayBeforePrevious = 2 // Points on day 1
  let previousDay = 3 // Points on day 2
  let points = 0

  for (let i = 3; i <= dayOfSeason; i++) {
    points = Math.round(dayBeforePrevious + previousDay * 0.6)
    dayBeforePrevious = previousDay
    previousDay = points
  }

  return points
}
