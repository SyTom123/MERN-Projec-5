import { useEffect, useState } from "react";
import { getListTopics } from "../../services/topicsService";
import { Link } from "react-router-dom";
import "./Topic.scss";

const Topic = () => {

    const [data, setData] = useState([]);
    useEffect(()=> {
        const fetchApi = async() => {
            const result = await getListTopics();
            setData(result);
        }
        fetchApi();
    },[]);

    return (
        <div className="topic">
            <h3>Danh sách chủ đề</h3>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên chủ đề</th>
                        <th>Hành động</th>
                    </tr>
                </thead>  
                <tbody>
                    {data.length > 0 && (
                        <>
                            {data.map((item) => 
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>
                                        <Link to = {`/quiz/${item.id}`}>
                                            <button className="button-success">Làm bài</button>
                                        </Link>
                                    </td>
                                </tr>
                            )}
                        </>
                    )}
                    
                </tbody>  
            </table>
        </div>
    )
}

export default Topic;