import React, {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import {FiPower, FiTrash2} from 'react-icons/fi'
import './styles.css';

export default function Profile(){
    const ongName = localStorage.getItem('OngName');
    const ongId = localStorage.getItem('OngId');
    const [ incidents, setIncidents ] = useState([]);
    const history = useHistory();

    useEffect(() => {
        api.get('/profile', {
            headers: {
                Authorization: ongId
            }
        }).then( response => {
            setIncidents(response.data)
        })
    }, [ongId]);

    async function handleDeleteIncident(id){
        try {
            await api.delete(`/incidents/${id}`, { 
                headers: {
                    Authorization: ongId
                }
            });
            console.log(`Caso apagado ${id} com sucesso!` );
            setIncidents(incidents.filter( incident => incident.id !== id ));
        } catch (err) {
            alert('Erro ao apagar um caso!');
        }
    }

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }

    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Seja Bem-Vindo! {ongName}</span>
                <Link className='button' to="/incident/new">Cadastrar novo Caso</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#E02031"/>
                </button>
            </header>
            <h1>Casos Cadastrados</h1>
            <ul>
                { incidents.map( incident => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>
                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>
                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

                        <button onClick={ () => handleDeleteIncident(incident.id) } type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}