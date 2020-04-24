// 引入 cookies
// import Cookies from 'js-cookie'

/**
 * 记住我的功能
 * 每个浏览器对cookie的大小和数量都有限制
 *如果是rememberMe=true，则使用localStorage存储，并设置过期时间；
 *如果rememberMe=false，则使用sessionStorage存储，会话结束就过期（也可以使用cookie记录用户信息）。
 */
// 记住我代码开始
// const userInfoKey = 'userInfo'
// // 7 day
// const EXP = 7
// export function setUserInfo(data, persistent = false) {
//   if (persistent) {
//     // eslint-disable-next-line no-undef
//     localStorageSetItem(userInfoKey, data)
//   } else {
//     sessionStorage.setItem(userInfoKey, JSON.stringify(data))
//   }
// }
// // EXP * 24 * 60 * 60 * 1 * 1000
// export function getUserInfo() {
//   if (sessionStorage.getItem(userInfoKey)) {
//     return JSON.parse(sessionStorage.getItem(userInfoKey))
//   } else {
//     // eslint-disable-next-line no-undef
//     return localStorageGetItem(userInfoKey, EXP * 24 * 60 * 60 * 1000)
//   }
// }
// 记住我代码结束

// tokenkey
const TokenKey = 'tokenKey'
export function getToken() {
  return sessionStorage.getItem(TokenKey)
}

export function setToken(token) {
  // 会话结束就过期
  return sessionStorage.setItem(TokenKey, token)
}

export function removeToken() {
  return sessionStorage.removeItem(TokenKey)
}
