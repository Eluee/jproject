import axios from "axios";
import { SERVERURL } from "./constants";

// /api/jpdictionary/difflevel/{difflevel}
async function getJpDictData(difflevel) {
    try {
        const response = await axios.get(`${SERVERURL}/api/jpdictionary/difflevel/${difflevel}`);
        return response.data;  // 서버로부터 받은 데이터
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function createQuestionsFromData(data) {
    // 데이터를 문제 형태로 변환하는 함수
    return data.map((item) => {
        // 현재 아이템의 뜻(정답)을 포함한 3개의 무작위 옵션을 선택
        const correctAnswer = item.mean;
        const allMeanings = data.map(d => d.mean); // 모든 뜻을 배열로 가져옴
        const options = shuffleOptions(allMeanings, correctAnswer); // 무작위로 섞은 3개의 옵션 중 정답 포함

        return {
            japaneseWord: item.kanji + ' (' + item.onyomi + ')',
            options: options,
            correctAnswer: correctAnswer,
        };
    });
}

// 옵션을 무작위로 섞는 함수 (정답 포함)
function shuffleOptions(allMeanings, correctAnswer) {
    // 정답을 포함한 다른 두개의 무작위 뜻을 선택
    let options = [correctAnswer];
    
    while (options.length < 3) {
        const randomOption = allMeanings[Math.floor(Math.random() * allMeanings.length)];
        // 중복 방지
        if (!options.includes(randomOption)) {
            options.push(randomOption);
        }
    }

    // 옵션 배열을 무작위로 섞음
    return options.sort(() => Math.random() - 0.5);
}

export {getJpDictData, createQuestionsFromData};

