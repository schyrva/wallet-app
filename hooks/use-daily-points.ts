'use client'

import { useState, useEffect } from 'react'
import { calculateDailyPoints } from '@/utils/calculations'

export function useDailyPoints() {
  const [dailyPoints, setDailyPoints] = useState(0)

  useEffect(() => {
    const points = calculateDailyPoints()
    setDailyPoints(points)
  }, [])

  return {
    dailyPoints,
  }
}
