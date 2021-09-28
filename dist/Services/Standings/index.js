"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Services = require("@luka.jez/npm-try/Model/Standings/Services");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// #region HELPERS
// #endregion
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
    getStandingData: function () {
      var _getStandingData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref, _ref2) {
        var commit, rootState, vendorName, _rootState$sportsMode, competitionId, roundName, serviceOutput;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit, rootState = _ref.rootState;
                vendorName = _ref2.vendorName;
                _rootState$sportsMode = rootState.sportsMode.InitialData, competitionId = _rootState$sportsMode.competitionId, roundName = _rootState$sportsMode.roundName;
                _context.next = 5;
                return (0, _Services.getStandingDataService)({
                  vendorName: vendorName,
                  params: {
                    competitionId: competitionId,
                    roundName: roundName
                  }
                });

              case 5:
                serviceOutput = _context.sent;
                commit('SET_STANDING', serviceOutput.standing);
                commit('SET_LOADING', serviceOutput.loading);
                return _context.abrupt("return", Promise.resolve(serviceOutput));

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getStandingData(_x, _x2) {
        return _getStandingData.apply(this, arguments);
      }

      return getStandingData;
    }()
  },
  mutations: {
    SET_STANDING: function SET_STANDING(state, standing) {
      state.standing = Object.freeze(standing);
    },
    SET_LOADING: function SET_LOADING(state, loading) {
      state.loading = loading;
    }
  }
};
exports["default"] = _default;