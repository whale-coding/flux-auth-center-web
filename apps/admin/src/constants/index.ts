/**
 * 请求成功状态码（前端 mock 使用数字 0）
 */
export const SUCCESS_CODE = 0

/**
 * 后端统一响应成功码
 */
export const API_SUCCESS_CODE = '00000'

/**
 * 登录态失效的错误码，命中后清理本地会话并跳转登录页
 */
export const TOKEN_INVALID_CODES = ['A0230', 'A0231']

/**
 * 请求contentType
 */
export const CONTENT_TYPE = 'application/json'

/**
 * 请求超时时间
 */
export const REQUEST_TIMEOUT = 60000

/**
 * 不重定向白名单
 */
export const NO_REDIRECT_WHITE_LIST = ['/login']

/**
 * 不重置路由白名单
 */
export const NO_RESET_WHITE_LIST = [
  'Redirect',
  'RedirectWrap',
  'Login',
  'NoFind',
  'Fallback',
  'Root'
]
