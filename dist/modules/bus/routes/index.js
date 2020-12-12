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

var BusRoutes = /*#__PURE__*/function () {
  function BusRoutes() {
    (0, _classCallCheck2["default"])(this, BusRoutes);
  }

  (0, _createClass2["default"])(BusRoutes, null, [{
    key: "configure",
    value: function configure(busController) {
      var busRouter = (0, _express.Router)();
      busRouter.post("/", _authenticateMiddleware["default"], busController.create);
      busRouter.get("/", _authenticateMiddleware["default"], busController.index);
      busRouter.get("/:id", _authenticateMiddleware["default"], busController.list);
      busRouter["delete"]("/:id", _authenticateMiddleware["default"], busController["delete"]);
      return busRouter;
    }
  }]);
  return BusRoutes;
}();

var _default = BusRoutes;
exports["default"] = _default;