"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllModels = void 0;

var _InitialData = _interopRequireDefault(require("./InitialData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAllModels = function getAllModels() {
  return {
    InitialData: _InitialData["default"]
  };
};

exports.getAllModels = getAllModels;