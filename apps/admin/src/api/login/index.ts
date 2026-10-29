import request from '@/request'
import type { BackendLoginResult, LoginParams, LoginResult, UserInfo } from './types'

const AUTH_PREFIX = '/api/auth'

/**
 * 登录：后端返回 { tokenName, tokenValue, expiresIn }，转换成前端会话需要的结构
 */
export const loginApi = async (data: LoginParams): Promise<LoginResult> => {
  const res = await request.post<BackendLoginResult>({ url: `${AUTH_PREFIX}/login`, data })
  return {
    accessToken: res.data.tokenValue,
    user: { username: data.username }
  }
}

/**
 * 当前登录人：用于补全昵称、部门、角色、权限等展示信息，同时验证 token 是否有效
 */
export const getCurrentUserApi = () => {
  return request.get<UserInfo>({ url: `${AUTH_PREFIX}/me` })
}

export const logoutApi = () => {
  return request.post({ url: `${AUTH_PREFIX}/logout` })
}

export const getRouteListApi = () => {
  return request.get<AppCustomRouteRecordRaw[]>({ url: '/mock/role/list' })
}
