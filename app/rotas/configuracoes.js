var express    = require('express');

module.exports = function(app) {

  var router = express.Router();
  var api = app.api.configuracoes;

  router
    .get('/:nome/valor', api.getNomeValor)
    //.get('/', api.getAll)
    //.post('/', api.post)
    //.get('/:nome', api.getName, api.getOne)
    //.put('/:nome', api.getName, api.put)
    //.devare('/:nome', api.getName, api.devare)
  ;

  app.use('/configuracoes', router);

};
