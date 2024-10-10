import axios from "axios";
import { SERVERURL } from "./constants";

// /api/jpdictionary/difflevel/{difflevel}
async function getJpDictData(difflevel) {
    try {
        const response = await axios.get(`${SERVERURL}/api/jpdictionary/difflevel/${difflevel}`);
        console.log(response.data);  // 서버로부터 받은 데이터
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export default getJpDictData;

