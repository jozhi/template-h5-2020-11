import axios from 'axios'
import qs from 'qs'
// const isDev = process.env.NODE_ENV === 'development'
// 添加的属性

console.log('process.env.NODE_ENV:',process.env.NODE_ENV);

// 使用axios发送post请求，将JSON数据改为为form类型
axios.defaults.headers = {
  'Content-type': 'application/x-www-form-urlencoded',
  'Access-Control-Allow-Origin':'*/*'
};
axios.defaults.withCredentials = true
axios.defaults.timeout = 60000

export default function Axios(options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create()
    // request 拦截器
    instance.interceptors.request.use(
      config => {
        if (config.method.toLocaleLowerCase() === 'post') {
          config.data = qs.stringify(config.data) // 转为formdata数据格式
        }
        return config
      },
      error => {
        return Promise.reject(error) // 在调用的那边可以拿到(catch)你想返回的错误信息
      }
    )
    // response 拦截器
    instance.interceptors.response.use(
      response => {
        // console.log(response)
        let data
        // IE9时response.data是undefined，因此需要使用response.request.responseText(Stringify后的字符串)
        if (response.data === undefined) {
          if (typeof response.request.responseText === 'string') {
            data = JSON.parse(response.request.responseText)
          } else {
            data = response.request.responseText
          }
        } else {
          if (typeof response.data === 'string') {
            data = JSON.parse(response.data)
          } else {
            data = response.data
          }
        }
        return {
          statusText: response.request.statusText,
          status: response.request.status,
          data: data
        }
      },
      err => {
        if (err.code === 'ECONNABORTED' && err.message.indexOf('timeout') !== -1) {
          this.$toast('请求超时')
          console.log('根据你设置的timeout/真的请求超时 判断请求现在超时了，你可以在这里加入超时的处理方案')
        }
        if (err && err.response) {
          switch (err.response.status) {
            case 400:
              err.message = '请求错误 (code 400)'
              break
            case 401:
              err.message = '未授权，请登录 (code 401)'
              break
            case 403:
              err.message = '拒绝访问 (code 403)'
              break
            case 404:
              err.message = `请求地址出错: ${err.response.config.url} (code 404)`
              break
            case 408:
              err.message = '请求超时 (code 408)'
              break
            case 500:
              err.message = '服务器内部错误 (code 500)'
              break
            case 501:
              err.message = '服务未实现 (code 501)'
              break
            case 502:
              err.message = '网关错误 (code 502)'
              break
            case 503:
              err.message = '服务不可用 (code 503)'
              break
            case 504:
              err.message = '网关超时 (code 504)'
              break
            case 505:
              err.message = 'HTTP版本不受支持 (code 505)'
              break
            default:
          }
        }
        return Promise.reject(err) // 返回接口返回的错误信息
      }
    )

    // 请求处理
    instance(options)
      .then((res) => {
        resolve(res)
        return false
      })
      .catch((error) => {
        reject(error)
      })
  })
}
