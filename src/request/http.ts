import axios from "axios" // 引入axios

// 环境的切换
// if (process.env.NODE_ENV === 'development') {
//   axios.defaults.baseURL = 'https://www.baidu.com';}
//
// else if (process.env.NODE_ENV === 'production') {
//   axios.defaults.baseURL = 'https://www.production.com';
// }
axios.defaults.timeout = 10000

// 请求拦截
axios.interceptors.request.use(
    (config) => {
        // 每次发送请求之前判断本地中是否存在token
        // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
        const token = localStorage.getItem("token")
        token && (config.headers.Authorization = token)
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export { axios }
