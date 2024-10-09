import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <form>
                <p>이메일</p>
                <input></input>
                <button type='submit'>로그인</button>
            </form>
            <button onClick={() => navigate('/RegistPage')}>회원가입</button>
        </div>
    );
}

export default LoginPage;