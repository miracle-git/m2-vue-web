import { DataHttp } from 'm2-core'
// import { env } from './index'

export default DataHttp.getInstance({
  // 是否开启多实例
  // multi: true,

  // 开启应用上下文
  ctx: true,

  // 开启多环境配置
  // env,

  // 当前请求实例(可使用DataHttp构建，也可配置详细参数，参考axios配置)
  axios: DataHttp.create({
    // baseURL: conf('api'),
    headers: {
      // 根据项目实际情况进行更改
      // 'swagger': 'm2-data-http'
    }
  }),

  // 数据响应映射(当返回数据不满足{status,result,message}格式时，对返回数据字段映射)
  // 当status字段是boolean时，不必配置value；反之需要同时配置status和value来做成功标识；当不存在status和value都不存在，可配置success(res)函数自定义成功标识
  map: { status: 'code', result: 'data', message: 'msg' }

  // 当前加载器函数(覆盖默认加载器，loading当前请求是否启动加载器)
  // spinner(loading) {},

  // 数据校验函数(对返回数据的权限校验，app为应用上下文，返回boolean)
  // check(res, app) {}

  // 数据处理函数(对返回数据的处理函数，app为应用上下文, 返回处理结果)
  // handle(res, app) {}

  // 全局错误处理函数(err是包含title，message的对象，app为应用上下文)
  // error(err, app) {}
})
