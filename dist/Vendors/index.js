"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Heimspiel = _interopRequireDefault(require("./Heimspiel"));

var _SportRadar = _interopRequireDefault(require("./SportRadar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  Heimspiel: _Heimspiel["default"],
  SportRadar: _SportRadar["default"]
};
exports["default"] = _default;