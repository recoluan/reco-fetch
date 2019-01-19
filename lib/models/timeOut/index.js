"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addTimeout;

var _handleResult = _interopRequireDefault(require("../handleResult/"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { parseJSON } from '../../utils/handleData.js'
// function parseJSON (response) {
//   return response.json()
// }

/**
 * 增加超时处理：fetch本身是没有请求超时处理的，所以可以通过
 * @param fetchPromise (Promise) fetch请求
 * @param timeout      (Number)  请求超时的时间
 */
function addTimeout(fetchPromise, timeout) {
  // 如果timeout为null就返回请求本身
  if (timeout == null) {
    return (0, _handleResult.default)(fetchPromise);
  }

  var timeoutFn = null; // 请求超时的Promise

  var timeoutPromise = new Promise(function (resolve, reject) {
    timeoutFn = function timeoutFn() {
      reject({
        code: 'timeOut',
        text: '请求超时！'
      });
    };
  }); // 声明Promise.race

  var racePromise = Promise.race([fetchPromise, timeoutPromise]);
  setTimeout(function () {
    timeoutFn();
  }, Number(timeout));
  return (0, _handleResult.default)(racePromise);
}