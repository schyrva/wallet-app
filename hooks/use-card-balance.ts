'use client'

import { useState, useEffect } from 'react'

const CARD_LIMIT = 1500
const MIN_BALANCE = 10
const MAX_BALANCE = 500
const DECIMAL_PLACES = 2

function generateRandomBalance(min: number, max: number): number {
  const randomBalance = Math.random() * (max - min) + min
  return Number.parseFloat(randomBalance.toFixed(DECIMAL_PLACES))
}

export function useCardBalance() {
  const [cardBalance, setCardBalance] = useState<number>(0)

  useEffect(() => {
    setCardBalance(generateRandomBalance(MIN_BALANCE, MAX_BALANCE))
  }, [])

  const availableBalance = CARD_LIMIT - cardBalance

  return {
    cardBalance,
    cardLimit: CARD_LIMIT,
    availableBalance,
  }
}
