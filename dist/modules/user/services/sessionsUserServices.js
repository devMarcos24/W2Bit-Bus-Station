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

var _bcrypt = require("bcrypt");

var _jsonwebtoken = require("jsonwebtoken");

var _auth = _interopRequireDefault(require("../../../config/auth"));

var CreateUserService = /*#__PURE__*/function () {
  function CreateUserService(db) {
    (0, _classCallCheck2["default"])(this, CreateUserService);
    this.db = db;
  }

  (0, _createClass2["default"])(CreateUserService, [{
    key: "execute",
    value: function () {
      var _execute = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
        var email, password, user, verifyPassword, token;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                email = _ref.email, password = _ref.password;
                _context.next = 3;
                return this.db.findOne({
                  where: {
                    email: email
                  }
                });

              case 3:
                user = _context.sent;

                if (user) {
                  _context.next = 6;
                  break;
                }

                throw new Error("email/password is invalid");

              case 6:
                _context.next = 8;
                return (0, _bcrypt.compare)(password, user.password_hash);

              case 8:
                verifyPassword = _context.sent;

                if (verifyPassword) {
                  _context.next = 11;
                  break;
                }

                throw new Error("email/password is invalid");

              case 11:
                token = (0, _jsonwebtoken.sign)({}, _auth["default"].jwt.secret, {
                  subject: user.id.toString(),
                  expiresIn: _auth["default"].jwt.expiresIn
                });
                return _context.abrupt("return", {
                  user: user,
                  token: token
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function execute(_x) {
        return _execute.apply(this, arguments);
      }

      return execute;
    }()
  }]);
  return CreateUserService;
}();

var _default = CreateUserService;
exports["default"] = _default;