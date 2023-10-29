import instance from "./instance";

export const createAnswer = (options) => {
    const url = '/answers';
    return instance.post(url, options)
}

