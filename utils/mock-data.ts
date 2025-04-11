import type { Transaction } from '@/types'

export function generateMockTransactions(): Transaction[] {
  const now = new Date()

  // Create dates for the past few weeks
  const yesterday = new Date(now)
  yesterday.setDate(now.getDate() - 1)

  const twoDaysAgo = new Date(now)
  twoDaysAgo.setDate(now.getDate() - 2)

  const threeDaysAgo = new Date(now)
  threeDaysAgo.setDate(now.getDate() - 3)

  const fourDaysAgo = new Date(now)
  fourDaysAgo.setDate(now.getDate() - 4)

  const fiveDaysAgo = new Date(now)
  fiveDaysAgo.setDate(now.getDate() - 5)

  const sixDaysAgo = new Date(now)
  sixDaysAgo.setDate(now.getDate() - 6)

  const oneWeekAgo = new Date(now)
  oneWeekAgo.setDate(now.getDate() - 7)

  const twoWeeksAgo = new Date(now)
  twoWeeksAgo.setDate(now.getDate() - 14)

  const threeWeeksAgo = new Date(now)
  threeWeeksAgo.setDate(now.getDate() - 21)

  // Create mock transactions
  const transactions: Transaction[] = [
    {
      id: '1',
      type: 'Credit',
      amount: 14.06,
      name: 'Apple',
      description: 'Card Number Used',
      date: yesterday,
      pending: true,
      authorizedUser: 'Diana',
    },
    {
      id: '2',
      type: 'Payment',
      amount: 174.0,
      name: 'Payment',
      description: 'From JPMorgan Chase Bank National Association',
      date: yesterday,
    },
    {
      id: '3',
      type: 'Credit',
      amount: 3.24,
      name: 'Apple',
      description: 'Card Number Used',
      date: twoDaysAgo,
      authorizedUser: 'Diana',
    },
    {
      id: '4',
      type: 'Payment',
      amount: 99.71,
      name: 'Payment',
      description: 'From JPMorgan Chase Bank National Association',
      date: threeDaysAgo,
    },
    {
      id: '5',
      type: 'Payment',
      amount: 73.58,
      name: 'Payment',
      description: 'From JPMorgan Chase Bank National Association',
      date: fourDaysAgo,
    },
    {
      id: '6',
      type: 'Credit',
      amount: 21.61,
      name: 'IKEA',
      description: 'Round Rock, TX',
      date: twoWeeksAgo,
    },
    {
      id: '7',
      type: 'Credit',
      amount: 73.58,
      name: 'Target',
      description: 'Austin, TX',
      date: threeWeeksAgo,
    },
    {
      id: '8',
      type: 'Credit',
      amount: 45.99,
      name: 'Amazon',
      description: 'Online Purchase',
      date: fiveDaysAgo,
    },
    {
      id: '9',
      type: 'Credit',
      amount: 12.34,
      name: 'Starbucks',
      description: 'Coffee Shop',
      date: sixDaysAgo,
    },
    {
      id: '10',
      type: 'Credit',
      amount: 7.5,
      name: 'Aralo',
      description: 'Online Service',
      date: oneWeekAgo,
    },
  ]

  return transactions
}
