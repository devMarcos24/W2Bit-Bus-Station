"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _bcrypt = require("bcrypt");

var _validation = require("../validation");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var CreateUserService = /*#__PURE__*/function () {
  function CreateUserService(db) {
    (0, _classCallCheck2["default"])(this, CreateUserService);
    this.db = db;
  }

  (0, _createClass2["default"])(CreateUserService, [{
    key: "execute",
    value: function () {
      var _execute = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(user) {
        var existsUser, passwordHash, response;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _validation.createUserValidation)(user);

              case 2:
                if (!(user.password != user.confirmPassword)) {
                  _context.next = 4;
                  break;
                }

                throw new Error("the passwords do not is similar");

              case 4:
                _context.next = 6;
                return this.db.findOne({
                  where: {
                    email: user.email
                  }
                });

              case 6:
                existsUser = _context.sent;

                if (!existsUser) {
                  _context.next = 9;
                  break;
                }

                throw new Error("user already exists please try with other email");

              case 9:
                _context.next = 11;
                return (0, _bcrypt.hash)(user.password, 8);

              case 11:
                passwordHash = _context.sent;
                _context.next = 14;
                return this.db.create(_objectSpread(_objectSpread({}, user), {}, {
                  password_hash: passwordHash
                }));

              case 14:
                response = _context.sent;
                response.password_hash = undefined;
                return _context.abrupt("return", response);

              case 17:
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