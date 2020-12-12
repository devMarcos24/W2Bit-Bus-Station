"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _auth = _interopRequireDefault(require("../../config/auth"));

function ensureAuthenticated(request, response, next) {
  var authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      error: "JWT token is missing"
    });
  }

  var _authHeader$split = authHeader.split(" "),
      _authHeader$split2 = (0, _slicedToArray2["default"])(_authHeader$split, 2),
      token = _authHeader$split2[1];

  try {
    var decoded = _jsonwebtoken["default"].verify(token, _auth["default"].jwt.secret);

    var sub = decoded.sub;
    request.user = {
      id: sub
    };
    return next();
  } catch (_unused) {
    return response.status(401).json({
      error: "JWT token is missing"
    });
  }
}

var _default = ensureAuthenticated;
exports["default"] = _default;