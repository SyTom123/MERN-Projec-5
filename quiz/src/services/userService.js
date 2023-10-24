import {get} from '../ultils/request'
export const getUser = async (email,password) => {
    const result = await get(`users?email=${email}&password=${password}`);
    return result;
}

export const getUserByToken = async(token) => {
    const result = await get(`users?token=${token}`);
    return result;
}