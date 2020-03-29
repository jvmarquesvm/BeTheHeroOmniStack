/**
 * Importando a conexão com o banco de dados
 */
const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        //Paginação
        const { page } = request.query;

        //Contar todos os casos da base de dados
        const [count] = await connection('incidents').count();

        console.log(count);

        //const incidents = await connection('incidents').select('*');
        const incidents = await connection('incidents')
                                          .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
                                          .limit(5).offset((page -1) * 5)
                                          .select( ['incidents.*', 
                                                    'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf' ]);
                                                    //Necessário especificar pois as tabelas tem a coluna id com o mesmo nome

        response.header('X-Total-Count', count['count(*)']);
        return response.json( incidents );
    },

    async create(request, response){
        const { title, description, value } = request.body;
        //Nome do atributo enviado no header(sem considerar letra maiúscula)
        const ong_id =  request.headers.authorization;
    
        const result = await connection('incidents').insert({
            title, description, value, ong_id
        });

        const id = result[0];
        console.log(id);
        return response.json({ id });
    },

    async delete(request, response){
        const  { id } = request.params;
        const ong_id = request.headers.authorization;

        //Obs:Deve ser feito um tratamento quando não encontrar o id na base
        const incident = await connection('incidents').where('id', id).select('ong_id').first();

        if(incident.ong_id != ong_id){
            return response.status(401).json({error: "Operação não permitida"});
        }

        await connection('incidents').where('id', id).delete();
        return response.status(204).send();
    }
}