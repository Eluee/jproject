import React from 'react';
import '../styles/ProfilePage.css'; // CSS 파일 import

function ProfilePage({ nickname, correctAnswersCount, totalQuestions, level }) {
    const accuracy = totalQuestions > 0 ? ((correctAnswersCount / totalQuestions) * 100).toFixed(2) : 0;

    return (
        <div className="container">
            <h1>프로필 페이지</h1>
            <div className="profileBox">
                <h2>닉네임: {nickname}</h2>
                <p>정답률: {accuracy}%</p>
                <p>현재 레벨: {level}</p>
            </div>
        </div>
    );
}

export default ProfilePage; 
