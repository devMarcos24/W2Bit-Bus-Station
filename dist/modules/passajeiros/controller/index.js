"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _createPassajeiroService = _interopRequireDefault(require("../services/createPassajeiroService"));

var database;

var passajeirosController = /*#__PURE__*/function () {
  function passajeirosController(db) {
    (0, _classCallCheck2["default"])(this, passajeirosController);
    database = db;
  }

  (0, _createClass2["default"])(passajeirosController, [{
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var passajeiro, createPassajeiroService, response;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                passajeiro = req.body;
                _context.prev = 1;
                createPassajeiroService = new _createPassajeiroService["default"](database);
                _context.next = 5;
                return createPassajeiroService.execute(passajeiro);

              case 5:
                response = _context.sent;
                return _context.abrupt("return", res.status(200).json(response));

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](1);
                return _context.abrupt("return", res.status(400).json({
                  error: _context.t0.message
                }));

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 9]]);
      }));

      function create(_x, _x2) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }]);
  return passajeirosController;
}();

var _default = passajeirosController;
exports["default"] = _default;