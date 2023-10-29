import axios from 'axios'
const instance = axios.create({
    // baseURL: "http://localhost:3002/"
    baseURL: "sy-tomquiz.vercel.app"
})
export default instance;