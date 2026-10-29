export interface LoginParams {
  username: string
  password: string
}

/**
 * 后端 /auth/me 返回的登录用户信息
 */
export interface UserInfo {
  userId?: number
  username: string
  nickname?: string
  avatar?: string
  deptId?: number
  deptName?: string
  dataScope?: number
  dataScopeDeptIds?: number[]
  roles?: string[]
  permissions?: string[]
  loginTime?: number
}

/**
 * 后端 /auth/login 的返回结构
 */
export interface BackendLoginResult {
  tokenName: string
  tokenValue: string
  expiresIn: number
}

export interface LoginResult {
  accessToken: string
  user: UserInfo
}
