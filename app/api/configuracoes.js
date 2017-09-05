module.exports = function(app) {

  var api = {};

  //INICIO FUNCAO
  api.getNomeValor = function(req, res, next) {
     return res.sendStatus(200);
  }
  //FIM FUNCAO
  
  return api;
}
