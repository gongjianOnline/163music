import axios from 'axios'

// 根据环境变量区分接口的默认地址
switch (process.env.NODE_ENV) {
  case 'development':
    axios.defaults.baseURL = '/163'
    break
  case 'production':
    axios.defaults.baseURL = 'http://114.115.218.92:3002/'
    break
}

// 设置超市时间和跨域是允许携带凭证
axios.defaults.timeout = 50000
axios.defaults.withCredentials = true
// 设置请求拦截器
axios.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
// 设置响应拦截器
axios.interceptors.response.use(
  (response) => {
    return response.data
  },(error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          alert('没有权限')
          break
        case 403:
          alert('服务器拒绝执行')
          break
        case 404:
          alert('找不到页面')
          break
      }
    } else {
      // 服务器连接结果没有返回
      if (!window.navigator.onLine) {
        alert('断网处理,可以跳转到断网页面')
        return
      }
      return Promise.reject(error)
    }
    return Promise.reject(error); 
  }
)

export default axios
