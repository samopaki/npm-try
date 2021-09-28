"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Services = _interopRequireDefault(require("./Services"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import { getAllModels } from './Model'
// don't polute global object execute immedietly
var initializeMiddleware = function initializeMiddleware() {
  return {
    name: 'SportsModeMiddleware',
    services: _Services["default"]
  };
};

var middleware = initializeMiddleware();
var _default = middleware;
exports["default"] = _default;