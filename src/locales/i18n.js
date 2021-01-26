import { getI18nLocale } from 'm2-vue'
import { ele, m2 } from 'plugins'
import lang from './lang'

export default getI18nLocale(lang, ele.locale, m2.locale)
