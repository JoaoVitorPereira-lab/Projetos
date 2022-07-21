import React from 'react';
import { GiSoccerField } from 'react-icons/gi'
import { MdQuiz } from 'react-icons/md'
import { Link } from 'react-router-dom';
import './home.scss'

export default function App(){
    return (
        <div className='home'>
            <div className='quizes'>
                <MdQuiz size={60} />
                <p className='txt-quizes'> Quizes </p>
            </div>

            <Link className='teste' to='/perguntasfutebol' style={{ textDecoration: 'none' }}>
                <button> <GiSoccerField size={40} style={{ fill: '#017000', marginRight: '10'}} /> Perguntas de Futebol </button>
            </Link>
        </div>
    );
}

