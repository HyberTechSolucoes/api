'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _config = require('./config/config');

var _config2 = _interopRequireDefault(_config);

var _datasource = require('./config/datasource');

var _datasource2 = _interopRequireDefault(_datasource);

var _users = require('./routes/users');

var _users2 = _interopRequireDefault(_users);

var _jobs = require('./routes/jobs');

var _jobs2 = _interopRequireDefault(_jobs);

var _requests = require('./routes/requests');

var _requests2 = _interopRequireDefault(_requests);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(); /**
                                     * Created by kennedy on 12/05/17.
                                     */

app.config = _config2.default;
app.datasource = (0, _datasource2.default)(app);

app.set('port', 3000);
app.use(_bodyParser2.default.json());

// Rotas
(0, _users2.default)(app);
(0, _jobs2.default)(app);
(0, _requests2.default)(app);

exports.default = app;