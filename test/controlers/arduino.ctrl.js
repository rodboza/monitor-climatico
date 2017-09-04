let ArduinoCtrl = {
    
    _app:{},
    _chai:{},
    _url:"",
    
    Setup (app, chai) {
        _app = app;
        _chai = chai;
        _url = _app.GetUrl();
    },
    
    GetIntervalRead (done) {
        _chai.request(_app)
        .get( _url + "/configuracoes/Intervalo/valor" )
        .end((err, res) => {
            res.should.be.status(200);
            res.body.should.be.a('Number');
            //res.body.should.be.eql(_configEx.valor);
            done();
        }
    }
    
}
    
module.exports = ArduinoCtrl;
