module.exports = function(app) {

  let api = {};

  //INICIO FUNCAO
  api.getNomeValor = function(req, res, next) {
     return res.sendStatus(200);
  }
  //FIM FUNCAO
  
  return api;
}
