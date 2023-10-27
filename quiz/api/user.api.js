import instance from "./instance";

export const loginUser = (user) => {
    const url = '/users/login';
    return instance.post(url,user)
}
