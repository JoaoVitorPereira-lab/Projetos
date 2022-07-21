import './questionbox.scss'

const QuestionBox = ({ currentQuestion, questions, onClick }) => {
    return (
        <div className='container'>
            <div className='question-section'>
                <div className='question-count'>
                    <span>Questão {currentQuestion + 1}</span>/{questions.length}
                </div>

                <div className='question-text'>
                    {questions[currentQuestion].question}
                </div>
            </div>


            <div className='answer-section'>
                {questions[currentQuestion].answerOptions.map(
                    (answerOption, index) => (
                    <button
                        onClick={() => onClick(answerOption.isCorrect)}
                        key={index} 
                    >
                        {answerOption.answerText}
                    </button>
                ))}
            </div>
		</div>
    )
}

export default QuestionBox;