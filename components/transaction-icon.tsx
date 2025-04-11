import { CreditCard, ShoppingBag, Coffee, LucideIcon } from 'lucide-react'

interface TransactionIconProps {
  name: string
}

type TransactionIconConfig = {
  icon: LucideIcon
  backgroundColor: string
}

export default function TransactionIcon({ name }: TransactionIconProps) {
  const normalizedName = name.toLowerCase()

  const TRANSACTION_CONFIGS: Record<string, TransactionIconConfig> = {
    payment: {
      icon: CreditCard,
      backgroundColor: 'bg-purple-500',
    },
    apple: {
      icon: ShoppingBag,
      backgroundColor: 'bg-gray-800',
    },
    ikea: {
      icon: ShoppingBag,
      backgroundColor: 'bg-blue-600',
    },
    target: {
      icon: ShoppingBag,
      backgroundColor: 'bg-red-600',
    },
  }

  // Find the matching config or use default
  const defaultConfig: TransactionIconConfig = {
    icon: Coffee,
    backgroundColor: 'bg-gray-700',
  }

  const matchingKey = Object.keys(TRANSACTION_CONFIGS).find((key) =>
    normalizedName.includes(key)
  )

  const config = matchingKey ? TRANSACTION_CONFIGS[matchingKey] : defaultConfig

  const IconComponent = config.icon

  return (
    <div
      className={`${config.backgroundColor} w-10 h-10 rounded-lg flex items-center justify-center`}
    >
      <IconComponent className="text-white w-5 h-5" />
    </div>
  )
}
