import type { Component, JSX } from 'solid-js'
import type { i18n } from 'i18next'

import { I18nContext } from './context'

interface i18nProviderProps {
  i18n: i18n
  children: JSX.Element
}

export const I18nProvider: Component<i18nProviderProps> = props => {
  const i18nSetup: () => i18n = () => props.i18n

  return (
    <I18nContext.Provider value={i18nSetup}>
      {props.children}
    </I18nContext.Provider>
  )
}
