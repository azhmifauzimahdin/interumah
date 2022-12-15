import axios from "axios"
// import { authService } from "."

export const httpRequest = axios.create({
    baseURL: 'http://103.250.10.102'
})

httpRequest.interceptors.request.use(config => {
    const appToken = localStorage.getItem('token')
    const authToken = localStorage.getItem('authToken')
    if (appToken) {
        config.headers = {
            'Authorization': `Bearer ${appToken}`,
        }
    }
    if (authToken) {
        config.headers = {
            'Authorization': `Bearer ${authToken}`,
        }
    }
    return config
})

// httpRequest.interceptors.response.use(response => {
//     return response
// }, async error => {
//     const originalRequest = error.config
//     if (error.response.status === 403) {

//         const refreshToken = localStorage.getItem("refreshToken")
//         console.log("refreshToken", refreshToken)
//         await authService.refreshAccessToken(refreshToken as string)
//             .then(response => {
//                 console.log("response api", response.data)
//                 localStorage.setItem("token", response.data.data.accessToken)

//                 axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem("token");

//                 return axios(originalRequest)
//             })
//             .catch(error => {
//                 console.log("error api", error)
//             })
//     }
//     console.log("masuk")
//     return Promise.reject(error);
// });
