import { useEffect, useState } from "react";
import { deleteAnswer, getAnswerById } from "../../services/answerService";
import { getListTopics } from "../../services/topicsService";
import { Link } from "react-router-dom";
import './Answer.scss';

const Answer = () => {
    const [dataAnswers, setDataAnswers] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const response = await getAnswerById();
            const topics = await getListTopics();

            let result = [];
            for (let i = 0; i < response.length; i++) {
                result.push({
                    ...response[i],
                    ...topics.find(item => item.id === response[i].topicId),
                    id: response[i].id
                })
            }
            if (result) {
                setDataAnswers(result);
            }
        }
        fetchApi();
    }, []);

    const handleDelete =async (id) => {
        const confirm = window.confirm("Bạn có chắc chắn muốn xóa bản ghi hay không?");
        if(!confirm) {
            return;
        }
        const result = await deleteAnswer(id);
        if(result) {
            setDataAnswers( dataAnswers.filter(item => item.id !== id));
        }
    }

    return (
        <div className="container">
            <div className="answer">
                <h3>Danh sách bài đã luyện tập</h3>
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên chủ đề</th>
                            <th>Ngày làm</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataAnswers.length > 0 && (
                            <>
                                {dataAnswers.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.createAt}</td>
                                        <td>
                                            <Link to={`/result/${item.id}`}>
                                                <button className="button-success">
                                                    Xem chi tiết
                                                </button>
                                            </Link>
                                            <Link>
                                                <button
                                                    className="button-danger"
                                                    style={{ marginLeft: "10px" }}
                                                    onClick={() => handleDelete(item.id)}
                                                >
                                                    Xóa
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );

}

export default Answer;