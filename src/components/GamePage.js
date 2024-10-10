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
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    const [level, setLevel] = useState(1);
    const [levelUpAlert, setLevelUpAlert] = useState(false); // Level up alert 상태

    const currentQuestion = questions[currentQuestionIndex];

    const handleAnswerClick = (option) => {
        const correct = option === currentQuestion.correctAnswer;
        setSelectedAnswer(option);

        if (correct) {
            setCorrectAnswersCount((prevCount) => {
                const newCount = prevCount + 1;

                // Level up every 10 correct answers
                if (newCount % 10 === 0) {
                    setLevel(level + 1);
                    setLevelUpAlert(true); // 레벨업 알림 표시
                }

                return newCount;
            });

            // 다음 질문으로 자동 이동 (작은 지연 추가)
            setTimeout(nextQuestion, 500); 
        }
    };

    const nextQuestion = () => {
        setSelectedAnswer(null);
        setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
    };

    const closeAlertAndNextQuestion = () => {
        setLevelUpAlert(false);
        nextQuestion();
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
            {selectedAnswer && (
                <div className="feedbackContainer">
                    <p className="feedback">
                        {selectedAnswer === currentQuestion.correctAnswer ? '정답입니다!' : '틀렸습니다. 다시 시도하세요!'}
                    </p>
                </div>
            )}

            {/* 레벨업 알림창 */}
            {levelUpAlert && (
                <div className="alertContainer">
                    <div className="alertBox">
                        <p>축하합니다! 레벨이 {level}로 올랐습니다!</p>
                        <button onClick={closeAlertAndNextQuestion} className="nextLevelButton">
                            다음 레벨 문제 풀기
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default GamePage;
