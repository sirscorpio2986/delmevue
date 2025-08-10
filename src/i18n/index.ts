import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import no from '@/locales/no.json'

export type MessageLanguages = keyof typeof en

// Get the default locale from localStorage or fallback to 'en'
const getDefaultLocale = (): string => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('locale')
    if (saved && ['en', 'no'].includes(saved)) {
      return saved
    }
    
    // Try to detect browser language
    const browserLang = navigator.language.split('-')[0]
    if (browserLang === 'no' || browserLang === 'nb' || browserLang === 'nn') {
      return 'no'
    }
  }
  return 'en'
}

export const SUPPORT_LOCALES = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'no', name: 'Norsk', flag: '🇳🇴' }
]

const i18n = createI18n({
  legacy: false, // Use Composition API
  locale: getDefaultLocale(),
  fallbackLocale: 'en',
  messages: {
    en,
    no
  },
  globalInjection: true
})

export default i18n

// Export locale switching function
export const setLocale = (locale: string) => {
  if (SUPPORT_LOCALES.some(l => l.code === locale)) {
    i18n.global.locale.value = locale
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', locale)
      document.documentElement.lang = locale
    }
  }
}

export const getCurrentLocale = () => {
  return i18n.global.locale.value
}
