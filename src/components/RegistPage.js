import React, { useState } from 'react';
import { register } from '../js/user';
import '../styles/RegistPage.css'; // CSS 파일 가져오기

const RegistPage = () => {
    let [inputEmail, setInputEmail] = useState('');
    let [inputName, setInputName] = useState('');

    const handleRegister = (event) => {
        event.preventDefault(); // 페이지 리로드 방지
        register(inputEmail, inputName);
    }

    return (
        <div className="container">
            <form onSubmit={handleRegister} className="form">
                <h1>회원가입</h1>
                <div className="inputGroup">
                    <label className="label">이메일</label>
                    <input type="text" value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} className="input" />
                </div>
                <div className="inputGroup">
                    <label className="label">닉네임</label>
                    <input type="text" value={inputName} onChange={(e) => setInputName(e.target.value)} className="input" />
                </div>
                <button type="submit" className="button">회원가입</button>
            </form>
        </div>
    );
}

export default RegistPage; // RegistPage 컴포넌트 내보내기
