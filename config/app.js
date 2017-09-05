var express = require('express');
var app = express();
var url = "monitor-climatico";
var consign = require('consign');
var bodyParser = require('body-parser');
var queryParser = require('express-query-int');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

consign({cwd: 'app'})
  //.include('database')
  //.then('modelo')
  .include('api')
  .then('rotas')
  .into(app)
;

module.exports = app;
