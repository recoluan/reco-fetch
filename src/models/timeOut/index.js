// import { parseJSON } from '../../utils/handleData.js'
import handleResult from '../handleResult/'
// function parseJSON (response) {
//   return response.json()
// }

/**
 * 增加超时处理：fetch本身是没有请求超时处理的，所以可以通过
 * @param fetchPromise (Promise) fetch请求
 * @param timeout      (Number)  请求超时的时间
 */
export default function addTimeout (fetchPromise, timeout) {
  // 如果timeout为null就返回请求本身
  if (timeout == null) {
    return handleResult(fetchPromise)
  }

  let timeoutFn = null

  // 请求超时的Promise
  const timeoutPromise = new Promise((resolve, reject) => {
    timeoutFn = function () {
      reject({
        code: 'timeOut',
        text: '请求超时！'
      })
    }
  })

  // 声明Promise.race
  const racePromise = Promise.race([
    fetchPromise,
    timeoutPromise
  ])

  setTimeout(function () {
    timeoutFn()
  }, Number(timeout))

  return handleResult(racePromise)
}