'use client'

import * as React from 'react'

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false)

  React.useEffect(() => {
    const checkIsMobile = () => window.innerWidth < MOBILE_BREAKPOINT

    const updateMobileStatus = () => {
      setIsMobile(checkIsMobile())
    }

    const mediaQuery = window.matchMedia(
      `(max-width: ${MOBILE_BREAKPOINT - 1}px)`
    )
    mediaQuery.addEventListener('change', updateMobileStatus)

    // Set initial value
    updateMobileStatus()

    return () => {
      mediaQuery.removeEventListener('change', updateMobileStatus)
    }
  }, [])

  return isMobile
}
