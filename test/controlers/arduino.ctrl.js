let ArduinoCtrl = {
    
    _app:{},
    _chai:{},
    _url:"",
    
    Setup (server, chai) {
        this._app = server._app;
        this._chai = chai;
        this._url = server.GetUrl();
    },
    
    GetIntervalRead (done) {
        //console.log(ArduinoCtrl._app)
        _chai.request(ArduinoCtrl._app)
        .get( _url + "/configuracoes/Intervalo/valor" )
        .end((err, res) => {
            res.should.be.status(200);
            res.body.should.be.a('Number');
            //res.body.should.be.eql(_configEx.valor);
            done();
        });
    }
    
}
    
module.exports = ArduinoCtrl;
