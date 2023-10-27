import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Topic.scss";
import { getListTopics } from "../../../api/topic.api";

const Topic = () => {

    const [dataTopic, setDataTopic] = useState([]);
    useEffect(()=> {
        const fetchApi = async() => {
            const result = await getListTopics();
            setDataTopic(result.data);
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
                    {dataTopic.length > 0 && (
                        <>
                            {dataTopic.map((item, index) => 
                                <tr key={index}>
                                    <td>{index + 1}</td>
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