import React, {useState} from 'react';
import {FiLogIn} from 'react-icons/fi';
import {Link, useHistory} from 'react-router-dom';
import api from '../../services/api';

import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon(){
    //Substituído pelo Link
    //<!-- <a href="/register"> 
    //<FiLogIn size={16} color="#e02041" /> Não tem Cadastro
    //</a>-->
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();
        const data = {id};
        try{
            const response = await api.post('/sessions', data );

            //Dados do usuário deve estar disponível por toda a aplicação
            //Armazanar no localStorage
            console.log(response.data.name);
            localStorage.setItem('OngId', id);
            localStorage.setItem('OngName', response.data.name);

            history.push('/profile');
        }catch(err){
            alert('Falha no login, tente novamente!');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />
                
                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>
                    <input placeholder="Sua ID" style={ {width: 350} } 
                           value={id}
                           onChange={ e => setId(e.target.value)}
                    />
                           
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register"> 
                        <FiLogIn size={16} color="#e02041" /> Não tem Cadastro
                    </Link>
                </form>

            </section>
            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}