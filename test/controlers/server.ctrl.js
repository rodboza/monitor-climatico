let ServerCtrl =  {
    _port:3001,
    _app:{} 
    _server:{},

    Setup (port) {
        _port = port;
        _app = require("../../config/app");
    },

    DoBefore(done){
        _server = _app.listen( _port, ()=> {});
        done();
    }
    
}
    
module.exports = ServerCtrl;
