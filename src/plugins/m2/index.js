import {
  RouterView, Container, SvgIcon, Modal, Tooltip, Alert, Prompt, Link, Layout, Loading, Toast
} from 'm2-webui'
import locale from 'm2-webui/lib/locale'
import zh from 'm2-webui/lib/locale/lang/zh-CN'
import en from 'm2-webui/lib/locale/lang/en-US'

export default {
  components: [
    RouterView,
    Container,
    SvgIcon,
    Modal,
    Tooltip,
    Link,
    Layout
  ],
  install(Vue) {
    Vue.prototype.$m2 = {}
    Vue.prototype.$m2.loading = Loading
    Vue.prototype.$m2.loading.hide = Loading.hide
    Vue.prototype.$m2.toast = Toast
    Vue.prototype.$m2.alert = Alert
    Vue.prototype.$m2.prompt = Prompt
    Vue.prototype.$m2.prompt.hide = Prompt.hide
  },
  locale,
  langs: {
    zh,
    en
  }
}
