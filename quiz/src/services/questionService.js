import { get } from "../ultils/request";

export const getListQuestion = async (id) => {
    const result = await get(`questions?topicId=${id}`);
    return result; 
}