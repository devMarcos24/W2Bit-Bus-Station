"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "UserRoutes", {
  enumerable: true,
  get: function get() {
    return _routes["default"];
  }
});
Object.defineProperty(exports, "BusRoutes", {
  enumerable: true,
  get: function get() {
    return _routes2["default"];
  }
});
Object.defineProperty(exports, "PassajeirosRoutes", {
  enumerable: true,
  get: function get() {
    return _routes3["default"];
  }
});

var _routes = _interopRequireDefault(require("../../../modules/user/routes"));

var _routes2 = _interopRequireDefault(require("../../../modules/bus/routes"));

var _routes3 = _interopRequireDefault(require("../../../modules/passajeiros/routes"));