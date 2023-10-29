import instance from "./instance";

export const getListTopics = () => {
    const url = '/topics';
    return instance.get(url)
}

export const getTopic = (id) => {
    const url = `/topics/${id}`;
    return instance.get(url);
}