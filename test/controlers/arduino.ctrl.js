//let chai = require('chai');
//let chaiHttp = require('chai-http');
//let should = chai.should();
//chai.use(chaiHttp);

let ArduinoCtrl = {
    
    _app:{},
    _chai:{},
    _url:"",
    
    Setup (server, chai) {
        let I = ArduinoCtrl;
        I._app = server._app;
        I._chai = chai;
        I._url = server.GetUrl();
    },
    
    GetIntervalRead (done) {
        let I = ArduinoCtrl;
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
        console.log(I._app.listeners())
        console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
        I._chai.request(I._app)
        .get( I._url + "/configuracoes/Intervalo/valor" )
        .end((err, res) => {
            if(err) 
                done(err);
            res.should.be.status(200);
            res.body.should.be.a('Number');
            //res.body.should.be.eql(_configEx.valor);
            done();
        });
    }
    
}
    
module.exports = ArduinoCtrl;
