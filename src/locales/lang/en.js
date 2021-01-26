import { mergeLangs } from 'm2-vue'
import { ele, m2 } from 'plugins'

export default mergeLangs({
  alias: 'en-us',
  message: {
    hello: 'Hello, M2 WebUI',
    welcome: 'Welcome to build your first app',
    click: 'Click here',
    learn: 'learn more'
  },
  lang: {
    zh: 'Chinese',
    en: 'English'
  },
  theme: {
    blue: 'Sky Blue',
    green: 'Grass Green'
  },
  button: {
    lang: 'Switch Language',
    theme: 'Switch Theme',
    exit: 'Exit'
  }
  // 如果需要第三方站点配置多语言时才开启
  // ...window.M2APP_HOME
}, ele.langs.en, m2.langs.en)
