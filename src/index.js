// 处理promise和fetch的兼容性以及引入
require('es6-promise').polyfill()
import 'whatwg-fetch'
import handleParams from './models/handleParams'
import addTimeout from './models/timeOut'

/**
 * @param url    (String) 接口URL
 * @param option (Object) 参数对象，包括method(请求方式，不填默认'get')，headers(设置请求头，选填)，data(请求参数，所有请求方式均适用)
 */
window.recoFetch = (url, option = {}) => {
  // 设置请求超时的时间，默认10秒
  const timeout = option.timeout || null
  const { recoUrl, recoOptions } = handleParams(url, option)

  return addTimeout(fetch(recoUrl, recoOptions), timeout)
}

export default window.recoFetch