/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import "./Result.scss"
import { getDetail } from '../../../api/answer.api';
import { getTopic } from '../../../api/topic.api';
const Result = () => {
    const params = useParams();
    const [dataResult, setDataResult] = useState([]);
    const [dataTopic, setDataTopic] = useState();
    const [info, setInfo] = useState();

    useEffect(() => {
        const fetApi = async () => {
            const responseAnswers = await getDetail(params.id);
            const dataAnswers = responseAnswers.data;
            const responseQuestion = await getTopic(dataAnswers.topicId);
            const dataQuestions = responseQuestion.data.questions;
            let result = [];

            for(let i = 0; i < dataQuestions.length; i++) {
                result.push ({
                    ...dataQuestions[i],
                    ...dataAnswers.answers.find(item => 
                        item.questionId === dataQuestions[i].id
                    )
                })
            }

            if (result) {
                setDataResult(result);
            }
            const infoTopic = (await getTopic(dataAnswers.topicId)).data.topics;
            setDataTopic(infoTopic);

            let countAnswerTrue = 0;
            for (const item of result) {
                if(item.answer === item.correctAnswer) {
                    countAnswerTrue ++;
                }
            }
            let info = {
                countAnswerTrue: +countAnswerTrue,
                totalAnswer : +result.length
            }
            setInfo(info);
        }
        fetApi();
    }, []);

  return (
    <div className='result'>
        {dataTopic && <h3 className="result__title">Kết quả chủ đề: {dataTopic.name}</h3>}
        {info && (
          <div className="result__info">
            <span>
              Đúng: <strong> {info.countAnswerTrue}</strong>
            </span>
            <span>
              Sai: <strong>{info.totalAnswer - info.countAnswerTrue}</strong>
            </span>
            <span>
              Tổng số câu:<strong>{info.totalAnswer}</strong>
            </span>
            <span>
              Tỷ lệ đúng:
              <strong>
                {(((info.countAnswerTrue / info.totalAnswer) * 100).toFixed(2)) || 0} %
              </strong>
            </span>
          </div>
        )}
        {dataResult.length > 0 && (
            <>
                <form className="result__questions" >
                    {
                        dataResult.map((item, i) => (

                            <div className="result__question" key={item._id}>

                                <p>
                                    Câu {i + 1}: {item.question}
                                    {(item.answer === item.correctAnswer) ? (
                                    <span className= "result__tag result__tag--true"> Đúng </span>
                                    ):( <span className= "result__tag result__tag--false"> Sai </span>)}
                                </p>

                                { item.answers.map((answer, index) => {
                                    let checked =false;
                                    let className = "";
                                    if(item.answer  === index) {
                                        checked = true;
                                        className = "result__item--selected";
                                    }
                                    if(item.correctAnswer === index ) {
                                        className = "result__item--result";
                                    }
                                    return (
                                        <div className="result__question-item" key={`${item._id}-${index}`}>
                                            <input type="radio" disabled checked={checked}/>
                                            <label className={className}>
                                                {answer}
                                            </label>
                                        </div>
                                    )
                                })}
                                
                            </div>
                        ))
                    }
                </form>
            </>
        )}
        {dataTopic && (
            <Link to = {"/quiz/" + dataTopic.id} >
                <button className='button-success'>Làm lại</button>
            </Link>
        )}
       
    </div>
  )
}

export default Result;