"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports._makeUrl = exports.LOGO_EXTENSION = exports.LOGO_URL = exports.PERSON_IMAGE_EXTENSION = exports.PERSON_IMAGE_URL = exports.makeBasicMatchInfo = void 0;

var _Services = require("./Services");

var _Strategies = _interopRequireDefault(require("./Strategies"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// #region HELPERS
var _hasIssueInMatchResultsValidation = function _hasIssueInMatchResultsValidation(matchResultArray) {
  var first = matchResultArray[1] && matchResultArray[1].match_result;
  var second = matchResultArray[1] && matchResultArray[1].match_result;
  return !(matchResultArray.length && first && second);
};

var _isValidMatchInfo = function _isValidMatchInfo() {
  return true;
};

var DEFAULT_RESULTS_SCORE = '0';

var makeBasicMatchInfo = function makeBasicMatchInfo(data) {
  var homeScore;
  var awayScore;

  var validationErrorsArray = _isValidMatchInfo();

  if (validationErrorsArray.length) {
    if (_hasIssueInMatchResultsValidation(data)) {
      // mock results - 0:0
      homeScore = DEFAULT_RESULTS_SCORE;
      awayScore = DEFAULT_RESULTS_SCORE;
    } else {
      throw new Error();
    }
  }

  var preparedData = {
    home: {
      score: homeScore || (data === null || data === void 0 ? void 0 : data.match_result[0].match_result),
      name: data.home.shortname,
      shortname: data.home.microname,
      logo: _makeUrl(data.home.id, data.home.personOneId),
      id: data.home.id
    },
    away: {
      score: awayScore || (data === null || data === void 0 ? void 0 : data.match_result[1].match_result),
      name: data.away.shortname,
      shortname: data.away.microname,
      logo: _makeUrl(data.away.id, data.away.personOneId),
      id: data.away.id
    }
  };

  if (data.home.personTwoId && data.away.personTwoId) {
    preparedData.home.additionalLogo = _makeUrl(data.home.id, data.home.personTwoId);
    preparedData.away.additionalLogo = _makeUrl(data.away.id, data.away.personTwoId);
  }

  return preparedData;
};

exports.makeBasicMatchInfo = makeBasicMatchInfo;
var PERSON_IMAGE_URL = 'https://s.hs-data.com/gfx/person/l/';
exports.PERSON_IMAGE_URL = PERSON_IMAGE_URL;
var PERSON_IMAGE_EXTENSION = '.jpg';
exports.PERSON_IMAGE_EXTENSION = PERSON_IMAGE_EXTENSION;
var LOGO_URL = 'https://s.hs-data.com/gfx/emblem/common/100x100/';
exports.LOGO_URL = LOGO_URL;
var LOGO_EXTENSION = '.png';
exports.LOGO_EXTENSION = LOGO_EXTENSION;

var _makeUrl = function _makeUrl(teamId, personId) {
  if (personId) {
    return "".concat(PERSON_IMAGE_URL).concat(personId).concat(PERSON_IMAGE_EXTENSION);
  } else if (teamId) {
    return "".concat(LOGO_URL).concat(teamId).concat(LOGO_EXTENSION);
  } else {
    return '';
  }
}; // #endregion


exports._makeUrl = _makeUrl;
var _default = {
  namespaced: true,
  state: {
    loading: true,
    initialData: [],
    roundName: '',
    venueDetails: {},
    competitionId: '',
    sportType: '',
    isGameLive: false,
    sportTopicId: '',
    matchResultsPerPeriod: []
  },
  actions: {
    getSportsModeInitialData: function () {
      var _getSportsModeInitialData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref, _ref2) {
        var commit, dispatch, matchId, vendorName, response, serviceOutput;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit, dispatch = _ref.dispatch;
                matchId = _ref2.matchId, vendorName = _ref2.vendorName;
                response = {};
                _context.prev = 3;
                _context.next = 6;
                return (0, _Services.getSportsModeInitialDataService)({
                  vendorName: vendorName,
                  matchId: matchId
                });

              case 6:
                serviceOutput = _context.sent;
                commit('SET_LOADING', serviceOutput.loading);
                commit('SET_INITIAL_DATA', serviceOutput.match);
                commit('SET_ROUND_NAME', serviceOutput.roundName);
                commit('SET_VENUE_DETAILS', serviceOutput.venueDetails);
                commit('SET_COMPETITION_ID', serviceOutput.competitionID);
                commit('SET_SPORT_TYPE', serviceOutput.sportType);
                commit('SET_IS_GAME_LIVE', serviceOutput.isGameLive);
                commit('SET_SPORT_TOPIC_ID', serviceOutput.sportTopicId);
                commit('SET_MATCH_RESULTS_PER_PERIOD', serviceOutput.matchResultsPerPeriod);
                _context.next = 18;
                return _Strategies["default"].InitialDataStrategy(dispatch, serviceOutput.sportType, {
                  matchId: matchId,
                  match: serviceOutput.match
                });

              case 18:
                response = _context.sent;
                _context.next = 24;
                break;

              case 21:
                _context.prev = 21;
                _context.t0 = _context["catch"](3);
                throw new Error(_context.t0);

              case 24:
                return _context.abrupt("return", response);

              case 25:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 21]]);
      }));

      function getSportsModeInitialData(_x, _x2) {
        return _getSportsModeInitialData.apply(this, arguments);
      }

      return getSportsModeInitialData;
    }(),
    setBasicSportData: function setBasicSportData(_ref3, _ref4) {
      var commit = _ref3.commit,
          state = _ref3.state;
      var match = _ref4.match;
      var type = 'rawDataLoading';
      var matchShortDetails = makeBasicMatchInfo(match);
      commit('SET_HEADER_DATA', matchShortDetails);
      commit('SET_LOADING_STATUS', {
        loading: false,
        type: type
      });
      return state.sportType;
    }
  },
  mutations: {
    SET_HEADER_DATA: function SET_HEADER_DATA(state, headerData) {
      state.headerData = headerData;
    },
    SET_LOADING_STATUS: function SET_LOADING_STATUS(state, loading) {
      state.loading = loading;
    },
    SET_LOADING: function SET_LOADING(state, loading) {
      state.loading = loading;
    },
    SET_INITIAL_DATA: function SET_INITIAL_DATA(state, initialData) {
      state.initialData = initialData;
    },
    SET_ROUND_NAME: function SET_ROUND_NAME(state, roundName) {
      state.roundName = roundName;
    },
    SET_VENUE_DETAILS: function SET_VENUE_DETAILS(state, venueDetails) {
      state.venueDetails = venueDetails;
    },
    SET_COMPETITION_ID: function SET_COMPETITION_ID(state, competitionId) {
      state.competitionId = competitionId;
    },
    SET_SPORT_TYPE: function SET_SPORT_TYPE(state, sportType) {
      state.sportType = sportType;
    },
    SET_IS_GAME_LIVE: function SET_IS_GAME_LIVE(state, isGameLive) {
      state.isGameLive = isGameLive;
    },
    SET_SPORT_TOPIC_ID: function SET_SPORT_TOPIC_ID(state, sportTopicId) {
      state.sportTopicId = sportTopicId;
    },
    SET_MATCH_RESULTS_PER_PERIOD: function SET_MATCH_RESULTS_PER_PERIOD(state, matchResultsPerPeriod) {
      state.matchResultsPerPeriod = matchResultsPerPeriod;
    }
  }
};
exports["default"] = _default;