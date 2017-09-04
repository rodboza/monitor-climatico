let AppCtrl =  {
    _port:3001,
    _app:{},
    _server:{},

    Setup (port) {
        _port = port;
        _app = require("../../config/app");
    },

    DoBefore(done){
        console.log(_app)
        _server = _app.listen( _port, () => { 
            console.log(`Inicializando o servidor na porta ${_port}.`);
            done(); 
        });
        
    },
    
    DoAfter (done){
        _server.close();
        done();
    },
    
    GetUrl () {
        return "/monitorClimatico";
    }
}
    
module.exports = AppCtrl;
