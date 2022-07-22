/**
 * localStorage可能存在浏览器不支持，引入store库，兼容所有浏览器
 * 编写封装的存储类：utils/storageUtils.js
 */
 
// 安装store模块


const USER_KEY = 'user_key'
export function    saveUser(user:string) {
    // localStorage.setItem(USER_KEY, JSON.stringify(user))
    
    localStorage.setItem(USER_KEY,user)
}
export function   getUser() {
    // return JSON.parse(localStorage.getItem(USER_KEY) || '{}')

    return localStorage.getItem(USER_KEY) || ""
}
export function  removerUser() {
    // localStorage.removeItem(USER_KEY)

    localStorage.removeItem(USER_KEY)
}
 
