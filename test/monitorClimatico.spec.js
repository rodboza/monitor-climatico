var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);


var serverTst = require('./controlers/server.ctrl');
serverTst.Setup (3011);

var arduinoTst = require('./controlers/arduino.ctrl');
arduinoTst.Setup (serverTst, chai);

var webPageTst = require('./controlers/webApp.ctrl');


before( (done) => serverTst.DoBefore(done) ); 
after( (done) => serverTst.DoAfter(done) ); 

describe('Testes do modulo backend do monitor climatico', () => {

    describe('Teste de integração com o Arduino', () => {
        it('Arduino consulta tempo para intervalo de leitura.', (done) => arduinoTst.GetIntervalRead(done) );
        it('Arduino envia dados dos sensores para o backend ', arduinoTst.PostDataSensor );
    });

    describe('Teste de integração com o applicativo Web/Mobile', () => {
        it('App solicita dados climáticos atuias.', webPageTst.GetActualDada );
        it('App solicita uma lista de configurações.', webPageTst.GetConfigList );
    });
});
