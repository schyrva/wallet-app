'use client'

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export default function NoPaymentDueBlock() {
  // Using a locale-independent approach to get the month name
  const currentMonth = MONTHS[new Date().getMonth()]

  return (
    <div className="bg-white p-4 rounded-lg">
      <h3 className="text-sm text-gray-500 mb-1">No Payment Due</h3>
      <p className="text-sm">You've paid your {currentMonth} balance.</p>
    </div>
  )
}
