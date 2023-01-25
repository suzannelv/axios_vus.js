import { createApp } from 'vue'
import App from './App.vue'
// import axios from 'axios'
createApp(App).mount('#app')
import hyRequest from './service'

hyRequest.request({
  url: "http://123.207.32.32:8000/home/multidata"
}).then(res=>{
  console.log("res:", res)
})

hyRequest.get({
  url: "http://123.207.32.32:8000/home/multidata"
}).then(res=>{
  console.log("res:", res)
})

