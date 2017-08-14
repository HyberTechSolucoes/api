'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _httpStatus = require('http-status');

var _httpStatus2 = _interopRequireDefault(_httpStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app, passport) {
    app.route('/').get(function (req, res) {
        res.status(_httpStatus2.default.OK);
        res.json({
            result: 'OK'
        });
    });

    app.get('/auth/facebook', passport.authenticate('facebook'));

    app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    });
}; /**
    * Created by kennedy on 31/05/17.
    */