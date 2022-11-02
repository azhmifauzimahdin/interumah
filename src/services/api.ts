import axios from "axios"

export const httpRequest = axios.create({
    baseURL: 'https://mka-team-f-dev.herokuapp.com'
})

httpRequest.interceptors.request.use(config => {
    const appToken = localStorage.getItem('token')
    const refreshToken = localStorage.getItem('refreshtoken')
    if (appToken) {
        config.headers = {
            'Authorization': `Bearer ${appToken}`,
            'refreshToken': `Beare ${refreshToken}`
        }
    }
    return config
})
