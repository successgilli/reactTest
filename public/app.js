"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var port = 8080;
app.use(_express["default"]["static"]('public'));
app.get('*', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, '../public/index.html'));
});
app.listen(process.env.Port || port, function () {
  console.log("listening on port ".concat(port));
});