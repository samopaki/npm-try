"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _InitialDataActions;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FORMULA_ONE = '';
var DEFAULT = 'DEFAULT';
var TENNIS = '';
var MOTOGP = '';
var GOLF = '';
var specialSportTypes = [FORMULA_ONE, MOTOGP, TENNIS, GOLF];
var InitialDataActions = (_InitialDataActions = {}, _defineProperty(_InitialDataActions, DEFAULT, 'setBasicSportData'), _defineProperty(_InitialDataActions, TENNIS, 'getAdditionalTennisData'), _defineProperty(_InitialDataActions, GOLF, 'getAdditionalDataForSpecialSportTypes'), _defineProperty(_InitialDataActions, MOTOGP, 'getAdditionalDataForSpecialSportTypes'), _defineProperty(_InitialDataActions, FORMULA_ONE, 'getAdditionalDataForSpecialSportTypes'), _InitialDataActions);

var InitialDataStrategy = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, sportType, params) {
    var isSpecialSportType, accessKey;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            isSpecialSportType = specialSportTypes.includes(sportType);
            accessKey = isSpecialSportType ? sportType : DEFAULT;
            return _context.abrupt("return", dispatch(InitialDataActions[accessKey], params));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function InitialDataStrategy(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _default = InitialDataStrategy;
exports["default"] = _default;