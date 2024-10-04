import axios from 'axios'
import { ACCESS_TOKEN } from './constants'


const api_tision = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL
    
})

api_tision.interceptors.request.use(
    (config)=>{
        const token = localStorage.getItem(ACCESS_TOKEN)
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }

        return config
    },
    (error)=>{
       return Promise.reject(error)
    }
)

export default api_tision