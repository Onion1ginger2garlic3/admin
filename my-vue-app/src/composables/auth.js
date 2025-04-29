import {useCookies} from  '@vueuse/integrations/useCookies'
const TokenKey = "admin-token"
const cookie = useCookies()

export function getToken(){
    return cookie.get(TokenKey)
}

export function setToken(){
    return cookie.set(TokenKey)
}

export function removeToken(){
    return cookie.remove(TokenKey)
}