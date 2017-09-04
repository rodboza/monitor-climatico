let ServerCtrl =  {
    _port:3001,
    _app:require("../../config/app"),
    _server:{},

    Setup (port) {
        _port = port;
    },

    DoBefore(done){
        _server = _app.listen( _port, ()=> {});
        done();
    }
    
}
    
module.exports = ServerCtrl;
