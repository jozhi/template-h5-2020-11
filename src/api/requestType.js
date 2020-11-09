import axios from './http'

export default {
  // get请求
  get(url, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: url,
        params: param
      }).then(res => {
        resolve(res.data)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  // post请求
  post(url, param, config) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: url,
        data: param,
        config
      }).then(res => {
        resolve(res.data)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}
