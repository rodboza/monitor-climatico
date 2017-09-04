let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);


let serverTst = require('./controlers/server.ctrl');
let arduinoTst = require('./controlers/arduino.ctrl');
let webPageTst = require('./controlers/webApp.ctrl');


describe('Testes do modulo backend do monitor climatico', () => {

    before( (done) => serverTst.DoBefore(done) ); 
    after( () => {} ); 

    describe('Teste de integração com o Arduino', () => {
        it('Arduino consulta tempo para intervalo de leitura.', arduinoTst.GetIntervalRead );
        it('Arduino envia dados dos sensores para o backend ', arduinoTst.PostDataSensor );
    });


    describe('Teste de integração com o applicativo Web/Mobile', () => {
        it('App solicita dados climáticos atuias.', webPageTst.GetActualDada );
        it('App solicita uma lista de configurações.', webPageTst.GetConfigList );
    });
});
