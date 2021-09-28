"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSportsModeInitialData = void 0;

var _Heimspiel = _interopRequireDefault(require("@luka.jez/npm-try/Vendors/Heimspiel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getSportsModeInitialData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var matchId,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            matchId = _args.length > 0 && _args[0] !== undefined ? _args[0] : '';

            _Heimspiel["default"].get({
              matchId: matchId
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getSportsModeInitialData() {
    return _ref.apply(this, arguments);
  };
}();

exports.getSportsModeInitialData = getSportsModeInitialData;