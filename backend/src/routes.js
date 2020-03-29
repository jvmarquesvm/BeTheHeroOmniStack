const express = require('express'); //importar as funcionalidades do express
const routes = express();
//const connection = require('./database/connection')

/**
 * Importando o arquivo controller
 */
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
/**
 * Irá gerar valores aleatórios
 * Pacote utilizado para fornecer o Id da tabela ONG
 */
const crypto = require('crypto');

routes.get('/users/:id', (request, response) => {
    //return response.send('HelloWorld');
    //const params = request.query;
    //console.log(params);

    //Adiconar a rota :id
    const params = request.params;
    console.log(params);	

    return response.json({evento: 'Semana OmniStrack 11.0',
                          aluno: 'João Victor Marques dos Santos'});
}); 

routes.post('/users', (request, response) => {
    //return response.send('HelloWorld');

    //Adicionar o body na requisição
    const params = request.body;
    console.log(params);

    return response.json({evento: 'Semana OmniStrack 11.0',
                          aluno: 'João Victor Marques dos Santos'});
}); 

/**
 * Cadastrando a ONG 
 * Função Assincrona devido o insert que pode demorar
 * async e await(aguardar a função retornar)
 * -->> Código removido para src/controllers/OngController.js
 * routes.post('/ongs',  OngController.create 
                                           async (request, response) => {
    //Adicionar o body na requisição

    //Pegar cada informação
    const {name, email, whatsapp, city, uf} = request.body;
    const id = crypto.randomBytes(4).toString('HEX');

    //Gerar a conexão com o banco de dados
    await connection('ongs').insert({
        id, name, email, whatsapp, city, uf
    });

    //Pegar toda a requisição
    const data = request.body;
    console.log(data);

    return response.json({id});
}); */
routes.post('/ongs', OngController.create );

/**
  * Listar todas as ONGs
  * -->> Código removido para src/controllers/OngController.js
  * routes.get('/ongs', async (request, response) => {
    const ongs = await connection('ongs').select('*');
    return response.json(ongs);
      });
  */
 routes.get('/ongs', OngController.index );

 /**
  * Cadastrando um Caso(Incident)
  */
 routes.post('/incidents', IncidentController.create);
 
 /**
  * Listar todos os Casos(Incidents)
  */
 routes.get('/incidents', IncidentController.index);
 
 /**
  * Deletar um Caso(Incident)
  */
 routes.delete('/incidents/:id', IncidentController.delete);

 /**
  * Listar os casos(incidents) para um ONG
  * 
  */
 routes.get('/profile', ProfileController.index);

 /**
  * Criar uma sessão de login(somente verificar se o id passsado existe na base de dados)
  */
routes.post('/sessions', SessionController.create)

 module.exports = routes;