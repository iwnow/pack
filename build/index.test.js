'use strict';

var _ = require('.');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('says hello pack', function () {
  expect((0, _2.default)()).toBe('hello pack');
});