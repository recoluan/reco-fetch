# reco-fetch

适用于客户端的fetch封装

```bash
$ npm isntall reco-fetch
```

```javascript
import recoFetch from 'reco-fetch'

/**
 * @param url    (String) 接口URL
 * @param options (Object) 参数对象，包括:
 *                        method  (请求方式，默认'get')
 *                        headers (设置请求头，选填)
 *                        data    (url参数或者请求体，所有请求方式均适用)
 *                        timeout (请求超时，默认10秒)
 */

const options = {
  method: 'post',
  headers: {},
  timeout: 1000,
  data: {
    id: 1,
    value: 2
  }
}

recoFetch(url, options). then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
```