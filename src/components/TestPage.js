import getJpDictData from "../js/jpvocabulary";
import { useState } from "react";

const TestPage = () => {
    const [Data, setData] = useState([]);
    
    const test = async () => {
        const response = await getJpDictData(1);
        console.log(response[0]['kanji']);
        
    }

    return (
        <div>
            <button onClick={test}>TEST</button>
        </div>
    );
}

export default TestPage; // LoginPage 컴포넌트 내보내기
