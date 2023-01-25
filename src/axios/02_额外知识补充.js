// 1.baseURL
const baseURL = "http://123.207.32.32:8000"
// 给axios实例配置公共的基础配置
axios.defaults.baseURL = baseURL
axios.defaults.timeout = 3000
axios.defaults.headers = {}
// 1.1 get /home/multidata
axios.get("/home/multidata").then(res=>{
  console.log("res:", res.data)
})

// 1.2 get: /home/data

// 2. axios.all 可以发送多个请求
// 相当于promise.all
axios.all([
  axios.get("/home/multidata"),
  axios.get("https://cyan-tired-caiman.cyclic.app/api/movies")
]).then(res=>{
  console.log("res:", res)
})
