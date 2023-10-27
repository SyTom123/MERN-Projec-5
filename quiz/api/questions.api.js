import instance from "./instance";

export const getListQuestions = () => {
    const url = '/questions';
    return instance.get(url)
}