import { formatCurrency } from '@/utils/formatters'

interface CardBalanceBlockProps {
  balance: number
  available: number
  limit: number
}

export default function CardBalanceBlock({
  balance,
  available,
  limit,
}: CardBalanceBlockProps) {
  return (
    <div className="bg-white p-4 rounded-lg h-full">
      <h3 className="text-sm text-gray-500 mb-1">Card Balance</h3>
      <div className="text-2xl font-bold mb-1">{formatCurrency(balance)}</div>
      <div className="text-sm text-gray-500">
        {formatCurrency(available)} Available
      </div>
    </div>
  )
}
