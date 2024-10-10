import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/MainPage.css'; // CSS 파일 import

const MainPage = () => {
    const navigate = useNavigate(); // 페이지 이동을 위해 useNavigate 훅 사용

    return (
        <div className="container">
            <h1 className="title">일본어 퀴즈</h1>
            <div className="buttonContainer">
                <button className="button" onClick={() => navigate('/GamePage')}>
                    게임하기
                </button>
                <button className="button" onClick={() => navigate('/ProfilePage')}>
                    프로필보기
                </button>
            </div>
        </div>
    );
}

export default MainPage; // MainPage 컴포넌트를 내보냅니다.
