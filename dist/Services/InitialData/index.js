"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getSportsModeInitialDataService = void 0;

var _Helpers = _interopRequireDefault(require("./Helpers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getSportsModeInitialDataService = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var matchId, vendorName;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            matchId = _ref.matchId, vendorName = _ref.vendorName;
            return _context.abrupt("return", _Helpers["default"][vendorName](matchId));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getSportsModeInitialDataService(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getSportsModeInitialDataService = getSportsModeInitialDataService;
var _default = {
  getSportsModeInitialDataService: getSportsModeInitialDataService
};
exports["default"] = _default;