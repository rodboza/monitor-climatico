    let vm = {};

    vm._port = 0;
    vm._app = {};
    vm._server = {};

    vm.Setup = (port) => {
        vm._port = port;
        vm._app = require("../../config/app");
        vm._server = {};
    }

    vm.DoBefore = (done) => {
        vm._server = vm._app.listen( vm._port, () => { 
            console.log(`Inicializando o servidor na porta ${ vm._port}.`);
            done(); 
        });
    }
    
    vm.DoAfter = (done) => {
        vm._server.close();
        console.log(`finalizando o servidor na porta ${ vm._port}.`);
        done();
    }
    
    vm.GetUrl = () => {
        return "";
    }
        
    vm.GetApp = () => {
        return vm._app;
    }
        
    module.exports = vm;
