import axios from 'axios';
import router from '@/router'

export function request (config, success, error){
//创建实例
    const instance = axios.create({
        baseURL: "",
        timeout: ""
    })
    //添加请求
    instance.interceptors.request.use(
        function (config){

            return config;
        },
        function (error){

            return Promise.reject(error);
        }
    )
    //添加响应器
    instance.interceptors.response.use(
        function (response){
            return response;
        },
        function (error){
            return Promise.reject(error);
        }
    )
//运用实例发送http
    instance(config)
        .then((res)=>{
            success(res)
        })
        .catch((err)=>{
            error(err)
        })
}
