import React, { useState } from 'react';
import '../styles/GamePage.css'; // CSS 파일 import

function GamePage() {
    const questions = [
        {
            japaneseWord: 'こんにちは',
            options: ['안녕하세요', '감사합니다', '안녕히 가세요'],
            correctAnswer: '안녕하세요',
        },
        {
            japaneseWord: 'さようなら',
            options: ['안녕하세요', '안녕히 가세요', '고맙습니다'],
            correctAnswer: '안녕히 가세요',
        },
        {
            japaneseWord: 'ありがとう',
            options: ['안녕하세요', '고맙습니다', '안녕히 가세요'],
            correctAnswer: '고맙습니다',
        },
        // Add more questions as needed
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    const [level, setLevel] = useState(1);

    const currentQuestion = questions[currentQuestionIndex];

    const handleAnswerClick = (option) => {
        setSelectedAnswer(option);
        const correct = option === currentQuestion.correctAnswer;
        setIsCorrect(correct);

        if (correct) {
            setCorrectAnswersCount((prevCount) => {
                const newCount = prevCount + 1;
                // Level up every 20 correct answers
                if (newCount % 10 === 0) {
                    setLevel((prevLevel) => prevLevel + 1);
                }
                return newCount;
            });
        }
    };

    const nextQuestion = () => {
        setSelectedAnswer(null);
        setIsCorrect(null);
        setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
    };

    const getButtonStyle = (option) => {
        if (selectedAnswer === null) return 'optionButton';

        if (option === selectedAnswer) {
            return option === currentQuestion.correctAnswer ? 'correctOption' : 'incorrectOption';
        }

        return 'optionButton';
    };

    return (
        <div className="container">
            <h3>Level: {level}</h3> {/* Display current level */}
            <div className="wordBox">
                <h2>{currentQuestion.japaneseWord}</h2>
            </div>
            <div className="options">
                {currentQuestion.options.map((option, index) => (
                    <button 
                        key={index} 
                        onClick={() => handleAnswerClick(option)} 
                        className={getButtonStyle(option)} // Use className instead of style
                    >
                        {option}
                    </button>
                ))}
            </div>
            {isCorrect !== null && (
                <div className="feedbackContainer">
                    <p className="feedback">
                        {isCorrect ? '정답입니다!' : '틀렸습니다. 다시 시도하세요!'}
                    </p>
                    <button onClick={nextQuestion} className="nextButton">
                        다음 문제
                    </button>
                </div>
            )}
        </div>
    );
}

export default GamePage; // Changed the export statement here
