let express = require('express');
let app = express();
let url = "monitor-climatico";
let consign = require('consign');


consign({cwd: 'app'})
  //.include('database')
  //.then('modelo')
  .include('api')
  .then('rotas')
  .into(app)
;

module.exports = app;
