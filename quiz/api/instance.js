import axios from 'axios'
const instance = axios.create({
    // baseURL: "http://localhost:3002/"
    baseURL: "sytomquizapi.vercel.app"
})
export default instance;