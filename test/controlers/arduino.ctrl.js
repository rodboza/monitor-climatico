
class ArduinoCtrl {
    
    constructor () {
        this._app = {};
        this._chai = {};
        this._url = {};
    }

    Setup (server, chai) {
        this._app = server.GetApp();
        this._chai = chai;
        this._url = server.GetUrl();
    }
    
    GetIntervalRead (done) {
        this._chai.request(this._app)
        .get( this._url + "/configuracoes/Intervalo/valor" )
        .end((err, res) => {
            if(err) 
                done(err);
            res.should.be.status(200);
            //res.body.should.be.a('Number');
            //res.body.should.be.eql(_configEx.valor);
            done();
        });
    }
}

module.exports = new ArduinoCtrl();

