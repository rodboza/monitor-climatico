class AppCtrl {

    constructor () {
        this._port = 0;
        this._app = require("../../config/app");
        this._server = {};
    }

    Setup (port) {
        this._port = port;
    }

    DoBefore (done) {
        this._server = this._app.listen( this._port, () => { 
            console.log(`Inicializando o servidor na porta ${ this._port}.`);
            done(); 
        });
    }
    
    DoAfter (done) {
        this._server.close();
        console.log(`finalizando o servidor na porta ${ this._port}.`);
        done();
    }
    
    GetUrl () {
        return "";
    }
        
    GetApp () {
        return this._app;
    }
}     

module.exports = new AppCtrl();
