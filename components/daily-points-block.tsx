import { Check } from 'lucide-react'
import { formatPoints } from '@/utils/formatters'

interface DailyPointsBlockProps {
  points: number
}

export default function DailyPointsBlock({ points }: DailyPointsBlockProps) {
  return (
    <div className="bg-white p-4 rounded-lg flex justify-between items-center">
      <div>
        <h3 className="text-sm text-gray-500 mb-1">Daily Points</h3>
        <div className="font-semibold">{formatPoints(points)}</div>
      </div>
      <div className="bg-gray-100 rounded-full p-1">
        <Check className="text-black w-4 h-4" />
      </div>
    </div>
  )
}
