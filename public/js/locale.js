window.loadLocaleScript = function({ cdn, app, keys = [], lang = 'zh-cn' } = {}) {
  const defaultLang = localStorage.getItem('m2-sys-def-lang') || lang
  const localeKeys = Array.isArray(keys) ? keys : (typeof keys === 'string' ? [keys] : [])
  let count = 0
  let config = {}
  for (const key of localeKeys) {
    const locale = document.querySelector('script[role=locale]')
    const script = document.createElement('script')
    const role = `${app}_${key}`
    script.addEventListener('load', () => {
      count++
      config = { ...config, ...window[role] }
      if (count === localeKeys.length) {
        setTimeout(() => {
          if (window.__context__) {
            const i18n = window.__context__.$i18n
            i18n.locale = defaultLang
            i18n.setLocaleMessage(defaultLang, config)
          }
        }, 200)
      }
    })
    script.setAttribute('src',`${cdn}/${key}_${defaultLang}.js`)
    script.setAttribute('role', role)
    document.head.insertBefore(script, locale)
  }
}
