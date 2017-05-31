'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by kennedy on 14/05/17.
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

var UsersController = function () {
  function UsersController(Users) {
    _classCallCheck(this, UsersController);

    this.Users = Users;
  }

  _createClass(UsersController, [{
    key: 'getAll',
    value: function getAll() {
      return this.Users.find({}).then(function (result) {
        return defaultResponse(result);
      }).catch(function (error) {
        return errorResponse(error.message);
      });
    }
  }, {
    key: 'getbyEmail',
    value: function getbyEmail(params) {
      return this.Users.findOne(params).then(function (result) {
        return defaultResponse(result);
      }).catch(function (error) {
        return errorResponse(error.message);
      });
    }
  }, {
    key: 'create',
    value: function create(data) {
      return this.Users.create(data).then(function (result) {
        return defaultResponse(result, _httpStatus2.default.CREATED);
      }).catch(function (error) {
        return errorResponse(error.message, _httpStatus2.default.UNPROCESSABLE_ENTITY);
      });
    }
  }, {
    key: 'update',
    value: function update(params, data) {
      return this.Users.update(params, data).then(function (result) {
        return defaultResponse(result);
      }).catch(function (error) {
        return errorResponse(error.message, _httpStatus2.default.UNPROCESSABLE_ENTITY);
      });
    }
  }, {
    key: 'disable',
    value: function disable(params) {
      return this.Users.update(params, { active: false }).then(function (result) {
        return defaultResponse(result, _httpStatus2.default.NO_CONTENT);
      }).catch(function (error) {
        return errorResponse(error.message, _httpStatus2.default.UNPROCESSABLE_ENTITY);
      });
    }
  }]);

  return UsersController;
}();

exports.default = UsersController;