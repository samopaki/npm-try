"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.specifyNumberOfSeconds = void 0;
var SECOND = 1000;
/**
 * @param {Integer} numberOfSeconds specified number of seconds
 * @returns {Integer} Converted number of seconds
 */

var specifyNumberOfSeconds = function specifyNumberOfSeconds(_ref) {
  var _ref$numberOfSeconds = _ref.numberOfSeconds,
      numberOfSeconds = _ref$numberOfSeconds === void 0 ? 0 : _ref$numberOfSeconds;
  return numberOfSeconds * SECOND;
};

exports.specifyNumberOfSeconds = specifyNumberOfSeconds;