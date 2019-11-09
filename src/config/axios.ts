import axios from 'axios';
import  history from './history'

const appID = "D6wiWSq4HHEr4r6byqNR4ZbW"
const appSecret = "7AzZnpadyu4Xbgq73tLmoGz9"

const instance = axios.create({
    baseURL: 'https://gp-server.hunger-valley.com/',
    headers: {
        't-app-id': appID,
        't-app-secret': appSecret
    }
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    const xToken = localStorage.getItem('x-token')
    if (xToken) {
        config.headers['Authorization'] = `Bearer ${xToken}`
    }
    return config;
}, function (error) {
    console.error(error)
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Do something with response data
    if (response.headers['x-token']) {
        localStorage.setItem('x-token', response.headers['x-token'])
    }
    return response;
}, function (error) {
    // Do something with response error
    if (error.response.status === 401) {
        console.log('重定向');
        history.push("/LogIn")//跳转登录页
    }
    return Promise.reject(error);
});

export default instance