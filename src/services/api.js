
import axios from "axios";

const apiCodeBurger = axios.create({
    baseURL: 'https://projeto-loca-oes-back-end-production.up.railway.app/'
})

apiCodeBurger.interceptors.request.use(async config => {
    const userData = await localStorage.getItem('dadosLocal:userData')
    const token = userData && JSON.parse(userData).token
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default apiCodeBurger