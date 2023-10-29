import instance from "./instance";

export const getListQuestions = () => {
    const url = '/questions';
    return instance.get(url)
}

export const getQuestion = (id) => {
    const url = `/questions/${id}`;
    return instance.get(url);
}