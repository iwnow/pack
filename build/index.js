'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pack = undefined;

var _providers = require('./providers');

var pack = exports.pack = function pack() {
  return (0, _providers.helloProvider)();
};