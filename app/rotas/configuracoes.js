let express    = require('express');

module.exports = function(app) {

  let router = express.Router();
  let api = app.api.configuracoes;

  router
    .get('/:nome/valor', api.getNomeValor)
    //.get('/', api.getAll)
    //.post('/', api.post)
    //.get('/:nome', api.getName, api.getOne)
    //.put('/:nome', api.getName, api.put)
    //.delete('/:nome', api.getName, api.delete)
  ;

  app.use( app.url + '/configuracoes', router);

};
