"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var axios = {
  get: function get(endpoint) {
    return {
      endpoint: endpoint
    };
  },
  put: function put(endpoint) {
    return {
      endpoint: endpoint
    };
  },
  post: function post(endpoint) {
    return {
      endpoint: endpoint
    };
  },
  "delete": function _delete(endpoint) {
    return {
      endpoint: endpoint
    };
  }
};
var SportRadar = {
  data: Object.freeze({
    name: 'SportRadar',
    baseURL: 'https://nekitamo.com/',
    apiKey: '1389',
    endpoints: {
      'roster': 'person-stats-by-match',
      'lineup': 'bla-bla-truc-trt-mrt'
    }
  }),
  get: function get(endpoint) {
    axios.get("".concat(this.data.baseURL, "/").concat(endpoint));
  }
};
var _default = SportRadar;
exports["default"] = _default;