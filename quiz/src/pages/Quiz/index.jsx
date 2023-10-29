/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {getCookie} from "../../helpers/cookie"
import "./Quiz.scss";
import { createAnswer } from '../../services/answerService';
import getDateTime from '../../helpers/getDateTime';
import { getTopic } from '../../../api/topic.api';


const Quiz = () => {
    const params = useParams();
    const [dataQuestions, setDataQuestions] = useState([]);
    const [dataTopic, setDataTopic] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const fetApi = async () => {
            const result = await getTopic(params.id);
            if (result) {
                setDataTopic(result.data);
            }
        }
        fetApi();
    }, []);

    useEffect(() => {
        const fetApi = async () => {
            const result = await getTopic(params.id);
            if (result) {
                setDataQuestions(result.data.questions);
            }
        }
        fetApi();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let selectedAnswer = [];
        for(let i = 0; i < e.target.elements.length; i++) {
            if(e.target.elements[i].checked) {
                const name = +(e.target.elements[i].name);
                const value = +(e.target.elements[i].value);
                selectedAnswer.push({
                    questionId: name,
                    answer: value
                })
            }
            
        }
        const options = {
            userId : +getCookie("id"),
            topicId:+params.id,
            answers: selectedAnswer,
            createAt: getDateTime()
        }
        
        const result = await createAnswer(options);
        if(result) {
            navigate(`/result/${result.id}`)
        }

    }
    return (
        <div className='quiz'>
            {dataTopic && (
                <h2 className="quiz__title">Bài Quiz chủ đề : {dataTopic.name}</h2>
            )}
            {dataQuestions.length > 0 && (
                <>
                    <form className="quiz__questions" onSubmit={handleSubmit}>
                        {
                            dataQuestions.map((item, i) => (

                                <div className="quiz__question" key={item._id}>

                                    <p>Câu {i + 1}: {item.question}</p>

                                    {item.answers.map((answer, index) => (
                                        <div className="quiz__question-item" key={index}>
                                            <input id={`quiz/${item._id}-${index}`} 
                                                type="radio" name={item._id} value={index} />

                                            <label htmlFor={`quiz/${item._id}-${index}`}>
                                                {answer}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            ))
                        }
                        <button className='button-success'>Nộp bài</button>
                    </form>
                </>
            )}
        </div>
    )
}

export default Quiz;