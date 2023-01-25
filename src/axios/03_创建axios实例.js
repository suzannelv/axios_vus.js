// axios默认库提供给我们的实例对象
axios.get("http://123.207.32.32:1888/02_param/postjson")

// 创建其他的实例发送网络请求
const instance1 = axios.create({
  baseURL:"http://123.207.32.32:9001",
  timeout:6000,
  headers: {}
})
instance1.get("/lyric",{
  params: {
    id : 500665346
  }
}).then(res=>{
  console.log("res:", res.data)
})


const instance2 = axios.create({
  baseURL:"http://123.207.32.32:8000",
  timeout:8000,
  headers: {}
})
instance2.get()