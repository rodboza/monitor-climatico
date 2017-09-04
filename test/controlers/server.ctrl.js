let AppCtrl =  {
    _port:3001,
    _app:{},
    _server:{},

    Setup (port) {
        _port = port;
        _app = require("../../config/app");
        console.log(_app)
    },

    DoBefore(done){
        _server = _app.listen( _port, ()=> { done(); });
        
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
