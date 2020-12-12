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

var updateBusServices = /*#__PURE__*/function () {
  function updateBusServices(db) {
    (0, _classCallCheck2["default"])(this, updateBusServices);
    this.db = db;
  }

  (0, _createClass2["default"])(updateBusServices, [{
    key: "execute",
    value: function () {
      var _execute = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
        var id, bus, response;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = _ref.id, bus = _ref.bus;

                if (id) {
                  _context.next = 3;
                  break;
                }

                throw new Error("please send the id of your bus");

              case 3:
                _context.next = 5;
                return (0, _validation.updateBusValidation)(bus);

              case 5:
                _context.next = 7;
                return this.db.findOne({
                  where: {
                    id: id
                  }
                });

              case 7:
                response = _context.sent;

                if (!(bus.placa && response)) {
                  _context.next = 11;
                  break;
                }

                if (!(bus.placa === response.placa)) {
                  _context.next = 11;
                  break;
                }

                throw new Error("You cannot edit your placa because has a bus with this placa");

              case 11:
                if (response) {
                  _context.next = 13;
                  break;
                }

                throw new Error("This bus is not exists");

              case 13:
                _context.next = 15;
                return this.db.update(bus, {
                  where: {
                    id: id
                  }
                });

              case 15:
                _context.next = 17;
                return this.db.findOne({
                  where: {
                    id: id
                  }
                });

              case 17:
                response = _context.sent;
                return _context.abrupt("return", response);

              case 19:
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
  return updateBusServices;
}();

var _default = updateBusServices;
exports["default"] = _default;