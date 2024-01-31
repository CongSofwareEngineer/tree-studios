'use client'
import { getCurrentBrowserLanguage } from '@/utils/language'
import dynamic from 'next/dynamic'
import React, { useLayoutEffect, useState } from 'react'
const LanguageProvider = dynamic(() => import('@/app/components/LanguageProvider'), { ssr: false })
const ClientRender = ({ children }) => {
  const [isClient, setIsClient] = useState(false)
  useLayoutEffect(() => {
    setIsClient(true)
    console.log({ la: getCurrentBrowserLanguage() });
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      {isClient && children }
      <LanguageProvider />
    </main>
  )
}

export default ClientRender
