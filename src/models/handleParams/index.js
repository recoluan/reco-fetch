import { formatUrl } from '../../utils/handleData.js'

export default function (url, option) {
  option.headers = option.headers
  option.method = (option.method || 'get').toLocaleLowerCase()

  // 格式化get请求的数据(fetch的get请求需要需要将参数拼接到url后面)
  if (option.method === 'get' || option.method === 'delete') {
    if (option.data) {
      url = url + formatUrl(option.data)
    }
  }

  // 对非get类请求头和请求体做处理
  if (option.method === 'post' || option.method === 'put') {
    option.headers['Content-Type'] = option.headers['Content-Type'] || 'application/json'

    // 非get类请求传参时，需要将参数挂在body上
    option.body = JSON.stringify(option.data)

    // 根据后台要求，如果有时候是java请求会用qs转
    // option.body = qs.stringify(option.data)
  }
  delete option.data
  return { recoUrl: url, recoOptions: option }
}