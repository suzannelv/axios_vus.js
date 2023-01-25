// 对实例配置拦截器
axios.interceptors.request.use((config)=>{
  console.log("请求成功拦截")
  // 1. 开始loading动画
  // 2. 对原来的配置进行一些修改, ex:
  // 2.1 header
  // 2.2 认证登录：token/cookie
  // 2.3 请求参数进行某些转化
  return config
}, (err)=>{
  console.log("请求失败拦截")
  return err
})

axios.interceptors.response.use((res)=>{
  console.log("响应成功的拦截")
  // 2.结束loading动画
  return res.data
}, (err)=>{
  console.log("响应失败拦截", err)
  return err
})


axios.get("http://123.207.32.32:8000/home/multidata").then(res=>{
  console.log("res:", res)
}).catch(err => {
  console.log("err", err)
})