import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			pergunta: 'Qual é o maior campeão da Liga dos Campeões?',
			answerOptions: [
				{ answerText: 'Milan', isCorrect: false },
				{ answerText: 'Ajax', isCorrect: false },
				{ answerText: 'Liverpool', isCorrect: false },
				{ answerText: 'Real Madrid', isCorrect: true },
			],
		},
		{
			pergunta: 'Quem é o maior campeão da Liga Europa?',
			answerOptions: [
				{ answerText: 'Sevilla', isCorrect: true },
				{ answerText: 'Internacionalize', isCorrect: false },
				{ answerText: 'Juventus', isCorrect: false },
				{ answerText: 'Liverpool', isCorrect: false },
			],
		},
		{
			pergunta: 'Quem é o jogador que fez mais gols em uma edição de Copa do Mundo?',
			answerOptions: [
				{ answerText: 'Miroslav Klose', isCorrect: true },
				{ answerText: 'Cristiano Ronaldo', isCorrect: false },
				{ answerText: 'Ronaldo Fenômeno', isCorrect: false },
				{ answerText: 'Pelé', isCorrect: false },
			],
		},
		{
			pergunta: 'Quem é o maior goleador da história atualmente?',
			answerOptions: [
				{ answerText: 'Cristiano Ronaldo', isCorrect: true },
				{ answerText: 'Lionel Messi', isCorrect: false },
				{ answerText: 'Neymar', isCorrect: false },
				{ answerText: 'Robert Lewandowski', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1)
		}
		
		const nextQuestion = currentQuestion + 1
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion)
		}
		else {
			setShowScore(true);
		}
	}

	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					Sua pontuação é {score} de {questions.length} questões
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Questão {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].pergunta}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
