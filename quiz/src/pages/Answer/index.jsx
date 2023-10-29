/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Answer.scss';
import {  deleteAnswer } from "../../../api/answer.api";
import { getListTopics } from "../../../api/topic.api";
import { getDetailUser } from "../../../api/user.api";
import { getCookie } from "../../helpers/cookie";

const Answer = () => {
    const [dataAnswers, setDataAnswers] = useState([]);
    const id = getCookie("id");
    useEffect(() => {
        const fetchApi = async () => {
            const responseUser = await getDetailUser(id);
            const responseAnswer = responseUser.data.answers;
            const responseTopics = await getListTopics();
            const topics = responseTopics.data;
            let result = [];
            for (let i = 0; i < responseAnswer.length; i++) {
                result.push({
                    ...responseAnswer[i],
                    ...topics.find(item => item._id === responseAnswer[i].topicId),
                    id: responseAnswer[i]._id
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
                        {dataAnswers.length > 0 ? (
                            <>
                                {dataAnswers.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{new Date(item.createdAt).toLocaleDateString("vi")}</td>
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
                        ):(<tr >
                            <td colSpan ="4" className="text-center">Danh sách trống</td></tr>) }
                    </tbody>
                </table>
            </div>
        </div>
    );

}

export default Answer;