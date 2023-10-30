import instance from "./instance";
import { getCookie } from "../src/helpers/cookie";
const token = getCookie("token") || "";
const config = {
    headers: { Authorization: `Bearer ${token}` }
};
export const createAnswer = (options, id) => {
    const url = `/answers/${id}`;
    return instance.post(url, options,config)
}

export const getDetailAnswer = (id) => {
    const url = `/answers/${id}`;
    return instance.get(url);
}

export const deleteAnswer = (id) => {
    const url = `/answers/${id}`;
    return instance.delete(url);
}


