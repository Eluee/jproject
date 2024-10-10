
import React, { useState, useEffect } from 'react';
import { getJpDictData, createQuestionsFromData } from '../js/jpvocabulary';
import '../styles/GamePage.css'; // CSS 파일 import

function GamePage() {
    const [questions, setQuestions] = useState([]); // API에서 가져올 문제 리스트
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    const [level, setLevel] = useState(1);
    const [levelUpAlert, setLevelUpAlert] = useState(false); // Level up alert 상태

    // 데이터를 가져와서 문제 생성
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getJpDictData(level); // 현재 레벨에 맞는 데이터를 가져옴
                const generatedQuestions = createQuestionsFromData(response); // 데이터를 문제 형식으로 변환
                setQuestions(generatedQuestions); // 문제 상태에 저장
            } catch (error) {
                console.error("데이터 가져오기 에러:", error);
            }
        };

        fetchData();
    }, [level]); // 레벨이 변경될 때마다 데이터 다시 가져옴

    const handleAnswerClick = (option) => {
        if (questions.length === 0) return; // 데이터가 없을 경우 처리

        const currentQuestion = questions[currentQuestionIndex];
        const correct = option === currentQuestion.correctAnswer;
        setSelectedAnswer(option);

        if (correct) {
            setCorrectAnswersCount((prevCount) => {
                const newCount = prevCount + 1;

                // Level up every 10 correct answers, but max level is 6
                if (newCount % 10 === 0 && level < 6) {
                    setLevel(level + 1); // 레벨을 증가시키기 전에 현재 레벨 체크
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

        const currentQuestion = questions[currentQuestionIndex];
        if (option === selectedAnswer) {
            return option === currentQuestion.correctAnswer ? 'correctOption' : 'incorrectOption';
        }

        return 'optionButton';
    };

    if (questions.length === 0) {
        return <div>Loading...</div>; // 데이터가 없을 때 로딩 상태 표시
    }

    const currentQuestion = questions[currentQuestionIndex];

    // 정답률 계산
    const totalQuestions = correctAnswersCount + (currentQuestionIndex + 1); // 총 푼 문제 수
    const correctRate = totalQuestions > 0 ? (correctAnswersCount / totalQuestions) * 100 : 0;

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
            <div className="feedbackContainer">
                {selectedAnswer && (
                    <p className="feedback">
                        {selectedAnswer === currentQuestion.correctAnswer ? '정답입니다!' : '틀렸습니다. 다시 시도하세요!'}
                    </p>
                )}
            </div>

            {/* 레벨업 알림창 */}
            {levelUpAlert && (
                <div className="alertContainer">
                    <div className="alertBox">
                        <p>축하합니다! 레벨이 {level}로 올랐습니다!</p>
                        <p>현재 정답률: {correctRate.toFixed(2)}%</p> {/* 정답률 표시 */}
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
