
import { useNavigate } from 'react-router-dom';
import register from '../js/user';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>  정보처리기사 CBT </h1>
            <button onClick={() => navigate('LoginPage')}>로그인</button>
            <button onClick={() => navigate('RegistPage')}>회원가입</button>
            <button onClick={() => register("test", "djdjd")} > TEST</button>
        
        </div>
    );
}

export default HomePage;