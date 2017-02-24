var merge = require('webpack-merge');
var prodEnv = require('./prod.base.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
});
