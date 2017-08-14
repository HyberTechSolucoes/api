'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jobs = require('../controllers/jobs');

var _jobs2 = _interopRequireDefault(_jobs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
    var jobsController = new _jobs2.default(app.datasource.models.Jobs);
    app.route('/jobs').get(function (req, res) {
        jobsController.getAll().then(function (response) {
            res.status(response.statusCode);
            res.json(response.data);
        });
    }).post(function (req, res) {
        jobsController.create(req.body).then(function (response) {
            res.status(response.statusCode);
            res.json(response.data);
        });
    });

    app.route('/jobs/:user').get(function (req, res) {
        jobsController.getbyUserId(req.params).then(function (response) {
            res.status(response.statusCode);
            res.json(response.data);
        });
    }).put(function (req, res) {
        jobsController.update(req.params, req.body).then(function (response) {
            res.status(response.statusCode);
            res.json(response.data);
        });
    }).delete(function (req, res) {
        jobsController.disable(req.params).then(function (response) {
            return res.sendStatus(response.statusCode);
        });
    });

    app.route('/jobs/find/category/:category').get(function (req, res) {
        jobsController.getAllByCategory(req.params, req.query).then(function (response) {
            res.status(response.statusCode);
            res.json(response.data);
        });
    });
    app.route('/jobs/find/works/:name').get(function (req, res) {
        jobsController.getAllByWorks(req.params, req.query).then(function (response) {
            res.status(response.statusCode);
            res.json(response.data);
        });
    });
}; /**
    * Created by kennedy on 14/05/17.
    */