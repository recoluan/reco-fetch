# reco-fetch

Fetch for Browser [中文文档](./README_zh.md)

```bash
$ npm isntall reco-fetch
```

```javascript
import recoFetch from 'reco-fetch'

/**
 * @param url    (String) API URL
 * @param option (Object) Parameter object，incloud:
 *                        method(Request method, do not fill in the default 'get')
 *                        headers(Set request header, optional)
 *                        data(Request parameters, all request methods apply)
 *                        timeout(Request timeout, default 10 seconds)
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