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

var CreatePassajeiroService = /*#__PURE__*/function () {
  function CreatePassajeiroService(db) {
    (0, _classCallCheck2["default"])(this, CreatePassajeiroService);
    this.db = db;
  }

  (0, _createClass2["default"])(CreatePassajeiroService, [{
    key: "execute",
    value: function () {
      var _execute = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(passajeiro) {
        var existPass, response;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _validation.createPassajeroValitation)(passajeiro);

              case 2:
                _context.next = 4;
                return this.db.findOne({
                  where: {
                    cpf: passajeiro.cpf
                  }
                });

              case 4:
                existPass = _context.sent;

                if (!existPass) {
                  _context.next = 7;
                  break;
                }

                throw new Error("this passajeiro already exists");

              case 7:
                _context.next = 9;
                return this.db.create(passajeiro);

              case 9:
                response = _context.sent;
                return _context.abrupt("return", response);

              case 11:
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
  return CreatePassajeiroService;
}();

var _default = CreatePassajeiroService;
exports["default"] = _default;