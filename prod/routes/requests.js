'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _requests = require('../controllers/requests');

var _requests2 = _interopRequireDefault(_requests);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
  var requestsController = new _requests2.default(app.datasource.models.Requests);
  app.route('/requests').get(function (req, res) {
    requestsController.getAll().then(function (response) {
      res.status(response.statusCode);
      res.json(response.data);
    });
  }).post(function (req, res) {
    requestsController.create(req.body).then(function (response) {
      res.status(response.statusCode);
      res.json(response.data);
    });
  });

  app.route('/requests/:user').get(function (req, res) {
    requestsController.getbyUserId(req.params).then(function (response) {
      res.status(response.statusCode);
      res.json(response.data);
    });
  }).put(function (req, res) {
    requestsController.update(req.params, req.body).then(function (response) {
      res.status(response.statusCode);
      res.json(response.data);
    });
  }).delete(function (req, res) {
    requestsController.disable(req.params).then(function (response) {
      return res.sendStatus(response.statusCode);
    });
  });
}; /**
    * Created by kennedy on 23/05/17.
    */