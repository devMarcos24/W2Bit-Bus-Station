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

var _validation = require("../validation");

var UpdatePassajeiroService = /*#__PURE__*/function () {
  function UpdatePassajeiroService(db) {
    (0, _classCallCheck2["default"])(this, UpdatePassajeiroService);
    this.db = db;
  }

  (0, _createClass2["default"])(UpdatePassajeiroService, [{
    key: "execute",
    value: function () {
      var _execute = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
        var id, passajeiro, existPass;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = _ref.id, passajeiro = _ref.passajeiro;
                _context.next = 3;
                return (0, _validation.updatePassajeroValitation)(passajeiro);

              case 3:
                if (!passajeiro.cpf) {
                  _context.next = 5;
                  break;
                }

                throw new Error("You cannot change the CPF");

              case 5:
                _context.next = 7;
                return this.db.findOne({
                  where: {
                    id: id
                  }
                });

              case 7:
                existPass = _context.sent;

                if (existPass) {
                  _context.next = 10;
                  break;
                }

                throw new Error("this passajeiro do not exists");

              case 10:
                _context.next = 12;
                return this.db.update(passajeiro, {
                  where: {
                    id: id
                  }
                });

              case 12:
                _context.next = 14;
                return this.db.findOne({
                  where: {
                    id: id
                  }
                });

              case 14:
                existPass = _context.sent;
                return _context.abrupt("return", existPass);

              case 16:
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
  return UpdatePassajeiroService;
}();

var _default = UpdatePassajeiroService;
exports["default"] = _default;