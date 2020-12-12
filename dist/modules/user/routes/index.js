"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _express = require("express");

var UserRoutes = /*#__PURE__*/function () {
  function UserRoutes() {
    (0, _classCallCheck2["default"])(this, UserRoutes);
  }

  (0, _createClass2["default"])(UserRoutes, null, [{
    key: "configure",
    value: function configure(userController) {
      var route = (0, _express.Router)();
      route.post("/", userController.index);
      route.post("/sessions", userController.sessions);
      return route;
    }
  }]);
  return UserRoutes;
}();

var _default = UserRoutes;
exports["default"] = _default;