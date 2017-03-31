'use strict';

var _ = require('.');

test('says hello pack', function () {
  expect((0, _.pack)()).toBe('hello pack');
});