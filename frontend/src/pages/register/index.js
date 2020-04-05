import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

//Integração API
import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCidade] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();
    
    //Cada click no botão ele recarrega a página, para evitar isso deve receber o evento com o método preventDefault();
    async function  handleRegister(e){
        e.preventDefault();
        const data = {name, email, whatsapp, city, uf};
        try {
            const  response = await api.post('/ongs', data);
            alert(`Seu Id de acesso é: ${response.data.id}`);
            history.push('/');
        } catch(err){
            alert('Erro no cadastro, tente novamente!');
        }
    }

    return (
        /*
        style={ {padding: 0, paddingLeft: 8 }}
        <input placeholder="Cidade" />
        <input placeholder="UF" style={ {width: 80} } />
        </div>
        */
        
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <Link className="back-link" to="/"> 
                        <FiArrowLeft size={16} color="#e02041" /> Não tem Cadastro
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <div className="cadastro">
                        <input placeholder="Nome da ONG"
                               value={name}
                               onChange={ e => setName(e.target.value)}
                        />
                        <input type="email" placeholder="E-mail" 
                                value={email}
                                onChange={ e => setEmail(e.target.value)}
                        />
                        <input placeholder="Whatsapp" 
                                value={whatsapp}
                                onChange={ e => setWhatsapp(e.target.value)}
                        />
                    
                        <div className="input-group" >
                            <input placeholder="Cidade" 
                                value={city}
                                onChange={ e => setCidade(e.target.value)}
                            />
                            <input placeholder="UF"  style={ {width: 80} }
                                value={uf}
                                onChange={ e => setUf(e.target.value)}
                            />
                        </div>
                    </div>
                    <button className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}