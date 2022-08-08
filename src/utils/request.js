import axios from 'axios'
// import qs from 'qs'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
console.log('process.env.BASE_API===', process.env)

const service = axios.create({
//   baseURL: '/api/', //process.env.BASE_API, // api 的 base_url
  baseURL: process.env.VUE_APP_BASE_API, // api 的 base_url
  timeout: 30000 // 请求超时时间
})

service.interceptors.request.use(
  config => {
    // window.app.$vux.loading.show({text: 'loading'})
    // if (!(config.headers && config.headers.EnvVariables)) config.baseURL += 'kfcloud-crm' // 默认为客户模块
    const flag =
          config.headers['Content-Type'] &&
          config.headers['Content-Type'].indexOf('application/json') !== -1
    if (!flag) {
      const mult =
              config.headers['Content-Type'] &&
              config.headers['Content-Type'].indexOf('multipart/form-data') !== -1
      if (mult) {
        config.data = config.data
      } else {
        // config.data = qs.stringify(config.data)
      }
    }
      // Lockr.get('kfcloud-auth') && (config.headers['kfcloud-auth'] = Lockr.get('kfcloud-auth'))
    // config.headers['kfcloud-auth'] = 'bearer eyJ0eXAiOiJKc29uV2ViVG9rZW4iLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJpc3N1c2VyIiwiYXVkIjoiYXVkaWVuY2UiLCJ1c2VyX25hbWUiOiJhZG1pbiIsIm9yZ190eXBlIjoiIiwicmVhbG5hbWUiOiJhZG1pbiIsImlzX2xvZ2luX3NpbmdsZSI6IjAiLCJ1c2VyX3R5cGUiOiIwIiwidXNlcl9pZCI6IjMiLCJ0ZW5hbnRfdXVpZCI6ImVhZThmZWIyLTM2MTAtNGQ4MS05NGMzLTM1ZjA2MzM1ZmU3MyIsIm9yZ19pZCI6IiIsImlzX2FkbWluX3JvbGUiOiIxIiwiaXNfY2hpbGRfYWRtaW5fcm9sZSI6IjAiLCJvcmdfbmFtZSI6IiIsIm9yZ19jb2RlIjoiIiwiYWNjb3VudCI6ImFkbWluIiwidGVuYW50X2NvZGUiOiIwMDAwMDAiLCJleHAiOjE2NTk5ODUyMDAsIm5iZiI6MTY1OTkyMzg2MX0.57Abrgy2fDt5QUPFyJhTS1ONp1q1TQYt9NZcg0ORh7I'
    return config
  },
  error => {
      // Do something with request error
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    // window.app.$vux.loading.hide()
      /**
       * code为非20000是抛错 可结合自己业务进行修改
       */
    const res = response.data
    if (response.status === 200 && response.config.responseType === 'blob') {
          // 文件类型特殊处理
      return response
    } else if (res.code !== 0 && res.code !== 200) {
      res.msg = res.msg || res.message
      return Promise.reject(res.msg)
    } else {
      return res
    }
  },
  error => {
    // window.app.$vux.loading.hide()
    // window.app.$vux.toast.show({text: '您的网络状态不佳，请稍后再试', type: 'cancel'})
    return Promise.reject(error)
  }
)

export default service
