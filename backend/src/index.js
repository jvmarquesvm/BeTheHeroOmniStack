/**
 * importar as funcionalidades do express
 */
const express = require('express'); 

/**
 * Definir quem vai acessar a aplicação CORS
 * 
 */
const cors = require('cors');

/**
 * Importar o arquivo routes para app principal
 */
const routes = require('./routes')
const app = express(); //instanciar o express
app.use(cors()); //instanciar o CORS
app.use(express.json()); //Transforma toda requisição em JSON
app.use(routes);

// Rota raiz

/**
 * Rotas / Recursos
 */
/**
 * Métodos HTTP
 * GET: Buscar/Listar uma informação do backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 */
/**
 * Bando de Dados
 * SQL: MySQL, SQLite, PostGreSQL, Oracle, 
 * NoSQL: MongoDB, CouchDB, etc.
 */
/**
 * Driver: SELECT * FROM users;
 * Query Builder: table('users').select('*').where('')
 */

app.listen(3333); //Criar um servidor web escutando na port 3333(aplicações node)