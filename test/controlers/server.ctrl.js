let AppCtrl =  {
    _port:3001,
    _app:{},
    _server:{},

    Setup (port) {
        this._port = port;
        this._app = require("../../config/app");
    },

    DoBefore(done){
        console.log(this._app)
        this._server = this._app.listen( this._port, () => { 
            console.log(`Inicializando o servidor na porta ${this._port}.`);
            done(); 
        });
        
    },
    
    DoAfter (done){
        this._server.close();
        done();
    },
    
    GetUrl () {
        return "/monitorClimatico";
    }
}
    
module.exports = AppCtrl;
