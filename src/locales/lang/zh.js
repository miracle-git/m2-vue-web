import { mergeLangs } from 'm2-vue'
import { ele, m2 } from 'plugins'

export default mergeLangs({
  default: true, // 配置默认语言
  alias: 'zh-cn',
  message: {
    hello: '你好, M2 WebUI',
    welcome: '开始创建你的第一个应用吧！',
    click: '点击这里',
    learn: '了解更多'
  },
  lang: {
    zh: '中文',
    en: '英文'
  },
  theme: {
    blue: '天际蓝',
    green: '青草绿'
  },
  button: {
    lang: '切换语言',
    theme: '切换主题',
    exit: '退出'
  }
  // 如果需要第三方站点配置多语言时才开启
  // ...window.M2APP_HOME
}, ele.langs.zh, m2.langs.zh)
