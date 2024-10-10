import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HomePage.css'; // CSS 파일 가져오기

const HomePage = () => {
    const navigate = useNavigate();
    const [hoveredButton, setHoveredButton] = useState(null);

    return (
        <div className="container">
            <h1 className="title">일본어 퀴즈</h1>
            <div className="buttonContainer">
                <button
                    className={`button ${hoveredButton === 'login' ? 'buttonHover' : ''}`}
                    onMouseEnter={() => setHoveredButton('login')}
                    onMouseLeave={() => setHoveredButton(null)}
                    onClick={() => navigate('LoginPage')}
                >
                    로그인
                </button>
                <button
                    className={`button ${hoveredButton === 'game' ? 'buttonHover' : ''}`}
                    onMouseEnter={() => setHoveredButton('game')}
                    onMouseLeave={() => setHoveredButton(null)}
                    onClick={() => navigate('GamePage')}
                >
                    게임하기
                </button>
                <button
                    className={`button ${hoveredButton === 'profile' ? 'buttonHover' : ''}`}
                    onMouseEnter={() => setHoveredButton('profile')}
                    onMouseLeave={() => setHoveredButton(null)}
                    onClick={() => navigate('ProfilePage')}
                >
                    프로필보기
                </button>
            </div>
        </div>
    );
}

export default HomePage;
