import { getCookie } from '../helpers/cookie';
import {get, post} from '../ultils/request'
export const getUser = async (email= "",password ="") => {
    let pass = "";
    if(password != "") {
        pass = `&password=${password}`
    }
    const result = await get(`users?email=${email}${pass}`);
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