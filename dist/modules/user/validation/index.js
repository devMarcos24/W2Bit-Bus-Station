"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sessionValidation = exports.createUserValidation = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _joi = _interopRequireDefault(require("joi"));

var createUserValidation = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(user) {
    var schema, verifySchema;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            schema = _joi["default"].object({
              name: _joi["default"].string().required("Name is required"),
              email: _joi["default"].string().required("Email is required"),
              url_foto: _joi["default"].string(),
              state: _joi["default"].string().required("State is required"),
              city: _joi["default"].string().required("City is required"),
              password: _joi["default"].string().required("Password is required"),
              confirmPassword: _joi["default"].string().required("Confirm is required")
            });
            _context.next = 3;
            return _joi["default"].validate(user, schema);

          case 3:
            verifySchema = _context.sent;
            return _context.abrupt("return", verifySchema);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createUserValidation(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.createUserValidation = createUserValidation;

var sessionValidation = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(session) {
    var schema, verifySchema;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            schema = _joi["default"].object({
              email: _joi["default"].string().required("Email is required"),
              password: _joi["default"].string().required("Password is required")
            });
            _context2.next = 3;
            return _joi["default"].validate(session, schema);

          case 3:
            verifySchema = _context2.sent;
            return _context2.abrupt("return", verifySchema);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function sessionValidation(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.sessionValidation = sessionValidation;