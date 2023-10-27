/* eslint-disable react-hooks/exhaustive-deps */
import {getCookie} from '../../helpers/cookie';
import {Link} from 'react-router-dom';
import './Home.scss'
import { getUserById } from '../../../api/user.api';
import { useEffect, useState } from 'react';
const Home =() => {
    const token = getCookie("token");
    const id = getCookie("id");
    const [userInfo, setUserInfo] = useState([]);

    useEffect(()=> {
        const fetchApi = async () => {
            const result = await getUserById(id);
            if(result) {
                setUserInfo(result.data.user)
            }
        }
        fetchApi()
    },[]);
    
    return (
        <div className="home">

<div className="home__content">
    {token && (
        <div className='home__title'>
            <p>
               {
                userInfo && <>Xin chào bạn: <strong>{userInfo.fullName}</strong></>
               } 
            </p>
            <Link to="/topic">
              <button className="button-success" style={{ marginRight: "15px" }}>
                Danh sách chủ đề ôn luyện
              </button>
            </Link>
            <Link to="/answer">
              <button className="button-success">Danh sách bài đã luyện tập</button>
            </Link>
            <hr className="home__hr" />
        </div>
    )}
    <h3>Chào mừng bạn đến với websize trắc nghiệm online</h3>
    <p>
        Websize trắc nghiệm online lập trình Frond End là một nền tảng trực
        tuyến cho phép các lập trình viên Frond End kiểm tra , làm các bài
        tập trắc nghiệm, đánh giá và đo đạc kiến thức của mình trong lĩnh
        vực lập trình Frond end.
    </p>
    <p>
        Đối với các lập trình viên Frond End, website trắc nghiệm online
        cung cấp các bài kiểm tra để giúp họ nâng cao kiến thức và kỹ năng
        của mình trong các công nghệ và công cụ lập trình như HTLM, CSS, JS,
        Boottraps, React.....
    </p>
    <>
    {!token && (
        <p>
            Vui lòng đăng nhập để bắt đầu thực hiện các bài tâp trắc nghiệm
            của chúng tôi!
        </p>
    )}
    </>
</div>
</div>
    )
}

export default Home;