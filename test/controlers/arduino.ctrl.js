let ArduinoCtrl = {
    
    _app:{},
    _chai:{},
    _url:"",
    
    Setup (app, chai) {
        this._app = app;
        this._chai = chai;
        this._url = this._app.GetUrl();
    },
    
    GetIntervalRead (done) {
        console.log(this._chai)
        this._chai.request(this._app)
        .get( this._url + "/configuracoes/Intervalo/valor" )
        .end((err, res) => {
            res.should.be.status(200);
            res.body.should.be.a('Number');
            //res.body.should.be.eql(_configEx.valor);
            done();
        });
    }
    
}
    
module.exports = ArduinoCtrl;
