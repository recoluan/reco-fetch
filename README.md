# reco-fetch

Fetch for Browser [中文文档](./docs/README_zh.md)

```bash
$ npm isntall reco-fetch
```

```javascript
import recoFetch from 'reco-fetch'

/**
 * @param url    (String) API URL
 * @param options (Object) Parameter objects, including:
 *                        method  (Request method, default 'get')
 *                        headers (Set request header, optional)
 *                        data    (url parameters or request body, all request methods apply)
 *                        timeout (Request timeout, default 10 seconds)
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
