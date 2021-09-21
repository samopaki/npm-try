"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.IMAGE = exports.STANDINGS = exports.PERSON_PROFILE = exports.SPORT_TOPIC_LIST = exports.ROSTER = exports.BOXSCORE = exports.STATISTICS = exports.ADDITIONAL_DATA = exports.RANKING_BY_TOPIC = exports.HEAD_TO_HEAD = exports.MATCH = exports.BASE_ROUTE = void 0;

var _HEAD_TO_HEAD$RANKING;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BASE_ROUTE = 'https://united-group.json.c.ergebnis-dienst.de/en/EN/';
exports.BASE_ROUTE = BASE_ROUTE;
var MATCH = 'match';
exports.MATCH = MATCH;
var HEAD_TO_HEAD = 'head-to-head';
exports.HEAD_TO_HEAD = HEAD_TO_HEAD;
var RANKING_BY_TOPIC = 'ranking-by-topic';
exports.RANKING_BY_TOPIC = RANKING_BY_TOPIC;
var ADDITIONAL_DATA = 'additional-data';
exports.ADDITIONAL_DATA = ADDITIONAL_DATA;
var STATISTICS = 'statistics';
exports.STATISTICS = STATISTICS;
var BOXSCORE = 'boxscore';
exports.BOXSCORE = BOXSCORE;
var ROSTER = 'roster';
exports.ROSTER = ROSTER;
var SPORT_TOPIC_LIST = 'sport-topic-list';
exports.SPORT_TOPIC_LIST = SPORT_TOPIC_LIST;
var PERSON_PROFILE = 'person-profile';
exports.PERSON_PROFILE = PERSON_PROFILE;
var STANDINGS = 'standings';
exports.STANDINGS = STANDINGS;
var IMAGE = 'image';
exports.IMAGE = IMAGE;

var _default = (_HEAD_TO_HEAD$RANKING = {}, _defineProperty(_HEAD_TO_HEAD$RANKING, HEAD_TO_HEAD, function (_ref) {
  var opponentOneId = _ref.opponentOneId,
      opponentTwoId = _ref.opponentTwoId;
  return "".concat(BASE_ROUTE, "matches-by-opponents/op").concat(opponentOneId, "-").concat(opponentTwoId);
}), _defineProperty(_HEAD_TO_HEAD$RANKING, RANKING_BY_TOPIC, function (_ref2) {
  var _ref2$topicId = _ref2.topicId,
      topicId = _ref2$topicId === void 0 ? '' : _ref2$topicId;
  return "".concat(BASE_ROUTE, "ranking-by-topic/to").concat(topicId);
}), _defineProperty(_HEAD_TO_HEAD$RANKING, ADDITIONAL_DATA, function (_ref3) {
  var _ref3$matchId = _ref3.matchId,
      matchId = _ref3$matchId === void 0 ? '' : _ref3$matchId;
  return "".concat(BASE_ROUTE, "match-resultlist/ma").concat(matchId);
}), _defineProperty(_HEAD_TO_HEAD$RANKING, STATISTICS, function (_ref4) {
  var _ref4$matchId = _ref4.matchId,
      matchId = _ref4$matchId === void 0 ? '' : _ref4$matchId;
  return "".concat(BASE_ROUTE, "team-stats-by-match/ma").concat(matchId);
}), _defineProperty(_HEAD_TO_HEAD$RANKING, BOXSCORE, function (_ref5) {
  var _ref5$matchId = _ref5.matchId,
      matchId = _ref5$matchId === void 0 ? '' : _ref5$matchId;
  return "".concat(BASE_ROUTE, "person-stats-by-match/ma").concat(matchId);
}), _defineProperty(_HEAD_TO_HEAD$RANKING, ROSTER, function (_ref6) {
  var _ref6$matchId = _ref6.matchId,
      matchId = _ref6$matchId === void 0 ? '' : _ref6$matchId;
  return "".concat(BASE_ROUTE, "person-stats-by-match/ma").concat(matchId);
}), _defineProperty(_HEAD_TO_HEAD$RANKING, SPORT_TOPIC_LIST, function (_ref7) {
  var _ref7$topicId = _ref7.topicId,
      topicId = _ref7$topicId === void 0 ? '' : _ref7$topicId;
  return "".concat(BASE_ROUTE, "topic-list/to").concat(topicId);
}), _defineProperty(_HEAD_TO_HEAD$RANKING, PERSON_PROFILE, function (_ref8) {
  var _ref8$personId = _ref8.personId,
      personId = _ref8$personId === void 0 ? '' : _ref8$personId;
  return "".concat(BASE_ROUTE, "person/pe").concat(personId);
}), _defineProperty(_HEAD_TO_HEAD$RANKING, STANDINGS, function (_ref9) {
  var _ref9$coId = _ref9.coId,
      coId = _ref9$coId === void 0 ? '' : _ref9$coId;
  return "".concat(BASE_ROUTE, "standing/co").concat(coId);
}), _defineProperty(_HEAD_TO_HEAD$RANKING, MATCH, function (_ref10) {
  var _ref10$matchId = _ref10.matchId,
      matchId = _ref10$matchId === void 0 ? '' : _ref10$matchId;
  return "".concat(BASE_ROUTE, "match/ma").concat(matchId);
}), _defineProperty(_HEAD_TO_HEAD$RANKING, IMAGE, function (_ref11) {
  var _ref11$imageURL = _ref11.imageURL,
      imageURL = _ref11$imageURL === void 0 ? '' : _ref11$imageURL;
  return imageURL;
}), _HEAD_TO_HEAD$RANKING);

exports["default"] = _default;