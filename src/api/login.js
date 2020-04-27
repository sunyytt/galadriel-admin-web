import request from '@/utils/request'

// 获取验证码
export function getCodeImg() {
  return request({
    url: 'auth/code',
    method: 'get'
  })
}

// 登录请求
export function loginApi(data) {
  return request({
    url: '/auth/login',
    method: 'post',
    data
  })
}

// 根据token 获取用户信息 改造 token 放入header
export function getInfoApi(token) {
  return request({
    url: '/auth/info',
    method: 'get',
    params: { token }
  })
}

export function logouApi() {
  return request({
    url: '/auth/logout',
    method: 'post'
  })
}
