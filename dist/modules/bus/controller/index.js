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

var _createBusServices = _interopRequireDefault(require("../services/createBusServices"));

var _listAllBusServices = _interopRequireDefault(require("../services/listAllBusServices"));

var _listBusServices = _interopRequireDefault(require("../services/listBusServices"));

var _deleteBusServices = _interopRequireDefault(require("../services/deleteBusServices"));

var database;

var busController = /*#__PURE__*/function () {
  function busController(db) {
    (0, _classCallCheck2["default"])(this, busController);
    database = db;
  }

  (0, _createClass2["default"])(busController, [{
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var bus, createBusServices, response;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                bus = req.body;
                _context.prev = 1;
                createBusServices = new _createBusServices["default"](database);
                _context.next = 5;
                return createBusServices.execute(bus);

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
    key: "index",
    value: function () {
      var _index = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var listAllBusServices, response;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                listAllBusServices = new _listAllBusServices["default"](database);
                _context2.next = 4;
                return listAllBusServices.execute();

              case 4:
                response = _context2.sent;
                return _context2.abrupt("return", res.status(200).json(response));

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", res.status(400).json({
                  error: _context2.t0.message
                }));

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 8]]);
      }));

      function index(_x3, _x4) {
        return _index.apply(this, arguments);
      }

      return index;
    }()
  }, {
    key: "list",
    value: function () {
      var _list = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var id, listBusServices, response;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                id = req.params.id;
                _context3.prev = 1;
                listBusServices = new _listBusServices["default"](database);
                _context3.next = 5;
                return listBusServices.execute({
                  id: id
                });

              case 5:
                response = _context3.sent;
                return _context3.abrupt("return", res.status(200).json(response));

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](1);
                return _context3.abrupt("return", res.status(400).json({
                  error: _context3.t0.message
                }));

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 9]]);
      }));

      function list(_x5, _x6) {
        return _list.apply(this, arguments);
      }

      return list;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var id, deleteBusServices, response;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                id = req.params.id;
                _context4.prev = 1;
                deleteBusServices = new _deleteBusServices["default"](database);
                _context4.next = 5;
                return deleteBusServices.execute({
                  id: id
                });

              case 5:
                response = _context4.sent;
                return _context4.abrupt("return", res.status(200).json(response));

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](1);
                return _context4.abrupt("return", res.status(400).json({
                  error: _context4.t0.message
                }));

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[1, 9]]);
      }));

      function _delete(_x7, _x8) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }]);
  return busController;
}();

var _default = busController;
exports["default"] = _default;