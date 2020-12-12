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

var _updatePassajeiroService = _interopRequireDefault(require("../services/updatePassajeiroService"));

var _deletePassajeiroService = _interopRequireDefault(require("../services/deletePassajeiroService"));

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
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var id, passajeiro, updatePassajeiroService, response;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = req.params.id;
                passajeiro = req.body;
                _context2.prev = 2;
                updatePassajeiroService = new _updatePassajeiroService["default"](database);
                _context2.next = 6;
                return updatePassajeiroService.execute({
                  id: id,
                  passajeiro: passajeiro
                });

              case 6:
                response = _context2.sent;
                return _context2.abrupt("return", res.status(200).json(response));

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](2);
                return _context2.abrupt("return", res.status(400).json({
                  error: _context2.t0.message
                }));

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 10]]);
      }));

      function update(_x3, _x4) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var id, passajeiro, deletePassajeiroService, response;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                id = req.params.id;
                passajeiro = req.body;
                _context3.prev = 2;
                deletePassajeiroService = new _deletePassajeiroService["default"](database);
                _context3.next = 6;
                return deletePassajeiroService.execute({
                  id: id
                });

              case 6:
                response = _context3.sent;
                return _context3.abrupt("return", res.status(200).json(response));

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](2);
                return _context3.abrupt("return", res.status(400).json({
                  error: _context3.t0.message
                }));

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[2, 10]]);
      }));

      function _delete(_x5, _x6) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }]);
  return passajeirosController;
}();

var _default = passajeirosController;
exports["default"] = _default;