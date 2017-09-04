let ServerCtrl =  {
    _port:3001,

    Setup (port) {
        _port = port;
    },

    DoBefore(done){
        done();
        console.log(this);
        console.log("teste " + this._port);
        return;
    }
    
}
    
module.exports = ServerCtrl;
