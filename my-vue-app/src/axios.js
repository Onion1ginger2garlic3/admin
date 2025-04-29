import axios from 'axios'
import { getToken, setToken, removeToken } from './composables/auth';
import {Msg} from "@/utils/msg"
import {useTestStore} from '@/store';

const service = axios.create({
    baseURL: "http://"
})

// 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    
    //往header头自动添加/token
    const token = getToken()
     
    if(token){
        config.headers["token"] = token
    }

    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data;
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    const msg = error.response.msg || '请求失败'
    if(msg === "非法token，请先登录！"){
      const store = useTestStore()
      store.logoutApi().finally(()=>location.reload())

    }
    Msg(msg,"error")
    return Promise.reject(error);
  });

export default service