"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSportsModeInitialData = void 0;

var _Heimspiel = _interopRequireDefault(require("../../../Vendors/Heimspiel"));

var _endpoints = require("../../../Vendors/Heimspiel/endpoints");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var endpoint = _endpoints.MATCH;

var isGameEventLive = function isGameEventLive(param) {
  return param;
};

var getMatchResultsPerPeriod = function getMatchResultsPerPeriod(match, isGameLive, sportType) {
  return match && isGameLive && sportType;
};

var getVenueDetails = function getVenueDetails(venueId, venueName, venueCountry, roundName) {
  return venueId && venueName && venueCountry && roundName;
};

var getSportsModeInitialData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var matchId,
        _data$,
        _singleCompetition$se,
        _data$2,
        _singleCompetition$to,
        loading,
        response,
        _ref2,
        _ref2$data,
        data,
        isDataExists,
        _ref3,
        _ref4,
        singleCompetition,
        round,
        match,
        venue,
        venueId,
        venueName,
        venueCountry,
        roundName,
        sportType,
        competitionID,
        isGameLive,
        matchResultsPerPeriod,
        sportTopicId,
        venueDetails,
        _args = arguments;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            matchId = _args.length > 0 && _args[0] !== undefined ? _args[0] : '';
            _context.prev = 1;
            loading = false;
            _context.next = 5;
            return _Heimspiel["default"].get({
              endpoint: endpoint,
              params: {
                matchId: matchId
              }
            });

          case 5:
            response = _context.sent;
            _ref2 = response || {}, _ref2$data = _ref2.data, data = _ref2$data === void 0 ? {} : _ref2$data;
            isDataExists = data.length;

            if (isDataExists) {
              _context.next = 10;
              break;
            }

            throw new Error('Response data is empty, api default behavior for non existing match Ids, froce throw error');

          case 10:
            _ref3 = ((_data$ = data[0]) === null || _data$ === void 0 ? void 0 : _data$.competition) || [], _ref4 = _slicedToArray(_ref3, 1), singleCompetition = _ref4[0];
            round = singleCompetition === null || singleCompetition === void 0 ? void 0 : (_singleCompetition$se = singleCompetition.season[0]) === null || _singleCompetition$se === void 0 ? void 0 : _singleCompetition$se.round[0];
            match = round === null || round === void 0 ? void 0 : round.match[0];
            venue = match === null || match === void 0 ? void 0 : match.venue;
            venueId = venue === null || venue === void 0 ? void 0 : venue.id;
            venueName = venue === null || venue === void 0 ? void 0 : venue.name;
            venueCountry = venue === null || venue === void 0 ? void 0 : venue.country;
            roundName = round === null || round === void 0 ? void 0 : round.name;
            sportType = (_data$2 = data[0]) === null || _data$2 === void 0 ? void 0 : _data$2.name;
            competitionID = singleCompetition === null || singleCompetition === void 0 ? void 0 : singleCompetition.id;
            isGameLive = match.finished !== 'yes' && isGameEventLive(match);
            matchResultsPerPeriod = getMatchResultsPerPeriod(match, isGameLive, sportType);
            sportTopicId = singleCompetition === null || singleCompetition === void 0 ? void 0 : (_singleCompetition$to = singleCompetition.topic) === null || _singleCompetition$to === void 0 ? void 0 : _singleCompetition$to.id;
            venueDetails = getVenueDetails(venueId, venueName, venueCountry, roundName);
            return _context.abrupt("return", {
              match: match,
              loading: loading,
              roundName: roundName,
              sportType: sportType,
              isGameLive: isGameLive,
              venueDetails: venueDetails,
              sportTopicId: sportTopicId,
              competitionID: competitionID,
              matchResultsPerPeriod: matchResultsPerPeriod
            });

          case 27:
            _context.prev = 27;
            _context.t0 = _context["catch"](1);
            throw new Error(_context.t0);

          case 30:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 27]]);
  }));

  return function getSportsModeInitialData() {
    return _ref.apply(this, arguments);
  };
}();

exports.getSportsModeInitialData = getSportsModeInitialData;