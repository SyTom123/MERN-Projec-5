import { getCookie } from '../helpers/cookie';
import {get, post} from '../ultils/request'
export const getUser = async (email= "",password ="") => {
  
    const result = await get(`users/login`);
    return result; 
}

export const getUserByID = async () => {
    const id = getCookie("id");
    const result = await get(`users/${id}`);
    return result;
}
export const createUser = async (options) => {
    const result = await post (`users`, options);
    return result;
}