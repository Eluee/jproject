import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // axios import
import { getUserByEmail } from '../js/user';
import { useUser } from './UserContext'; // UserContext import
import '../styles/LoginPage.css'; // CSS 파일 가져오기

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState(''); // 이메일 상태 관리
    const { setUserData } = useUser(); // UserContext의 setUserData 가져오기

    const handleLogin = async (event) => {
        event.preventDefault(); // 기본 폼 제출 동작 방지

        // 입력된 이메일로 사용자 정보 가져오기
        const userData = await getUserByEmail(email);
        console.log(email);
        // 사용자 데이터가 존재하는 경우 (로그인 성공)
        if (userData) {
            console.log("로그인 성공:", userData);
            setUserData(userData); // userData를 Context에 저장
            navigate('/MainPage');
        } else {
            console.log("로그인 실패: 이메일을 확인하세요.");
            alert("로그인 실패: 이메일을 확인하세요."); // 사용자에게 알림
        }
    };

    return (
        <div className="container">
            <h1>일본어 단어퀴즈</h1>
            <form className="form" onSubmit={handleLogin}>
                <label className="label">이메일</label>
                <input 
                    type="email" 
                    className="input" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} // 입력값 변경 시 상태 업데이트
                    required 
                />
                <button type="submit" className="linkButton">로그인</button>
            </form>
            <button onClick={() => navigate('/RegistPage')} className="linkButton">
                회원가입
            </button>
        </div>
    );
}

export default LoginPage; // LoginPage 컴포넌트 내보내기
