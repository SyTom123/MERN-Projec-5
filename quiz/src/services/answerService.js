import { get, post, del } from "../ultils/request";
import {getCookie} from '../helpers/cookie'
export const createAnswer = async (options) => {
    const result = await post(`answers`,options);
    return result; 
}
export const getAnswer = async (id) => {
    const result = await get(`answers/${id}`);
    return result; 
}
export const getAnswerById = async () => {
    const userId = getCookie("id");
    const result = await get(`answers?userId=${userId}`);
    return result; 
}
export const deleteAnswer = async (id) => {
    const result = await del(`answers/${id}`);
    return result;

}