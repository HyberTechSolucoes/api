'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _users = require('../controllers/users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
  var usersController = new _users2.default(app.datasource.models.Users);
  app.route('/users').get(function (req, res) {
    usersController.getAll().then(function (response) {
      res.status(response.statusCode);
      res.json(response.data);
    });
  }).post(function (req, res) {
    usersController.create(req.body).then(function (response) {
      res.status(response.statusCode);
      res.json(response.data);
    });
  });

  app.route('/users/:email').get(function (req, res) {
    usersController.getbyEmail(req.params).then(function (response) {
      res.status(response.statusCode);
      res.json(response.data);
    });
  }).put(function (req, res) {
    usersController.update(req.params, req.body).then(function (response) {
      res.status(response.statusCode);
      res.json(response.data);
    });
  }).delete(function (req, res) {
    usersController.disable(req.params).then(function (response) {
      return res.sendStatus(response.statusCode);
    });
  });
}; /**
    * Created by kennedy on 14/05/17.
    */