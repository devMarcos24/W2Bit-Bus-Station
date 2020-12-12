"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPassajeroValitation = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _joi = _interopRequireDefault(require("joi"));

var createPassajeroValitation = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(passajeiro) {
    var schema, verifySchema;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            schema = _joi["default"].object({
              name: _joi["default"].string().required("Name is required"),
              age: _joi["default"].number().required("Age is required"),
              cpf: _joi["default"].string().required("CPF is required")
            });
            _context.next = 3;
            return _joi["default"].validate(passajeiro, schema);

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

  return function createPassajeroValitation(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.createPassajeroValitation = createPassajeroValitation;