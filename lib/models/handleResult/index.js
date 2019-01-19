"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _handleData = require("../../utils/handleData.js");

function _default(fetchPromist) {
  return new Promise(function (resolve, reject) {
    var status = 0;
    fetchPromist.then(function (response) {
      status = response.status;
      return response;
    }).then(_handleData.parseJSON).then(function (response) {
      // 将状态码添加到返回结果中，以备后用
      response.status = status; // 如果返回码在300到900之间，将以错误返回，如果需要对错误统一处理，可以放在下面判断中

      if (/^[3-9]\d{2}$/.test(response.status)) {
        reject(response);
      } // 否则以正确值返回


      resolve(response);
    }).catch(function (error) {
      // 请求出错则报错 recoFetch Error: ***
      console.log('recoFetch Error:', error);
      reject({
        status: 'error',
        text: 'fetch error, maybe you can do something in catch'
      });
    });
  });
}