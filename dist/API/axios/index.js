"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MiddlewareAxiosInstance = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _time = require("../../utils/time");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MiddlewareAxiosInstance = _axios["default"].create();

exports.MiddlewareAxiosInstance = MiddlewareAxiosInstance;
MiddlewareAxiosInstance.defaults.timeout = (0, _time.specifyNumberOfSeconds)({
  numberOfSeconds: 10
});
var _default = MiddlewareAxiosInstance;
exports["default"] = _default;