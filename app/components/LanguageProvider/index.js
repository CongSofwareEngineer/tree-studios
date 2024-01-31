'use client'
import { useLanguage } from '@/Redux/store';
import React from 'react'
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl';

const LanguageProvider = ({ children }) => {
  const locale = useLanguage(state => state.language)

  return (
    <IntlProvider defaultLocale={'en'} locale={locale?.la || 'en'} messages={locale?.messages || {}}>
      {children}
    </IntlProvider>
  )
}

export default LanguageProvider
