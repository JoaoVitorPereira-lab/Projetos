
const Score = ({score, questions}) => {
    return (
    <div className='score-section'>
	    Sua pontuação é {score} de {questions.length} questões
    </div>
    )
}

export default Score;