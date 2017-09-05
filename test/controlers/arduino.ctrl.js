
let vm = {}
    vm._app = {};
    vm._chai = {};
    vm._url = {};

    vm.Setup = (server, chai) => {
        vm._app = server.GetApp();
        vm._chai = chai;
        vm._url = server.GetUrl();
    }
    
    vm.GetIntervalRead = (done) => {
        vm._chai.request(vm._app)
        .get( vm._url + "/configuracoes/Intervalo/valor" )
        .end((err, res) => {
            if(err) 
                done(err);
            res.should.be.status(200);
            //res.body.should.be.a('Number');
            //res.body.should.be.eql(_configEx.valor);
            done();
        });
    }
    
    module.exports = vm;

