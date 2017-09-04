let AppCtrl =  {
    _port:3001,
    _app:{},
    _server:{},

    Setup (port) {
        I = AppCtrl;
        I._port = port;
        I._app = require("../../config/app");
    },

    DoBefore(done){
        I = AppCtrl;
        console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
        console.log(I);
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        console.log(I._port);
        I._server = I._app.listen( I._port, () => { 
            console.log(`Inicializando o servidor na porta ${I._port}.`);
            done(); 
        });
        
    },
    
    DoAfter (done){
        I = AppCtrl;
        I._server.close();
        done();
    },
    
    GetUrl () {
        I = AppCtrl;
        return I._app.url;
    }
}
    
module.exports = AppCtrl;
