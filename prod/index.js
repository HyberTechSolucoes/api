'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_app2.default.listen(_app2.default.get('port'), function () {
  console.log('App sendo executada na porta ' + _app2.default.get('port'));
}); /**
     * Created by kennedy on 12/05/17.
     */