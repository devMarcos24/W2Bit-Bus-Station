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

var DeletePassajeiroService = /*#__PURE__*/function () {
  function DeletePassajeiroService(db) {
    (0, _classCallCheck2["default"])(this, DeletePassajeiroService);
    this.db = db;
  }

  (0, _createClass2["default"])(DeletePassajeiroService, [{
    key: "execute",
    value: function () {
      var _execute = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
        var id, existPass, response;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = _ref.id;
                _context.next = 3;
                return this.db.findOne({
                  where: {
                    id: id
                  }
                });

              case 3:
                existPass = _context.sent;

                if (existPass) {
                  _context.next = 6;
                  break;
                }

                throw new Error("this passajeiro do not exists");

              case 6:
                _context.next = 8;
                return this.db.destroy({
                  where: {
                    id: id
                  }
                });

              case 8:
                response = _context.sent;

                if (!(response === 0)) {
                  _context.next = 11;
                  break;
                }

                throw new Error("Passajeiro is not deleted please try again");

              case 11:
                return _context.abrupt("return", {
                  message: "Passajeiro was deleted",
                  user: existPass
                });

              case 12:
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
  return DeletePassajeiroService;
}();

var _default = DeletePassajeiroService;
exports["default"] = _default;