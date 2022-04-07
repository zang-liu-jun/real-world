import axios from "axios";
import {useUserStore} from "@/store";

const userStore=useUserStore()
const instance=axios.create({
  baseURL: "http://42.192.180.126:9000",
  timeout: 3000
})

instance.interceptors.request.use((config)=>{
  const token=userStore.token.value
  if(token!==''){
     config.headers!.Authorization=token
  }
  return config
})

export default instance
