import { JSX } from 'solid-js'
import type { i18n } from 'i18next'

import { I18nContext } from './context'

type i18nProviderProps = {
  i18n: i18n
  children: JSX.Element
}

export function I18nProvider(props: i18nProviderProps) {
  return (
    <I18nContext.Provider value={props.i18n}>
      {props.children}
    </I18nContext.Provider>
  )
}
