"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var port = process.env.PORT || 3000;
app.use(_express["default"]["static"](_path["default"].resolve(__dirname, '../public')));
app.get('*', function (req, res) {
  res.sendFile(_path["default"].resolve(__dirname, './index.html'));
});
app.listen(port, function () {
  console.log("listening on port ".concat(port));
});