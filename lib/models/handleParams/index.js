"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _handleData = require("../../utils/handleData.js");

function _default(url, options) {
  if (options.headers) {
    options.headers = options.headers;
  }

  options.method = (options.method || 'get').toLocaleLowerCase();
  options.type = (options.type || '').toLocaleLowerCase();

  if (options.params) {
    url = url + (0, _handleData.formatUrl)(options.params);
  }

  if (options.body && options.type == 'json') {
    // 非get类请求传参时，需要将参数挂在body上
    options.body = JSON.stringify(options.body); // 根据后台要求，如果有时候是java请求会用qs转
    // options.body = qs.stringify(options.body)
  }

  if (options.body && options.type == 'formdata') {
    var datas = options.body;
    var formData = new FormData();

    for (var key in datas) {
      formData.append(key, datas[key]);
    }

    options.body = formData;
  } // 对非get类请求头和请求体做处理


  if (options.type == 'json' && (options.method === 'post' || options.method === 'put')) {
    options.headers['Content-Type'] = options.headers['Content-Type'] || 'application/json';
  }

  return {
    recoUrl: url,
    recoOptions: options
  };
}