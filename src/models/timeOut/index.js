// import { parseJSON } from '../../utils/handleData.js'
function parseJSON (response) {
  return response.json()
}

/**
 * 增加超时处理：fetch本身是没有请求超时处理的，所以可以通过
 * @param fetchPromise (Promise) fetch请求
 * @param timeout      (Number)  请求超时的时间
 */
export default function addTimeout (fetchPromise, timeout) {
  // 如果timeout为null就返回请求本身
  // if (timeout == null) {
  //   return fetchPromise
  // }

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
  }, timeout)

  const racePromiseResult = new Promise((resolve, reject) => {
    let status = 0

    racePromise
      .then(response => {
        status = response.status
        return response
      })
      .then(parseJSON)
      .then(response => {
        // 将状态码添加到返回结果中，以备后用
        response.status = status

        // 如果返回码在300到900之间，将以错误返回，如果需要对错误统一处理，可以放在下面判断中
        if (/^[3-9]\d{2}$/.test(response.status)) {
          reject(response)
        }

        // 否则以正确值返回
        resolve(response)
      })
      .catch(error => {
        // 请求出错则报错 recoFetch Error: ***
        console.log('recoFetch Error:', error)
      })
  })

  // 将racePromise的结果返回
  return racePromiseResult
}