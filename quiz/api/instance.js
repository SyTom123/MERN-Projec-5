import axios from 'axios'
const instance = axios.create({
    baseURL: "http://localhost:3002/"
    // baseURL: "https://quiz-api-pi.vercel.app/"
})
export default instance;