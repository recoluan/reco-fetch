"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseJSON = parseJSON;
exports.formatUrl = formatUrl;

// 对请求结果进行处理：fetch请求成功后返回的是json对象
function parseJSON(response) {
  return response.json();
} // 处理get请求，传入参数对象拼接


function formatUrl(obj) {
  var params = Object.values(obj).reduce(function (a, b, i) {
    return "".concat(a).concat(Object.keys(obj)[i], "=").concat(b, "&");
  }, '?');
  return params.substring(0, params.length - 1);
}