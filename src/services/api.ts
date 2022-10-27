import axios from "axios"

export const httpRequest = axios.create({
    baseURL: 'https://mka-team-f-dev.herokuapp.com'
})

httpRequest.interceptors.request.use(config => {
    const appToken = localStorage.getItem('@token')
    if (appToken) {
        config.headers = {
            'Authorization': `Bearer ${appToken}`
        }
    }
    return config
})
