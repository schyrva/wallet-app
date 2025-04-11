'use client'

import { useState, useEffect } from 'react'
import type { Transaction } from '@/types'
import { generateMockTransactions } from '@/utils/mock-data'

export function useTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    const mockTransactions = generateMockTransactions()
    setTransactions(mockTransactions)
  }, [])

  const getTransactionById = (id: string) => {
    return transactions.find((transaction) => transaction.id === id)
  }

  return {
    transactions,
    getTransactionById,
  }
}
