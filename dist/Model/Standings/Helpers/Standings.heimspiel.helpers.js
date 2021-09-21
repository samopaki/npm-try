"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._makeFinalCellText = exports._prepareTeamImage = exports._prepareCompetitionImage = exports._prepareStanding = exports._normalizeStandingsForRender = exports.getStandingData = exports.HUNDRED_NUMBER_CONSTANT = exports.COMPETITON_IMAGE_EXTENSION = exports.COMPETITON_IMAGE_URL = exports.LOGO_EXTENSION = exports.SMALL_LOGO_URL = exports.conferenceLabelKeys = void 0;

var _Heimspiel = _interopRequireDefault(require("../../../Vendors/Heimspiel"));

var _endpoints = require("../../../Vendors/Heimspiel/endpoints");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var conferenceLabelKeys = {
  'Eastern Conference': 'standings_nba_east_header',
  'Western Conference': 'standings_nba_west_header',
  'AFC North': 'standings_nfl_afc_north_header',
  'AFC South': 'standings_nfl_afc_south_header',
  'AFC West': 'standings_nfl_afc_west_header',
  'AFC East': 'standings_nfl_afc_east_header',
  'NFC North': 'standings_nfl_nfc_north_header',
  'NFC South': 'standings_nfl_nfc_south_header',
  'NFC West': 'standings_nfl_nfc_west_header',
  'NFC East': 'standings_nfl_nfc_east_header',
  'Bobrov Division': 'standings_khl_bobrov_header',
  'Tarasov Division': 'standings_khl_tarasov_header',
  'Kharlamov Division': 'standings_khl_kharlamov_header',
  'Chernyshev Division': 'standings_khl_chernyshev_header',
  'East Division': 'standings_nhl_east_header',
  'West Division': 'standings_nhl_west_header',
  'North Division': 'standings_nhl_north_header',
  'Atlantic Division': 'standings_nba_atlantic_header',
  'Central Division': 'standings_central_header',
  'Southeast Division': 'standings_nba_southeast_header',
  'Northwest Division': 'standings_nba_northwest_header',
  'Pacific Division': 'standings_nba_pacific_header',
  'Southwest Division': 'standings_nba_southwest_header'
};
exports.conferenceLabelKeys = conferenceLabelKeys;

var loc = function loc(message) {
  return message;
};

var isEmpty = function isEmpty(data) {
  return true;
};

var SMALL_LOGO_URL = 'https://s.hs-data.com/gfx/emblem/common/60x60/';
exports.SMALL_LOGO_URL = SMALL_LOGO_URL;
var LOGO_EXTENSION = '.png';
exports.LOGO_EXTENSION = LOGO_EXTENSION;
var COMPETITON_IMAGE_URL = 'https://s.hs-data.com/gfx/competition/png/normal/50x50/';
exports.COMPETITON_IMAGE_URL = COMPETITON_IMAGE_URL;
var COMPETITON_IMAGE_EXTENSION = '.png';
exports.COMPETITON_IMAGE_EXTENSION = COMPETITON_IMAGE_EXTENSION;
var HUNDRED_NUMBER_CONSTANT = 100;
exports.HUNDRED_NUMBER_CONSTANT = HUNDRED_NUMBER_CONSTANT;
var OUTPUT_WHEN_DATA_MISSING = '-';
var endpoint = _endpoints.STANDINGS;

var _isValidStandings = function _isValidStandings(_ref) {
  var data = _ref.data,
      name = _ref.name;

  var _ref2 = data || {},
      round = _ref2.round,
      _ref2$round = _ref2.round;

  _ref2$round = _ref2$round === void 0 ? [] : _ref2$round;

  var _ref2$round2 = _slicedToArray(_ref2$round, 1),
      firstRoundElement = _ref2$round2[0];

  var _ref3 = firstRoundElement || {},
      group = _ref3.group,
      standing = _ref3.standing;

  var isDataValid = !isEmpty(data) && name;
  var isRoundValid = round.length;
  var hasStandingOrGroup = group && !isEmpty(group) || standing && !isEmpty(standing);
  return isDataValid && isRoundValid && hasStandingOrGroup;
};

var getStandingData = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref4) {
    var competitionId, roundName, response, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            competitionId = _ref4.competitionId, roundName = _ref4.roundName;
            _context.prev = 1;
            _context.next = 4;
            return _Heimspiel["default"].get({
              endpoint: endpoint,
              params: {
                competitionId: competitionId
              }
            });

          case 4:
            response = _context.sent;
            data = response.data[0].competition[0].season[0];
            console.log(response);
            return _context.abrupt("return", doSomethingMotherfucker({
              data: data,
              competitionId: competitionId,
              roundName: roundName
            }));

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](1);
            throw new Error(_context.t0);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 10]]);
  }));

  return function getStandingData(_x) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getStandingData = getStandingData;

var doSomethingMotherfucker = function doSomethingMotherfucker(_ref6) {
  var data = _ref6.data,
      coId = _ref6.competitionId,
      name = _ref6.roundName;
  var standings = [];

  if (!_isValidStandings({
    data: data,
    name: name
  })) {
    throw new Error('Thare is a data problem when creating standing table data!');
  }

  var _data$round$ = data.round[0],
      group = _data$round$.group,
      standing = _data$round$.standing;

  if (group) {
    for (var index = 0, length = group.length; index < length; index++) {
      if (!group[index].standing) {
        throw new Error('There is no standing for the group!');
      }

      standings.push({
        module: {
          name: 'sm_menu_standings',
          icon: 'table'
        },
        teamInfo: {
          teamImage: _prepareCompetitionImage(coId),
          teamName: loc(conferenceLabelKeys[group[index].name])
        },
        tableData: _normalizeStandingsForRender({
          standing: group[index].standing
        })
      });
    }
  } else if (standing) {
    var rawStandingLeague = data.round.find(function (round) {
      return round.name === name;
    });
    standings.push({
      module: {
        name: 'sm_menu_standings',
        icon: 'table'
      },
      teamInfo: {
        teamImage: _prepareCompetitionImage(coId)
      },
      tableData: _normalizeStandingsForRender({
        standing: rawStandingLeague.standing
      })
    });
  } else {
    throw new Error('getStandingData cannot make standing table data because data source is not in expected format!');
  }

  return standings;
};

var _normalizeStandingsForRender = function _normalizeStandingsForRender(_ref7) {
  var standing = _ref7.standing;
  var standings = [];

  for (var index = 0, length = standing.length; index < length; index++) {
    var teamStats = standing[index];
    var teamId = teamStats.team.id;
    var teamName = teamStats.team.name;

    var teamStanding = _prepareStanding(teamId, teamName, teamStats);

    standings.push(teamStanding);
  }

  return standings;
};

exports._normalizeStandingsForRender = _normalizeStandingsForRender;

var _prepareStanding = function _prepareStanding(teamId, teamName, teamStats) {
  return {
    teamImage: _prepareTeamImage(teamId),
    teamName: _makeFinalCellText(teamName),
    rank: _makeFinalCellText(teamStats.rank),
    matches: _makeFinalCellText(teamStats.matches),
    win: _makeFinalCellText(teamStats.win),
    draw: _makeFinalCellText(teamStats.draw),
    lost: _makeFinalCellText(teamStats.lost),
    score: _makeFinalCellText(teamStats.score && teamStats.score_against, "".concat(teamStats.score, " : ").concat(teamStats.score_against)),
    difference: _makeFinalCellText(teamStats.difference),
    pts: _makeFinalCellText(teamStats.points),
    percentage: _makeFinalCellText(teamStats.percentage, "".concat((Number(teamStats.percentage) * HUNDRED_NUMBER_CONSTANT).toFixed(1))),
    ratio: _makeFinalCellText(teamStats.points && teamStats.minuspoints, "".concat(teamStats.points, " : ").concat(teamStats.minuspoints)),
    lost_on_penalty: _makeFinalCellText(teamStats.lost_on_penalty),
    lost_on_extra_time: _makeFinalCellText(teamStats.lost_on_extra_time),
    win_on_penalty: _makeFinalCellText(teamStats.win_on_penalty),
    win_on_extra_time: _makeFinalCellText(teamStats.win_on_extra_time),
    // lost_in_regular_time and win_in_regular_time is number calculated from total wins/losses substraced with wins/losses on_penalty and win/lost on-extra_time
    lost_in_regular_time: _makeFinalCellText(teamStats.lost && teamStats.lost_on_penalty && teamStats.lost_on_extra_time, "".concat(teamStats.lost - teamStats.lost_on_penalty - teamStats.lost_on_extra_time)),
    win_in_regular_time: _makeFinalCellText(teamStats.lost && teamStats.lost_on_penalty && teamStats.lost_on_extra_time, "".concat(teamStats.win - teamStats.win_on_penalty - teamStats.win_on_extra_time))
  };
};

exports._prepareStanding = _prepareStanding;

var _prepareCompetitionImage = function _prepareCompetitionImage(id) {
  if (typeof id === 'string' && id) {
    return "".concat(COMPETITON_IMAGE_URL).concat(id).concat(COMPETITON_IMAGE_EXTENSION);
  } else {
    return false;
  }
};

exports._prepareCompetitionImage = _prepareCompetitionImage;

var _prepareTeamImage = function _prepareTeamImage(id) {
  if (typeof id === 'string' && id) {
    return "".concat(SMALL_LOGO_URL).concat(id).concat(LOGO_EXTENSION);
  } else {
    return false;
  }
};

exports._prepareTeamImage = _prepareTeamImage;

var _makeFinalCellText = function _makeFinalCellText(basicValue, aditionalValue) {
  var label;

  if (typeof basicValue === 'string' && basicValue && !aditionalValue) {
    label = basicValue;
  } else if (_typeof(basicValue) !== 'object' && basicValue && aditionalValue) {
    label = aditionalValue;
  } else {
    label = OUTPUT_WHEN_DATA_MISSING;
  }

  return label;
};

exports._makeFinalCellText = _makeFinalCellText;