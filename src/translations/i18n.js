import { addLocaleData } from 'react-intl'
import localeEn from 'react-intl/locale-data/en'
import localeFr from 'react-intl/locale-data/fr'
import localeEs from 'react-intl/locale-data/es'
import translationsEn from './en.json'
import translationsFr from './fr.json'
import translationsEs from './es.json'

addLocaleData([...localeEn, ...localeFr, localeEs])

export const locales = ['en', 'fr', 'es']

export const language = navigator.language.split(/[-_]/)[0] || 'en'

export const translations = {
  en: translationsEn,
  fr: translationsFr,
  es: translationsEs
}
