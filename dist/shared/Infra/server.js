"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("dotenv/config");

var _setupApp = _interopRequireDefault(require("./setupApp"));

require("../database");

(0, _setupApp["default"])().then(function (app) {
  app.listen(3333, function () {
    console.log("running on the port 3333");
  });
});