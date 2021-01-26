> 基于[M2前端全家桶框架](https://github.com/miracle-git/m2-vue-web)项目设计规范。

## 术语
- PC(pascal-case)规范: 使用大写开头，多个单词拼接首字母应大写，如: User, UserInfo;
- CC(camel-case)规范: 使用小写开头，多个单词拼接首字母应大写，如: user, userInfo;
- KC(kebab-case)规范: 使用全小写开头，多个单词拼接使用连字符(-), 如: user, user-info;
- UC(underscore-case)规范: 使用全大写/全小写开头，多个单词拼接使用下划线(_), 如: USER, USER_INFO。

## 命名规范

- 所有模块名(文件名/文件夹名)应遵循KC规范;
- 所有类/接口应遵循PC规范，且接口以I开头，且建议以able结尾，如：IRunnable;
- 所有函数/变量/参数/类成员(非常量/非只读)应遵循CC规范;
- 所有常量/只读成员应遵循UC规范(全大写);
- 所有样式类(CSS/LESS/SASS)应遵循KC规范;
- 所有API返回的数据格式应遵循UC规范(全小写);
- 所有业务模块(视图)命名建议以(-page)结尾，如: home-page;
- 所有业务组件以模块名开头，如: home-header;
- 所有公共组件建议以(app-)开头，如: app-block-tips;
- 所有业务模块/业务组件/公共组件根节点样式类与文件名一致，所有的样式包含在根节点样式内部(modal,tooltip,popover等除外)，如: (class="home-page", .home-page {})。

## 设计规范
- 将所有的源码都集中放置在src目录，结构如下：
  - assets 所有业务静态资源文件(内部建议拆分为: css/img/js/icon/svg等)
  - components 所有业务公共组件，建议每个组件包含一个单独文件夹，且内部包含index.vue和index.less(实现样式和业务分离)，建议所有的公共组件以index.js集中导出
  - config 所有配置文件，建议以(.conf.js)结尾(内部建议拆分为: api.conf.js/app.conf.js/env.conf.js等)
  - locales 所有国际化配置文件(非必需)，如果不需要请同时删除utils/render/all.js, utils/render/partial.js中i18n的配置
  - mixins 所有混入配置(非必需)，建议所有的混入以index.js集中导出
  - models 所有业务模型配置(非必需)，一般用于服务端业务模型无法满足前端需求或提取部分数据所用, 解耦部分views中的业务逻辑
  - plugins 所有第三方插件配置，一般用于集成全局项目第三方框架，如：Element, Vant, M2等
  - router 所有业务路由配置，如果有需要可按业务模块(参照views)拆分路由配置，建议所有的路由以index.js集中导出
  - services 所有业务逻辑文件，建议以(.service.js)结尾，可按前端业务模块拆分(参照views), 一般用于与服务端的接口交互，解耦部分views中的业务逻辑
  - store 所有vuex配置，建议按照state/types/mutations/getters/actions来拆分，types按功能模块进行拆分，如有必要可加上modules，将功能模块进行单独分离
  - utils 所有的工具函数文件，一般用于添加通用处理函数，建议所有工具函数以index.js集中导出(有特定功能除外，如http等)
  - views 所有的业务模块文件，建议每个业务模块(视图)包含一个单独文件夹，内部主页面为index.vue，其他子组件以业务功能进行命名，业务模块样式放置在assets/css目录且以业务模块命名
  - app.vue 根组件文件，将根组件放在views根目录，根组件样式放置在assets/css目录且以app.less命名(或app.css/app.scss/app.styl)
  - main.js 项目入口文件，将入口放在src根目录，内部包含兼容性配置以及渲染函数(来自utils/render)
- 将所有的非业务静态文件集中放置在public目录，结构如下：
  - js 所有的非业务静态脚本，一般用于线上快速配置而不需要重新编译打包
  - index.html 前端静态文件入口，一般用于放在项目模板，引入非业务脚本等
  - favicon.ico 项目浏览器标识文件，一般用于index.html引用
- 将所有的编译打包文件集中放置在build目录(有时可能是dist等)，可在vue.config.js的outputDir中配置

**无以规矩，不成方圆**
