import instance from "./instance";

export const createAnswer = (options) => {
    const url = '/answers';
    return instance.post(url, options)
}

export const getDetailAnswer = (id) => {
    const url = `/answers/${id}`;
    return instance.get(url);
}

export const deleteAnswer = (id) => {
    const url = `/answers/${id}`;
    return instance.delete(url);
}


