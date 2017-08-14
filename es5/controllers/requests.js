'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by kennedy on 23/05/17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _httpStatus = require('http-status');

var _httpStatus2 = _interopRequireDefault(_httpStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultResponse = function defaultResponse(data) {
  var statusCode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _httpStatus2.default.OK;
  return {
    data: data,
    statusCode: statusCode
  };
};
var errorResponse = function errorResponse(message) {
  var statusCode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _httpStatus2.default.BAD_REQUEST;
  return defaultResponse({
    error: message
  }, statusCode);
};

var RequestsController = function () {
  function RequestsController(Requests) {
    _classCallCheck(this, RequestsController);

    this.Requests = Requests;
  }

  _createClass(RequestsController, [{
    key: 'getAll',
    value: function getAll() {
      return this.Requests.find({}).then(function (result) {
        return defaultResponse(result);
      }).catch(function (error) {
        return errorResponse(error.message);
      });
    }
  }, {
    key: 'getbyUserId',
    value: function getbyUserId(params) {
      return this.Requests.findOne(params).then(function (result) {
        return defaultResponse(result);
      }).catch(function (error) {
        return errorResponse(error.message);
      });
    }
  }, {
    key: 'create',
    value: function create(data) {
      return this.Requests.create(data).then(function (result) {
        return defaultResponse(result, _httpStatus2.default.CREATED);
      }).catch(function (error) {
        return errorResponse(error.message, _httpStatus2.default.UNPROCESSABLE_ENTITY);
      });
    }
  }, {
    key: 'update',
    value: function update(params, data) {
      return this.Requests.update(params, data).then(function (result) {
        return defaultResponse(result);
      }).catch(function (error) {
        return errorResponse(error.message, _httpStatus2.default.UNPROCESSABLE_ENTITY);
      });
    }

    // disable(params) {
    //     return this.Requests.update(params, { works: { status: 'DISABLED' }})
    //         .then(result => defaultResponse(result, HttpStatus.NO_CONTENT))
    //         .catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
    // }

  }]);

  return RequestsController;
}();

exports.default = RequestsController;