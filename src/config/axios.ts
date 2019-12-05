import axios from 'axios';
import  history from './history'

import { appID,appSecret } from './appKey'

//生成axios实例,配置URL及验证headers
const instance = axios.create({
    baseURL: 'https://gp-server.hunger-valley.com/',
    headers: {
        't-app-id': appID,
        't-app-secret': appSecret
    }
});

instance.interceptors.request.use(function (config) {
    const xToken = localStorage.getItem('x-token')//读取JWT
    if (xToken) {
        config.headers['Authorization'] = `Bearer ${xToken}`
    }
    return config;
}, function (error) {
    console.error(error)
    return Promise.reject(error);
});


instance.interceptors.response.use(function (response) {
    if (response.headers['x-token']) {//保存JWT
        localStorage.setItem('x-token', response.headers['x-token'])
    }
    return response;
}, function (error) {
    if (error.response.status === 401) {
        console.log('重定向');
        history.push("/LogIn")//跳转登录页
    }
    return Promise.reject(error);
});

export default instance