import React, { useState } from 'react';
import Score from '../../components/score/score'
import QuestionBox from '../../components/questionbox/questionbox'
import './pf.scss'

export default function App() {
	
	const questions = [
		{
			question: 'Qual é o maior campeão da Liga dos Campeões?',
			answerOptions: [
				{ answerText: 'Milan', isCorrect: false },
				{ answerText: 'Ajax', isCorrect: false },
				{ answerText: 'Liverpool', isCorrect: false },
				{ answerText: 'Real Madrid', isCorrect: true },
			],
		},
		{
			question: 'Quem é o maior campeão da Liga Europa?',
			answerOptions: [
				{ answerText: 'Sevilla', isCorrect: true },
				{ answerText: 'Internacionalize', isCorrect: false },
				{ answerText: 'Juventus', isCorrect: false },
				{ answerText: 'Liverpool', isCorrect: false },
			],
		},
		{
			question: 'Quem é o jogador que fez mais gols em uma edição de Copa do Mundo?',
			answerOptions: [
				{ answerText: 'Miroslav Klose', isCorrect: true },
				{ answerText: 'Cristiano Ronaldo', isCorrect: false },
				{ answerText: 'Ronaldo Fenômeno', isCorrect: false },
				{ answerText: 'Pelé', isCorrect: false },
			],
		},
		{
			question: 'Quem é o maior goleador da história atualmente?',
			answerOptions: [
				{ answerText: 'Cristiano Ronaldo', isCorrect: true },
				{ answerText: 'Lionel Messi', isCorrect: false },
				{ answerText: 'Neymar', isCorrect: false },
				{ answerText: 'Robert Lewandowski', isCorrect: false },
			],
		},
	]

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
		<div className='site'>
			{showScore ? (
				<Score score={score} questions={questions} />
			) : (
				<QuestionBox 
				  currentQuestion={currentQuestion} 
				  questions={questions}
				  onClick={(isCorrect) => handleAnswerOptionClick(isCorrect)}
				/>
			)}
		</div>
	);
}
