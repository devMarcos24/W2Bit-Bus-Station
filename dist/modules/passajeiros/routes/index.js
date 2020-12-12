"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _express = require("express");

var _authenticateMiddleware = _interopRequireDefault(require("../../../shared/middlewares/authenticateMiddleware"));

var passajeiroRoutes = /*#__PURE__*/function () {
  function passajeiroRoutes() {
    (0, _classCallCheck2["default"])(this, passajeiroRoutes);
  }

  (0, _createClass2["default"])(passajeiroRoutes, null, [{
    key: "configure",
    value: function configure(passajeiroController) {
      var passajeiroRouter = (0, _express.Router)();
      passajeiroRouter.post("/", _authenticateMiddleware["default"], passajeiroController.create);
      passajeiroRouter.put("/:id", _authenticateMiddleware["default"], passajeiroController.update);
      passajeiroRouter["delete"]("/:id", _authenticateMiddleware["default"], passajeiroController["delete"]);
      return passajeiroRouter;
    }
  }]);
  return passajeiroRoutes;
}();

var _default = passajeiroRoutes;
exports["default"] = _default;