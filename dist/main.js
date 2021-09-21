"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Model = require("./Model");

// don't polute global object execute immedietly
var initializeMiddleware = function initializeMiddleware() {
  return {
    name: 'SportsModeMiddleware',
    modules: (0, _Model.getAllModels)()
  };
};

var middleware = initializeMiddleware();
var _default = middleware;
exports["default"] = _default;