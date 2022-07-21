import { Link } from 'react-router-dom'
import './score.scss'

const Score = ({score, questions}) => {
    return (
    <div className='score-section'>
	    <div className='score'>
            Sua pontuação é {score} de {questions.length} questões
        </div>

        <nav className='navs'>
            <Link to='/perguntasfutebol' style={{ textDecoration: 'none' }} target="_blank">
                <button className='links link-1'> Reiniciar Quiz  </button>
            </Link>

            <Link to='/' style={{ textDecoration: 'none' }} target="_blank">
                <button className='links link-2'> Voltar para Home </button>
            </Link>
        </nav>
    </div>
    )
}

export default Score;