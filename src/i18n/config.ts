import i18next from 'i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

const i18n = i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .init(
    {
      fallbackLng: 'en',
      preload: ['en', 'fr'],
      ns: 'translations',
      defaultNS: 'translations',
      fallbackNS: false,
      debug: true,
      detection: {
        order: ['querystring', 'navigator', 'htmlTag'],
        lookupQuerystring: 'lang',
      },
      backend: {
        loadPath: '/i18n/{{lng}}/{{ns}}.json',
      },
    },
    (err, t) => {
      if (err) return console.error(err)
    }
  )
export default i18n
