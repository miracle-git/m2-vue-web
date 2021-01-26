module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'component',
      {
        'libraryName': 'element-ui',
        'styleLibraryName': '~node_modules/m2-theme/lib'
      }, 'element-ui'
    ],
    [
      'component',
      {
        'libraryName': 'm2-webui',
        'styleLibraryName': 'theme-grace'
      }, 'm2-webui'
    ]
  ]
}
