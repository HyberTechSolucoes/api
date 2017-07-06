'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _passportFacebook = require('passport-facebook');

var _passportFacebook2 = _interopRequireDefault(_passportFacebook);

var _config = require('./config/config');

var _config2 = _interopRequireDefault(_config);

var _datasource = require('./config/datasource');

var _datasource2 = _interopRequireDefault(_datasource);

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

var _users = require('./routes/users');

var _users2 = _interopRequireDefault(_users);

var _jobs = require('./routes/jobs');

var _jobs2 = _interopRequireDefault(_jobs);

var _requests = require('./routes/requests');

var _requests2 = _interopRequireDefault(_requests);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by kennedy on 12/05/17.
 */
var app = (0, _express2.default)();
app.config = _config2.default;
app.datasource = (0, _datasource2.default)(app);

app.set('port', 3000);
app.use(_bodyParser2.default.json());

_passport2.default.use(new _passportFacebook2.default({
    clientID: '318873928552846',
    clientSecret: '3537143b5afe2ee42a0bb04bc0823d17',
    callbackURL: "http://localhost:3000/auth/facebook/callback"
}, function (accessToken, refreshToken, profile, cb) {
    console.log('accessToken', accessToken);
    console.log('refreshToken', refreshToken);
    console.log('profile', profile);
    console.log('cb', cb);
    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
        return cb(err, user);
    });
}));

// Rotas
(0, _index2.default)(app, _passport2.default);
(0, _users2.default)(app);
(0, _jobs2.default)(app);
(0, _requests2.default)(app);

exports.default = app;