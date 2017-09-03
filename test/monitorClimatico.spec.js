

let serverTst = {};
let arduinoTst = {};
let webPageTst = {};


before('Inicializando o servidor para os testes.', () => {} );//serverTst.DoBefore ); 
after( 'Finalizando o servidor.', () => {} );//serverTst.DoAfter );




describe('Teste de integração com o Arduino', () => {
    it('Arduino consulta tempo para intervalo de leitura.', arduinoTst.GetIntervalRead );
    it('Arduino envia dados dos sensores para o backend ', arduinoTst.PostDataSensor );
});


describe('Teste de integração com o applicativo Web/Mobile', () => {
    it('App solicita dados climáticos atuias.', webPageTst.GetActualDada );
    it('App solicita uma lista de configurações.', webPageTst.GetConfigList );
});

