"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("whatwg-fetch");

var _handleParams2 = _interopRequireDefault(require("./models/handleParams"));

var _timeOut = _interopRequireDefault(require("./models/timeOut"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 处理promise和fetch的兼容性以及引入
require('es6-promise').polyfill();

/**
 * @param url    (String) 接口URL
 * @param option (Object) 参数对象，包括method(请求方式，不填默认'get')，headers(设置请求头，选填)，data(请求参数，所有请求方式均适用)
 */
window.recoFetch = function (url) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  // 设置请求超时的时间，默认10秒
  var timeout = option.timeout || null;

  var _handleParams = (0, _handleParams2.default)(url, option),
      recoUrl = _handleParams.recoUrl,
      recoOptions = _handleParams.recoOptions;

  return (0, _timeOut.default)(fetch(recoUrl, recoOptions), timeout);
};

var _default = window.recoFetch;
exports.default = _default;