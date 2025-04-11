export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(amount)
}

export function formatPoints(points: number): string {
  return points >= 1000 ? `${Math.round(points / 1000)}K` : points.toString()
}

type DateFormatType = 'weekday' | 'short' | 'full'

const DATE_FORMATS: Record<DateFormatType, Intl.DateTimeFormatOptions> = {
  weekday: { weekday: 'long' },
  short: { month: 'numeric', day: 'numeric', year: '2-digit' },
  full: { month: 'numeric', day: 'numeric', year: '2-digit' },
}

export function formatTransactionDate(date: Date): string {
  const now = new Date()
  const oneWeekAgo = new Date()
  oneWeekAgo.setDate(now.getDate() - 7)

  const formatType: DateFormatType = date > oneWeekAgo ? 'weekday' : 'short'
  return date.toLocaleDateString('en-US', DATE_FORMATS[formatType])
}

export function formatDate(date: Date, includeTime = false): string {
  const dateStr = date.toLocaleDateString('en-US', DATE_FORMATS.short)

  if (!includeTime) {
    return dateStr
  }

  const timeStr = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })

  return `${dateStr}, ${timeStr}`
}
