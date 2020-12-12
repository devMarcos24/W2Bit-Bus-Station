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

var _createUserSevice = _interopRequireDefault(require("../services/createUserSevice"));

var _sessionsUserServices = _interopRequireDefault(require("../services/sessionsUserServices"));

var database;

var UserController = /*#__PURE__*/function () {
  function UserController(db) {
    (0, _classCallCheck2["default"])(this, UserController);
    database = db;
  }

  (0, _createClass2["default"])(UserController, [{
    key: "index",
    value: function () {
      var _index = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var user, createUserService, response;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                user = req.body;
                _context.prev = 1;
                createUserService = new _createUserSevice["default"](database);
                console.log("aqio");
                _context.next = 6;
                return createUserService.execute(user);

              case 6:
                response = _context.sent;
                console.log("aqio2");
                res.status(201).json(response);
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](1);
                res.status(400).json({
                  error: _context.t0.message
                });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 11]]);
      }));

      function index(_x, _x2) {
        return _index.apply(this, arguments);
      }

      return index;
    }()
  }, {
    key: "sessions",
    value: function () {
      var _sessions = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var _req$body, email, password, sessionsUserService, response;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _req$body = req.body, email = _req$body.email, password = _req$body.password;
                _context2.prev = 1;
                sessionsUserService = new _sessionsUserServices["default"](database);
                _context2.next = 5;
                return sessionsUserService.execute({
                  email: email,
                  password: password
                });

              case 5:
                response = _context2.sent;
                res.status(201).json(response);
                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](1);
                res.status(400).json({
                  error: _context2.t0.message
                });

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 9]]);
      }));

      function sessions(_x3, _x4) {
        return _sessions.apply(this, arguments);
      }

      return sessions;
    }()
  }]);
  return UserController;
}();

var _default = UserController;
exports["default"] = _default;