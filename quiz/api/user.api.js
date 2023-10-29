import instance from "./instance";

export const loginUser = (user) => {
    const url = '/users/login';
    return instance.post(url,user)
}
export const registerUser = (user) => {
    const url = '/users/register';
    return instance.post(url,user)
}
export const getDetailUser = (id) => {
    const url = `/users/${id}`;
    return instance.get(url,id)
}

