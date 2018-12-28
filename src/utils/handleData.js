// 对请求结果进行处理：fetch请求成功后返回的是json对象
export function parseJSON (response) {
  return response.json()
}

// 处理get请求，传入参数对象拼接
export function formatUrl (obj) {
  const params = Object.values(obj).reduce((a, b, i) => `${a}${Object.keys(obj)[i]}=${b}&`, '?')
  return params.substring(0, params.length - 1)
}