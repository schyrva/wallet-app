'use client'

import { useRouter } from 'next/navigation'
import { formatCurrency, formatTransactionDate } from '@/utils/formatters'
import type { Transaction } from '@/types'
import TransactionIcon from './transaction-icon'

interface TransactionItemProps {
  transaction: Transaction
}

export default function TransactionItem({ transaction }: TransactionItemProps) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/transaction/${transaction.id}`)
  }

  return (
    <div
      className="flex items-center space-x-3 cursor-pointer"
      onClick={handleClick}
    >
      <TransactionIcon name={transaction.name} />

      <div className="flex-1">
        <div className="font-semibold">{transaction.name}</div>
        <div className="text-sm text-gray-500">
          {transaction.pending && <span className="mr-1">Pending -</span>}
          {transaction.description}
        </div>
        <div className="text-xs text-gray-400">
          {transaction.authorizedUser && (
            <span className="mr-1">{transaction.authorizedUser} -</span>
          )}
          {formatTransactionDate(transaction.date)}
        </div>
      </div>

      <div
        className={`font-semibold ${transaction.type === 'Payment' ? 'text-green-600' : ''}`}
      >
        {transaction.type === 'Payment' ? '+' : ''}
        {formatCurrency(transaction.amount)}
      </div>
    </div>
  )
}
