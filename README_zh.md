# reco-fetch

适用于客户端的fetch封装

```bash
$ npm isntall reco-fetch
```

```javascript
import recoFetch from 'reco-fetch'

/**
 * @param url    (String) 接口URL
 * @param option (Object) 参数对象，包括:
 *                        method(请求方式，不填默认'get')
 *                        headers(设置请求头，选填)
 *                        data(请求参数，所有请求方式均适用)
 *                        timeout(请求超时，默认10秒)
 */

recoFetch(url, {
  method: 'post',
  headers: {},
  timeout: 1000,
  data: {
    id: 1,
    value: 2
  }
}). then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
```