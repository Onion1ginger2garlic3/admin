import axios from '@/axios';

export function loginApi(username, email, password){
    return axios.post("", {
        username,
        email,
        password
    })
}
export function logoutApi(){
    return axios.get("")
}
export function getinfo(){
    return axios.get("")
}
