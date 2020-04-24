import request from '@/utils/request'
// 登录请求
export function loginApi(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}
// 根据token 获取用户信息 改造 token 放入header
export function getInfoApi(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logouApi() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
