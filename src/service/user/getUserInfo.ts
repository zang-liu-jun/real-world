import request from "../http"

export async function getUserInfo(){
  const res=await request.get("/profiles/fischer")
    .catch(err=>{
      throw new Error("网络错误")
    })
  const data=res.data
  console.log("获取用户信息",data)
  if(data.code!==200){
    throw new Error(data.msg)
  }
  return data
}

/*
import {onMounted, reactive, ref} from "vue";
import {getUserInfo} from "@/service/user/getUserInfo";
let imgSrc=ref("")

const userinfo:UserInfo=reactive({
  username:'',
  bio:'',
  image:''
})

onMounted(()=>{
  getUserInfo()
    .then(res=>{
      ({username:userinfo.username,bio:userinfo.bio,image:userinfo.image}=res)
    })
})
*/
