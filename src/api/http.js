import axios from 'axios'
import Cookies from 'js-cookie'

const http = axios.create({
  timeout: 30000
})
// request 拦截器
http.interceptors.request.use(
  config => {
    config.headers['token'] = Cookies.get("token")
    //   if (store.getters.userInfo.token) {

    //   }
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// respone 拦截器
http.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
    // console.log(response)
    // const res = response.data
    // if (res.error) {
    //   console.log('res.error')
    //   tools.notify({
    //     type: 'error',
    //     message: res.error.message
    //   })
    //   if (res.code === '') {
    //     // 接口自定义错误代码
    //     // 移除登陆token 显示接口错误消息
    //   }
    //   return Promise.reject(res)
    // }
    // return Promise.resolve(res)
  },
  error => {
    alert("error message")
    return Promise.reject(error)
  }
)
export default http