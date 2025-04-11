'use client'

import { useCardBalance } from '@/hooks/use-card-balance'
import { useDailyPoints } from '@/hooks/use-daily-points'
import { useTransactions } from '@/hooks/use-transactions'
import CardBalanceBlock from './card-balance-block'
import NoPaymentDueBlock from './no-payment-due-block'
import DailyPointsBlock from './daily-points-block'
import TransactionItem from './transaction-item'

const TRANSACTION_DISPLAY_LIMIT = 10
const SECTION_SPACING = 'mt-4 px-4'
const TRANSACTION_LIST_SPACING = 'space-y-4'
const SECTION_TITLE_STYLE = 'text-xl font-bold mb-4'
const GRID_LAYOUT = 'grid grid-cols-2 gap-4 p-4'

export default function TransactionsList() {
  const { cardBalance, cardLimit, availableBalance } = useCardBalance()
  const { dailyPoints } = useDailyPoints()
  const { transactions } = useTransactions()

  const recentTransactions = transactions.slice(0, TRANSACTION_DISPLAY_LIMIT)

  return (
    <div className="pb-8">
      <div className={GRID_LAYOUT}>
        <div className="col-span-1">
          <CardBalanceBlock
            balance={cardBalance}
            available={availableBalance}
            limit={cardLimit}
          />
        </div>
        <div className="col-span-1 grid grid-rows-2 gap-4">
          <NoPaymentDueBlock />
          <DailyPointsBlock points={dailyPoints} />
        </div>
      </div>

      <div className={SECTION_SPACING}>
        <h2 className={SECTION_TITLE_STYLE}>Latest Transactions</h2>
        <div className={TRANSACTION_LIST_SPACING}>
          {recentTransactions.map((transaction) => (
            <TransactionItem key={transaction.id} transaction={transaction} />
          ))}
        </div>
      </div>
    </div>
  )
}
