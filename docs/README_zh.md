# reco-fetch

适用于客户端的fetch封装，使用了ES6语法，或许你需要babel进行转译。

## 安装

```bash
$ npm isntall reco-fetch
```

## 配置

除了下面给出的参数，其他参数请结合  [**MDN**](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Supplying_request_options)

```javascript
import recoFetch from 'reco-fetch'

/**
 * @param {String, must} url         接口URL
 * @param {Object, must} options     参数对象，包括:
 *        method  {String, optional} 请求方式，默认'get'
 *        headers {Object, optional} 设置请求头
 *        params  {Object, optional} URL参数对象
 *        body    {Object, optional} 请求体参数对象
 *        timeout {Number, optional} 请求超时
 *        type    {String, optional} 'post'请求时，可以设置：'json'、'formData'
 */

const options = {
  method: 'post',
  headers: {},
  timeout: 1000,
  body: {
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

## 案例

**GET**

```javascript
const options = {
  method: 'get',
  params: {
    key: 1,
    value: 2
  }
}

recoFetch(url, options). then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
```

**POST JSON**

```javascript
const options = {
  method: 'post',
  body: {
    key: 1,
    value: 2
  },
  type: 'json'
}

recoFetch(url, options). then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
```

**POST formData**

```javascript
const options = {
  method: 'post',
  body: {
    key: 1,
    value: 2
  },
  type: 'formData'
}

// 或

const form = document.querySelector('form')
const options = {
  method: 'post',
  body: form
}

recoFetch(url, options). then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
```

**PUT**

```javascript
const options = {
  method: 'put',
  body: {
    key: 1,
    value: 2
  },
  type: 'json'
}

// 或

const options = {
  method: 'put',
  body: JSON.stringify({
    key: 1,
    value: 2
  })
}

recoFetch(url, options). then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
```

**DELETE**

```javascript
const options = {
  method: 'delete',
  params: {
    key: 1,
    value: 2
  }
}

recoFetch(url, options). then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
```

**uploadFile**

```javascript
const fileField = document.querySelector("input[type='file']")

const options = {
  method: 'post',
  body: {
    file: fileField.files[0]
  },
  type: 'formData'
}

// 或

const formData = new FormData()
const fileField = document.querySelector("input[type='file']")

formData.append('file', fileField.files[0])

const options = {
  method: 'post',
  body: formData
}

recoFetch(url, options). then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
```