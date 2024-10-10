import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css'; // CSS 파일 가져오기

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState(''); // 이메일 상태 관리

    const handleLogin = (event) => {
        event.preventDefault(); // 기본 폼 제출 동작 방지

        // 로그인 처리 로직 (예: 입력된 이메일 확인)
        if (email) {
            // 이메일이 존재하는 경우 (여기서는 단순히 이메일이 비어있지 않은 경우를 확인)
            console.log("로그인 성공:", email);
            navigate('/MainPage'); // 메인 페이지로 이동
        } else {
            console.log("이메일을 입력해주세요.");
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
