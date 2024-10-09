import React, {useState} from 'react';
import register from '../js/user';


const RegistPage = () => {
    let [inputEmail, setInputEmail] = useState('');
    let [inputName, setInputName] = useState('');
    const handleRegister = (event) => {
      event.preventDefault(); // 기존 JS와 마찬가지로 페이지 리로드 방지
      register(inputEmail, inputName);
    }
  
    return (
      <div className="App">
        <form onSubmit={handleRegister}>
          <h1>회원가입</h1>
          <div>
            <p>이메일</p>
            <input type="text" value={inputEmail} onChange={(e) => setInputEmail(e.target.value)}></input>
            <p>닉네임</p>
            <input type="text" value={inputName} onChange={(e) => setInputName(e.target.value)}></input>
          </div>
          <button type="submit">회원가입</button>
        </form>
      </div>
    );
}

export default RegistPage;