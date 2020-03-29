/**
 * Conexão com o banco de dados
 */
const connection = require('../database/connection');
/**
 * Irá gerar valores aleatórios
 * Pacote utilizado para fornecer o Id da tabela ONG
 */
const crypto = require('crypto');

module.exports = {
    //Método de listar todas as ONGs
    async index (request, response){
        const ongs = await connection('ongs').select('*');
        return response.json( ongs );
    },
    //Método de Cadastrar uma ONG
    async create (request, response){
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
    }
};