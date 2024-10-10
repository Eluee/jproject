import React from 'react';
import { useUser } from './UserContext'; // UserContext import
import '../styles/ProfilePage.css'; // 스타일 파일 import

const ProfilePage = () => {
    const { userData } = useUser(); // UserContext에서 userData 가져오기

    // userData가 없는 경우 처리
    if (!userData) {
        return <div>사용자 정보가 없습니다.</div>;
    }

    return (
        <div className="container"> {/* 전체 컨테이너 */}
            <div className="profileBox"> {/* 프로필 박스 */}
                <h1>프로필 정보</h1>
               
                <p><strong>이름:</strong> {userData.name}</p>
                <p><strong>이메일:</strong> {userData.email}</p>
                <p><strong>레벨:</strong> {userData.difflevel}</p>
                <p><strong>정답률:</strong> {userData.correct_rate}</p>
            </div>
        </div>
    );
}

export default ProfilePage; 
