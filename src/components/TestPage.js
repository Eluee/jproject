import {getJpDictData, createQuestionsFromData } from "../js/jpvocabulary";
import { updateUser } from "../js/user";
import { useState } from "react";

const TestPage = () => {
    const [Data, setData] = useState([]);
    
    const test = async () => {
        updateUser("1@naver.com",6, 19);
    }

    return (
        <div>
            <button onClick={test}>TEST</button>
        </div>
    );
}

export default TestPage; // LoginPage 컴포넌트 내보내기
