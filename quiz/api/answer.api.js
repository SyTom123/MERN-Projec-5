import instance from "./instance";

export const createAnswer = (options) => {
    const url = '/answers';
    return instance.post(url, options)
}

export const getDetail = (id) => {
    const url = `/answers/${id}`;
    return instance.get(url);
}


