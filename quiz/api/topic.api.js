import instance from "./instance";

export const getListTopics = () => {
    const url = '/topics';
    return instance.get(url)
}