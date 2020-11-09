import req from '../api/requestType'

/**
 * 通用的POST请求接口
 * @param url
 * @param param
 * @returns {*}
 */
export const commonPost = (url, param, config) => {
  // console.log(url)
  return req.post(url, param, config)
}

/**
 * 通用的GET请求接口
 * @param url
 * @param param
 * @returns {*}
 */
export const commonGet = (url, param, whichget) => {
  // console.log(url, param, whichget)
  return req.get(url, param, whichget)
}

/**
 * 通用的以x-www-form-urlencoded方式发送POST请求
 * @param url
 * @param params
 * @returns {*}
 */
export const formPost = (url, params) => {
  return req.formPost(url, params)
}

/**
 * 获取表格
 * @param param
 * @returns {*}
 * @constructor
 */
export const Table = param => {
  return req.get('epsoft/pageData/table', param)
}

/**
 * 查看表格详情
 * @param param
 * @returns {*}
 * @constructor
 */
export const Detail = param => {
  return req.get('epsoft/pageData/get', param)
}

/**
 * 更新表单
 * @param param
 * @returns {*}
 * @constructor
 */
export const PageDateUpdate = param => {
  return req.post('epsoft/pageData/update', param)
}

export const baseURL = req.baseURL
