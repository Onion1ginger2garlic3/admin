import {defineStore} from "pinia"
import {getinfo,loginApi} from '@/api/manager';
import { setToken } from '@/composables/auth';

export const useTestStore = defineStore('Test', {
    state(){
        return {
            //用户信息
            user: {},
            studentList: [],
            teacherList: [],
            classList: [],
            MajorList: [],
            UserList: []
        }
    },
    //getters类似于computed
    getters: {

    },
    actions: {
        async loginApi({ username, email, password }) {
          try {
            const res = await loginApi({ username, email, password });
            setToken(res.token); // 保存 Token
            return res; // 返回结果
          } catch (error) {
            console.error('登录失败:', error);
            throw error; // 抛出错误供调用方捕获
          }
        },
        async getinfo() {
          try {
            const res = await getinfo();
            this.setuser(res); // 更新用户信息
            return res; // 返回结果
          } catch (error) {
            console.error('获取用户信息失败:', error);
            throw error; // 抛出错误供调用方捕获
          }
        },
        setuser(value) {
          this.user = value;
        },
        setList(key, value) {
          if (this[key] !== undefined) {
            this[key] = value;
          } else {
            console.warn(`State key "${key}" 不存在`);
          }
        },
      },
    });
