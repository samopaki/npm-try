"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _InitialDataHeimspiel = require("./InitialData.heimspiel.helpers");

var _InitialDataSportRadar = require("./InitialData.sportRadar.helpers");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var helpers = {
  'Heimspiel': function () {
    var _Heimspiel = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(matchId) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", (0, _InitialDataHeimspiel.getSportsModeInitialData)(matchId));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function Heimspiel(_x) {
      return _Heimspiel.apply(this, arguments);
    }

    return Heimspiel;
  }(),
  'SportRadar': function () {
    var _SportRadar = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(matchId) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", (0, _InitialDataSportRadar.getSportsModeInitialData)(matchId));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function SportRadar(_x2) {
      return _SportRadar.apply(this, arguments);
    }

    return SportRadar;
  }()
};
var _default = helpers;
exports["default"] = _default;