'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _users = require('../models/users');

var _users2 = _interopRequireDefault(_users);

var _jobs = require('../models/jobs');

var _jobs2 = _interopRequireDefault(_jobs);

var _requests = require('../models/requests');

var _requests2 = _interopRequireDefault(_requests);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by kennedy on 12/05/17.
 */
var database = null;

exports.default = function (app) {
  if (!database) {
    var config = app.config;
    _mongoose2.default.Promise = global.Promise;
    _mongoose2.default.connect(config.uri, config.options);

    database = {
      mongoose: _mongoose2.default,
      models: {}
    };

    database.models = {
      Users: (0, _users2.default)(_mongoose2.default),
      Jobs: (0, _jobs2.default)(_mongoose2.default),
      Requests: (0, _requests2.default)(_mongoose2.default)
    };

    return database;
  }
  return database;
};