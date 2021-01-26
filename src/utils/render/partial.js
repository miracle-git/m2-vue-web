/**
 * 按需加载
 */
import { render } from 'm2-vue'
import { ele, m2 } from 'plugins'
// 应用配置
import App from 'views/app'
import router from 'router'
import store from 'store'
import env from 'config/env.conf'
import i18n from 'locales/i18n'
// 插件配置
import 'plugins/svg/'

export default render(App, {
  router,
  store,
  env,
  i18n,
  plugins: [ele, m2],
  theme: 'skyblue',
  lazy: {
    preLoad: 1,
    loading: require('assets/img/loading/loading-bubbles.svg')
  },
  init: Vue => {
    // 初始化...
  }
})
