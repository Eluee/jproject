import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css'; // CSS 파일 가져오기

const LoginPage = () => {
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault(); // 기본 폼 제출 동작 방지
        // 로그인 처리 로직 추가 (예: 인증 API 호출)
        
        // 로그인 성공 시 메인 페이지로 이동
        navigate('/MainPage'); // 메인 페이지로 이동
    };

    return (
        <div className="container">
            <h1>로그인</h1>
            <form className="form" onSubmit={handleLogin}>
                <label className="label">이메일</label>
                <input type="email" className="input" required />
                <button type="submit" className="linkButton">로그인</button>
            </form>
            <button onClick={() => navigate('/RegistPage')} className="linkButton">
                회원가입
            </button>
        </div>
    );
}

export default LoginPage; // LoginPage 컴포넌트 내보내기
