'use client'

import { useParams, useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { useTransactions } from '@/hooks/use-transactions'
import { formatCurrency, formatDate } from '@/utils/formatters'

export default function TransactionDetail() {
  const router = useRouter()
  const { id } = useParams()
  const { getTransactionById } = useTransactions()

  const transaction = getTransactionById(id as string)

  if (!transaction) {
    return <div className="p-4">Transaction not found</div>
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="p-4 border-b">
        <button
          onClick={() => router.back()}
          className="text-blue-500 flex items-center"
        >
          <ArrowLeft size={18} />
          <span className="ml-1">Back</span>
        </button>
      </div>

      <div className="p-6 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-1">
          {transaction.type === 'Payment' ? '+' : ''}
          {formatCurrency(transaction.amount)}
        </h1>
        <p className="text-gray-500 mb-6">
          {transaction.name}
          <br />
          {formatDate(transaction.date, true)}
        </p>

        <div className="w-full border-t border-b py-4 mb-4">
          <div className="flex justify-between mb-2">
            <span className="text-gray-500">Status:</span>
            <span>{transaction.pending ? 'Pending' : 'Approved'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">RBC Bank Debit Card</span>
            <span></span>
          </div>
        </div>

        <div className="w-full flex justify-between mb-4">
          <span className="text-gray-500">Total</span>
          <span className="font-semibold">
            {transaction.type === 'Payment' ? '+' : ''}
            {formatCurrency(transaction.amount)}
          </span>
        </div>

        {transaction.authorizedUser && (
          <div className="w-full border-t pt-4">
            <div className="flex justify-between">
              <span className="text-gray-500">Authorized User</span>
              <span>{transaction.authorizedUser}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
