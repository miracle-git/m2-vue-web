/**
 * 全量加载
 */
import { render } from 'm2-vue'
import Element from 'element-ui'
import M2 from 'm2-webui'
// 应用配置
import App from 'views/app'
import router from 'router'
import store from 'store'
import env from 'config/env.conf'
import i18n from 'locales/i18n'
// 插件配置
import 'plugins/svg/'
import 'plugins/styles'

export default render(App, {
  router,
  store,
  i18n,
  env,
  theme: 'skyblue',
  lazy: {
    preLoad: 1,
    loading: require('assets/img/loading/loading-bubbles.svg')
  },
  init: Vue => {
    Vue.use(Element)
    Vue.use(M2)
  }
})
