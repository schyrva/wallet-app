export interface Transaction {
  id: string
  type: 'Payment' | 'Credit'
  amount: number
  name: string
  description: string
  date: Date
  pending?: boolean
  authorizedUser?: string
}
