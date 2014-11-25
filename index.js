var influx = require('influx')
,   Inflow;

Inflow = function () {};

Inflow.prototype.configure = function (options) {
  this.db = influx(options);
};

module.exports = new Inflow();
